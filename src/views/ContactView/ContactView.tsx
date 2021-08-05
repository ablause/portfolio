import React, { ChangeEventHandler, FormEventHandler, forwardRef, useState } from 'react'
import classNames from 'classnames'

import styles from './ContactView.module.css'
import { Section } from '../../components'

export interface ContactViewProps {
  content: any
};

enum ContactStatus {
  Writing = 'Send Message',
  Sending = 'Sending...',
  Sended = 'Sended !',
  Error = 'Error !'
}

const ContactView = forwardRef<HTMLElement, ContactViewProps>(({ content }, ref) => {
  const [status, setStatus] = useState<ContactStatus>(ContactStatus.Writing)
  const [values, setValues] = useState<{[key: string]: string}>({})

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()

    if (status === ContactStatus.Sended) {
      setStatus(ContactStatus.Writing)
    }

    setStatus(ContactStatus.Sending)

    const response = await fetch('https://localhost/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(values)
    })

    if (response.status === 200) {
      setStatus(ContactStatus.Sended)
    } else {
      setStatus(ContactStatus.Error)
    }
  }

  const handleChangeInput: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) => {
    setValues((prevState) => ({ ...prevState, [e.target.name]: e.target.value }))
  }

  return (
    <Section ref={ref} id='contact' title='Contact Me' subtitle='Get in touch'>
      <div className={classNames(styles.container, 'container grid')}>
        <div>
          <div className={styles.information}>
            <i className={classNames('uil uil-phone', styles.icon)} />

            <div>
              <h3 className={styles.title}>Call Me</h3>
              <span className={styles.subtitle}>+32470385826</span>
            </div>
          </div>
          <div className={styles.information}>
            <i className={classNames('uil uil-envelope', styles.icon)} />

            <div>
              <h3 className={styles.title}>Email</h3>
              <span className={styles.subtitle}>contact@ablause.dev</span>
            </div>
          </div>
          <div className={styles.information}>
            <i className={classNames('uil uil-map-marker', styles.icon)} />

            <div>
              <h3 className={styles.title}>Location</h3>
              <span className={styles.subtitle}>Ixelles - Belgique</span>
            </div>
          </div>
        </div>

        <form className={classNames(styles.form, 'grid')} onSubmit={handleSubmit}>
          <div className={classNames(styles.inputs, 'grid')}>
            <div className={styles.content}>
              <label htmlFor='name' className={styles.label}>Name</label>
              <input id='name' name='name' type='text' onChange={handleChangeInput} className={styles.input} required />
            </div>
            <div className={styles.content}>
              <label htmlFor='email' className={styles.label}>Email</label>
              <input id='email' name='email' type='email' onChange={handleChangeInput} className={styles.input} required />
            </div>
          </div>
          <div className={styles.content}>
            <label htmlFor='message' className={styles.label}>Message</label>
            <textarea id='message' name='message' onChange={handleChangeInput} cols={0} rows={7} className={styles.input} required />
          </div>

          <div>
            {status === ContactStatus.Writing
              ? (
                <button type='submit' className='button button--flex'>
                  Send Message <i className='uil uil-message button__icon' />
                </button>
              )
              : (
                <p style={status === ContactStatus.Error ? { color: 'red' } : undefined}>{status}</p>
              )}
          </div>
        </form>
      </div>
    </Section>
  )
})

export default ContactView
