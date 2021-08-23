import express from 'express'
import nodemailer from 'nodemailer'
import compression from 'compression'
import path from 'path'

const server = express()
const publicRoot = './dist'

const smtp = nodemailer.createTransport({
  port: 465,
  secure: true,
  host: String(process.env.SMTP_HOST),
  auth: {
    user: String(process.env.SMTP_USER),
    pass: String(process.env.SMTP_PASS)
  }
})

const mailOptions = {
  subject: 'Contact Form Submission',
  to: process.env.SMTP_USER
}

server.use(compression())
server.use(express.static(publicRoot))
server.use(express.json())

server.use((_, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', process.env.ORIGIN)
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PATCH')
  res.setHeader('Access-Control-Allow-Credentials', false)

  res.setTimeout(60000, () => {
    res.status(408).send('Response processing timed out.')
  })

  next()
})

server.get('*', (_, res) => {
  res.sendFile(path.resolve(publicRoot, 'index.html'))
})

server.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body

    const html = `
                <p>Name: ${name}</p>
                <p>Email: ${email}</p>
                <p>Message:\n ${message}</p>
                `

    await smtp.sendMail({ from: email, html, ...mailOptions })

    res.status(200).json({ message: 'Success' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal Error' })
  }
})

server.listen(Number(process.env.PORT), () => {
  smtp.verify((err) => {
    if (err) throw new Error(err)

    console.log(`Server is available on ${process.env.HOST}:${process.env.PORT}`)
  })
})

export default server
