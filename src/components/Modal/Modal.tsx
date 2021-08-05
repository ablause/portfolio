import React, { HTMLAttributes } from 'react'
import { createPortal } from 'react-dom'
import classNames from 'classnames'

import styles from './Modal.module.css'

export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  show: boolean
  onHide?: () => void
}

const Modal: React.FC<ModalProps> = ({ title, show, onHide, className, children, ...props }) => {
  const _modal = (
    <div className={styles.modal}>
      <div className={classNames(styles.content, className)} {...props}>
        <h4 className={styles.title}>{title}</h4>
        <i className={classNames(styles.close, 'uil uil-times')} onClick={onHide} />

        {children}
      </div>
    </div>
  )

  return show
    ? createPortal(_modal, document.body)
    : null
}

export default Modal
