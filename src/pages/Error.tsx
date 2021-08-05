import React from 'react'

import { Layout, Section } from '../components'

interface ErrorProps {
  error?: number
}

const Error: React.FC<ErrorProps> = ({ error = 404 }) => {
  const messages: { [error: number]: string } = {
    404: 'Not Found!'
  }

  return (
    <Layout>
      <Section id='error' style={{ height: '80vh' }} title={`${error} - ${messages[error]}`} center>
        <a href='/'>
          Go Home
        </a>
      </Section>
    </Layout>
  )
}

export default Error
