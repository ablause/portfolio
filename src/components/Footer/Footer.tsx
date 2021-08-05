import React from 'react'
import classNames from 'classnames'

import styles from './Footer.module.css'

const Footer: React.FC = (props) => {
  return (
    <div className={styles.bg}>
      <div className={classNames(styles.container, 'container grid')}>
        <div>
          <h1 className={styles.title}>Ablause</h1>
          <span className={styles.subtitle}>Fullstack developer</span>
        </div>

        <ul className={styles.links}>
          <li>
            <a href='#skills' className={styles.link}>Skills</a>
          </li>
          <li>
            <a href='#portfolio' className={styles.link}>Portfolio</a>
          </li>
          <li>
            <a href='#contact' className={styles.link}>Contactme</a>
          </li>
        </ul>

        <div className={styles.socials}>
          <a className={styles.social} title='Linkedin' href='https://www.linkedin.com/in/alexandre-blause/' target='_blank' rel='nofollow noopener noreferrer'>
            <i className='uil uil-linkedin' />
          </a>
          <a className={styles.social} title='StackOverflow' href='https://stackoverflow.com/users/13002218/ablause' target='_blank' rel='nofollow noopener noreferrer'>
            <svg xmlns='http://www.w3.org/2000/svg' fill='#fff' width='24' height='24' viewBox='0 0 24 24'>
              <path d='M15 21h-10v-2h10v2zm6-11.665l-1.621-9.335-1.993.346 1.62 9.335 1.994-.346zm-5.964 6.937l-9.746-.975-.186 2.016 9.755.879.177-1.92zm.538-2.587l-9.276-2.608-.526 1.954 9.306 2.5.496-1.846zm1.204-2.413l-8.297-4.864-1.029 1.743 8.298 4.865 1.028-1.744zm1.866-1.467l-5.339-7.829-1.672 1.14 5.339 7.829 1.672-1.14zm-2.644 4.195v8h-12v-8h-2v10h16v-10h-2z' />
            </svg>
          </a>
          <a className={styles.social} title='Github' href='https://github.com/ablause' target='_blank' rel='nofollow noopener noreferrer'>
            <i className='uil uil-github-alt' />
          </a>

        </div>
      </div>

      <p className={styles.copy}>&#169; Ablause. All right reserved</p>
    </div>
  )
}

export default Footer
