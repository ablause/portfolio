import React, { forwardRef } from 'react'
import classNames from 'classnames'

import { Section } from '../../components'
import styles from './AboutView.module.css'

export interface AboutViewProps {
  content: any
}

const AboutView = forwardRef<HTMLElement, AboutViewProps>(({ content }, ref) => (
  <Section id='about' title='About Me' subtitle='My introduction' ref={ref}>
    <div className={classNames(styles.container, 'container grid')}>
      <img className={styles.img} src='assets/person-coding.svg' alt='about-me' />

      <div className={styles.data}>
        <p className={styles.description}>
          Hi everyone, my name is Alexandre Blause and I live in Brussels, Belgium. I'm passionate about what I do and code regularly for my personal projects. I'm currently looking for a job.
        </p>

        <div className={styles.info}>
          <div>
            <span className={styles['info-title']}>
              02+
            </span>
            <span className={styles['info-name']}>
              project <br /> Repository
            </span>
          </div>
          <div>
            <span className={styles['info-title']}>
              8+
            </span>
            <span className={styles['info-name']}>
              Completed <br /> project
            </span>
          </div>
          <div>
            <span className={styles['info-title']}>
              01+
            </span>
            <span className={styles['info-name']}>
              Repositories <br /> pull-request
            </span>
          </div>
        </div>

        <div className={styles.buttons}>
          {/* <a className='button button--flex' download href='assets/documents/cv.pdf'>
            Download CV <i className='uil uil-download-alt button__icon' />
          </a> */}
        </div>
      </div>
    </div>
  </Section>
))

export default AboutView
