import React, { forwardRef } from 'react'
import classNames from 'classnames'

import styles from './ProjectView.module.css'
import { Section } from '../../components'

export interface ProjectViewProps {
  content: any
};

const ProjectView = forwardRef<HTMLElement, ProjectViewProps>(({ content }, ref) => (
  <Section ref={ref} id='project' center>
    <div className={styles.bg}>
      <div className={classNames(styles.container, 'container grid')}>
        <div className={styles.data}>
          <h2 className={styles.title}>Want to see the code ?</h2>
          <p className={styles.description} title='Only ReactJs, NodeJS and Typescript'>I tried to use the minimum of libraries to show you at least something.</p>
          <a href='https://github.com/ablause/portfolio' className='button button--flex button--white' target='_blank' rel='nofollow noopener noreferrer'>
            Repository
            <i className={classNames('uil uil-code-branch', styles.icon, 'button__icon')} />
          </a>
        </div>

        {/* <img src='assets/images/project.png' alt='' className={styles.img} /> */}
      </div>
    </div>
  </Section>
))

export default ProjectView
