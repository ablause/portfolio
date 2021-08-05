import React, { forwardRef, Fragment, useState } from 'react'
import classNames from 'classnames'

import styles from './SkillsView.module.css'
import { Section, Modal } from '../../components'

interface SkillsViewProps {
  content: any
}

const skills = [
  {
    icon: 'devicon-javascript-plain colored',
    title: 'Javascript'
  },
  {
    icon: 'devicon-typescript-plain colored',
    title: 'Typescript'
  },
  {
    icon: 'devicon-react-original colored',
    title: 'React JS'
  },
  {
    icon: 'devicon-nodejs-plain colored',
    title: 'Node JS'
  },
  {
    icon: 'devicon-mongodb-plain colored',
    title: 'MongoDB'
  },
  {
    icon: 'devicon-html5-plain colored',
    title: 'HTML'
  },
  {
    icon: 'devicon-css3-plain colored',
    title: 'CSS'
  },
  {
    icon: 'devicon-docker-plain colored',
    title: 'Docker'
  }
]

const SkillsView = forwardRef<HTMLElement, SkillsViewProps>(({ content }, ref) => {
  const [modalKey, setModalKey] = useState<number | null>(null)

  const toggleModal = (key?: number): void => setModalKey(key !== undefined ? key : null)

  return (
    <Section id='skills' title='Skills' subtitle='What i do' ref={ref}>
      <div className={classNames(styles.container, 'container grid')}>
        {skills.map((skill, key) => (
          <Fragment key={`skill_${skill.title}`}>
            <div className={styles.content} onClick={() => toggleModal(key)}>
              <i className={classNames(styles.icon, skill.icon)} />
              <h3 className={styles.title}>{skill.title}</h3>
            </div>

            <Modal className={styles['modal-content']} title={skill.title} show={modalKey === key} onHide={toggleModal}>
              <p>coming soon.. (I am still developing...)</p>
            </Modal>
          </Fragment>
        ))}
      </div>
    </Section>
  )
})

export default SkillsView
