import React from 'react'
import type { Property } from 'csstype'

import styles from './ProgressBar.module.css'

export interface ProgressBarProps {
  title: string
  showValue?: boolean
  percentage?: string | number
  color?: Property.Color
}

const ProgressBar: React.FC<ProgressBarProps> = ({ title, percentage = 0, color, showValue = true }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {Boolean(title) && <h3 className={styles.title}>{title}</h3>}
        {showValue && <span className={styles.value}>{percentage}%</span>}
      </div>
      <div className={styles.bar}>
        <span className={styles.percentage} style={{ color, width: `${percentage}%` }} />
      </div>
    </div>
  )
}

export default ProgressBar
