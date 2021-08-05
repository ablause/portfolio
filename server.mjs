import fs from 'fs'
import path from 'path'
import http2 from 'http2'
import mime from 'mime-types'
import nodemailer from 'nodemailer'

const prefixAPI = '/api'
const publicRoot = './public'

const options = {
  origins: [process.env.HOST ?? 'https://localhost/'],
  allowHTTP1: true
}

if (process.env.SSL_CERT !== undefined && process.env.SSL_KEY !== undefined) {
  Object.assign(options, {
    cert: fs.readFileSync(process.env.SSL_CERT),
    key: fs.readFileSync(process.env.SSL_KEY)
  })
}

const server = http2.createSecureServer(options)

const smtp = nodemailer.createTransport({
  port: 465,
  secure: true,
  host: process.env.SMTP_HOST,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
})

// Static files
server.on('stream', (stream, headers) => {
  const pathname = headers[http2.constants.HTTP2_HEADER_PATH]

  if (pathname.startsWith(prefixAPI)) return

  let fullPath = path.join(publicRoot, pathname)

  let responseMimeType = mime.lookup(fullPath)

  if (responseMimeType === false) {
    fullPath = path.resolve(publicRoot, 'index.html')
    responseMimeType = 'text/html'
  }

  stream.respondWithFile(fullPath, { 'content-type': responseMimeType }, {
    onError: (err) => {
      if (err.code === 'ENOENT') {
        stream.respond({ ':status': http2.constants.HTTP_STATUS_NOT_FOUND })
      } else {
        stream.respond({ ':status': http2.constants.HTTP_STATUS_INTERNAL_SERVER_ERROR })
      }
      stream.end()
    }
  })
})

// API
server.on('request', (req, res) => {
  if (!req.url.startsWith(prefixAPI)) return

  let body

  req.on('data', (chunk) => {
    body = JSON.parse(chunk.toString())
  })

  req.on('end', () => {
    switch ([req.method, req.url].join(' ')) {
      case 'POST /api/contact': {
        const { name, email, message } = body

        const html = `
                <p>Name: ${name}</p>
                <p>Email: ${email}</p>
                <p>Message:\n ${message}</p>
                `

        smtp.sendMail({ from: email, subject: 'Contact Form Submission', to: process.env.SMTP_USER, html })
          .then(() => res.writeHead(http2.constants.HTTP_STATUS_OK, 'Message Sent'))
          .catch(() => res.writeHead(http2.constants.HTTP_STATUS_INTERNAL_SERVER_ERROR, 'ERROR'))
          .finally(() => res.end())

        break
      }
      default:
        res.writeHead(http2.constants.HTTP_STATUS_NOT_FOUND)
        res.end()
        break
    }
  })
})

server.listen(Number(process.env.PORT ?? 443), () => {
  try {
    smtp.verify()

    console.log('Server is ready!')
  } catch (error) {
    server.close(error)
  }
})

export default server
