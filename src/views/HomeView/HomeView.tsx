import React, { forwardRef } from 'react'
import classNames from 'classnames'

import { Section } from '../../components'
import styles from './HomeView.module.css'

export interface HomeViewProps {
  content: any
}

const HomeView = forwardRef<HTMLElement, HomeViewProps>(({ content }, ref) => (
  <Section id='home' ref={ref}>
    <div className={classNames(styles.container, 'container grid')}>
      <div className={classNames(styles.content, 'grid')}>
        <div className={styles.social}>
          <a className={styles['social-icon']} title='Linkedin' href='https://www.linkedin.com/in/alexandre-blause/' target='_blank' rel='nofollow noopener noreferrer'>
            <i className='uil uil-linkedin-alt' />
          </a>
          <a className={styles['social-icon']} title='Github' href='https://github.com/ablause' target='_blank' rel='nofollow noopener noreferrer'>
            <i className='uil uil-github-alt' />
          </a>
          <a className={styles['social-icon']} title='Repository' href='https://github.com/ablause/portfolio' target='_blank' rel='nofollow noopener noreferrer'>
            <i className='uil uil-code-branch' />
          </a>
        </div>

        <div className={styles.img} title='I just like TypeScript, so here it is'>
          <svg className={styles.blob} viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'>
            <g mask='#mask0'>
              <path id='blob' d='M46,-56.9C58.7,-44.3,67.2,-28.8,70.6,-12.1C73.9,4.6,72.1,22.6,64.3,38C56.4,53.4,42.6,66.2,26.7,70.9C10.8,75.6,-7.1,72.2,-24.3,66.2C-41.4,60.1,-57.7,51.4,-65.2,37.9C-72.7,24.4,-71.4,6,-66.6,-10.1C-61.7,-26.1,-53.4,-39.9,-41.7,-52.6C-30,-65.4,-15,-77.1,0.8,-78.1C16.7,-79.1,33.4,-69.4,46,-56.9Z' transform='translate(100 100)' />
            </g>
            <text transform='translate(100, 170)' textAnchor='middle' fontSize='100' fontWeight='600' fill='#fff'>
              TS
            </text>
          </svg>
        </div>

        <div className={styles.data}>
          <h1 className={styles.title}>Hi, I'am Alexandre</h1>
          <h3 className={styles.subTitle}>Fullstack Developer</h3>
          <p className={styles.description}>Young full-stack JS developer, self-taught and passionate for 7 years. Able to develop web applications
          </p>
          <a href='#contact' className='button button--flex'>
            Contact Me <i className='uil uil-message' />
          </a>
        </div>
      </div>
      <div className={styles.scroll}>
        <a className={classNames(styles['scroll-button'], 'button--flex')} href='#about'>
          <i className={classNames(styles['scroll-mouse'], 'uil uil-mouse-alt')} />
          <span className={styles['scroll-name']}>Scroll down</span>
          <i className={classNames(styles['scroll-arrow'], 'uil uil-arrow-down')} />
        </a>
      </div>
    </div>
  </Section>
))

export default HomeView
