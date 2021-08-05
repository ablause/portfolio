import React, { forwardRef } from 'react'
import classNames from 'classnames'

import { Section } from '../../components'
import styles from './Portfolio.module.css'

const projects = [
  {
    title: 'Modern Website',
    description: 'Website adaptable to all devices, with ui components and animated interactions.',
    image: 'assets/images/portfolio1.jpg'
  },
  {
    title: 'Brand Design',
    description: 'Website adaptable to all devices, with ui components and animated interactions.',
    image: 'assets/images/portfolio2.jpg'
  },
  {
    title: 'Online Store',
    description: 'Website adaptable to all devices, with ui components and animated interactions.',
    image: 'assets/images/portfolio3.jpg'
  }
]

const PortfolioView = forwardRef<HTMLElement>((_, ref) => {
  return (
    <Section id='portfolio' title='Portfolio' subtitle='Most recent work' ref={ref}>
      <div style={{ textAlign: 'center' }} className='container'>
        <p title="We don't talk about things that upset us">In the process of making public some of my projects..</p>
      </div>
      {/* <div className={classNames(styles.container, 'container')}>
        {projects.map((project, key) => (
          <div key={`slide_${key}`} className={classNames(styles.content, 'grid')}>
            <img src={project.image} alt='about-me' className={styles.img} />

            <div className={styles.data}>
              <h3 className={styles.title}>{project.title}</h3>
              <p className={styles.description}>{project.description}</p>

              <a href='#' className={classNames('button button--flex button--small', styles.button)}>
                Demo <i className={classNames('uil uil-arrow-right', styles.button__icon)} />
              </a>
            </div>
          </div>
        ))}
      </div> */}
    </Section>
  )
})

export default PortfolioView
