import React, { ChangeEventHandler, FormEventHandler, forwardRef, useCallback, useState } from 'react'
import classNames from 'classnames'

import styles from './ContactView.module.css'
import { Section } from '../../components'

// export interface ContactViewProps {};

enum ContactStatus {
  Writing = 'Send Message',
  Sending = 'Sending...',
  Sended = 'Message is sended !',
  Error = 'Error ! Please contact by contact@ablause.dev'
}

const ContactView = forwardRef<HTMLElement>((_, ref) => {
  const [status, setStatus] = useState<ContactStatus>(ContactStatus.Writing)
  const [values, setValues] = useState<Record<string, string> | null>(null)

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()

    setStatus(ContactStatus.Sending)

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(values)
    })

    if (response.status === 200) {
      setStatus(ContactStatus.Sended)
      setValues(null)
    } else {
      setStatus(ContactStatus.Error)
    }
  }

  const handleChangeInput: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) => {
    if (status === ContactStatus.Sended) {
      setStatus(ContactStatus.Writing)
    }

    setValues((prevState) => ({ ...prevState, [e.target.name]: e.target.value }))
  }

  const inputProps = useCallback((name: string) => ({
    name,
    id: name,
    onChange: handleChangeInput,
    className: styles.input,
    value: values?.[name] ?? '',
    require: true
  }), [values])

  return (
    <Section ref={ref} id='contact' title='Contact Me' subtitle='Get in touch'>
      <div className={classNames(styles.container, 'container grid')}>
        <div>
          <div className={styles.information}>
            <i className={classNames('uil uil-phone', styles.icon)} />

            <div>
              <h3 className={styles.title}>Call Me</h3>
              <a className={styles.subtitle} href='tel:+32470385826'>+32470385826</a>
            </div>
          </div>
          <div className={styles.information}>
            <i className={classNames('uil uil-envelope', styles.icon)} />

            <div>
              <h3 className={styles.title}>Email</h3>
              <a className={styles.subtitle} href='mailto:contact@ablause.dev'>contact@ablause.dev</a>
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
              <input type='text' {...inputProps('name')} />
            </div>
            <div className={styles.content}>
              <label htmlFor='email' className={styles.label}>Email</label>
              <input type='email' {...inputProps('email')} />
            </div>
          </div>
          <div className={styles.content}>
            <label htmlFor='message' className={styles.label}>Message</label>
            <textarea {...inputProps('message')} cols={0} rows={7} />
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
