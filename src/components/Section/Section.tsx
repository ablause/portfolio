import React, { Suspense } from 'react'
import classNames from 'classnames'

import styles from './Section.module.css'

export interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  id: string
  title?: string
  subtitle?: string
  center?: boolean
}

const Section = React.forwardRef<HTMLElement, SectionProps>(({ title, subtitle, center, className, children, ...props }, ref) => {
  const SectionClass = classNames(className, styles.section, {
    [styles.center]: center
  })

  return (
    <section ref={ref} className={SectionClass} {...props}>
      {Boolean(title) && <h2 className={styles.title}>{title}</h2>}
      {Boolean(subtitle) && <span className={styles.subtitle}>{subtitle}</span>}

      <Suspense fallback={<div>chargement...</div>}>
        {children}
      </Suspense>
    </section>
  )
})

export default Section
