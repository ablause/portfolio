import React, { forwardRef, useEffect, useState } from 'react'
import classNames from 'classnames'

import { Section } from '../../components'
import styles from './AboutView.module.css'

// export interface AboutViewProps {}

const AboutView = forwardRef<HTMLElement>((_, ref) => {
  const [data, setData] = useState<null | Record<string, any>>(null)

  useEffect(() => {
    fetch('https://api.github.com/users/ablause')
      .then(async (res) => await res.json())
      .then((result) => setData(result), (err) => console.error(err))
  }, [])

  return (
    <Section id='about' title='About Me' subtitle='My introduction' ref={ref}>
      <div className={classNames(styles.container, 'container grid')}>
        <img className={styles.img} width={250} height={120} src='assets/person-coding.svg' alt='about-me' />

        <div className={styles.data}>
          <p className={styles.description}>
            Hi everyone, my name is Alexandre Blause and I live in Brussels, Belgium. I'm passionate about what I do and code regularly for my personal projects. I'm currently looking for a job.
          </p>

          <div className={styles.info}>
            <div>
              <span className={styles['info-title']}>
                {data?.public_repos ?? '00'}+
              </span>
              <span className={styles['info-name']}>
                Github <br /> Repositories
              </span>
            </div>
            <div>
              <span className={styles['info-title']}>
                02+
              </span>
              <span className={styles['info-name']}>
                Completed <br /> project
              </span>
            </div>
            <div>
              <span className={styles['info-title']}>
                03+
              </span>
              <span className={styles['info-name']}>
                Open-source <br /> pull-request
              </span>
            </div>
          </div>

          <div className={styles.buttons}>
            <a className='button button--flex' download href='assets/documents/alexandre-blause-cv.pdf'>
              Download CV <i className='uil uil-download-alt button__icon' />
            </a>
          </div>
        </div>
      </div>
    </Section>
  )
})

export default AboutView
