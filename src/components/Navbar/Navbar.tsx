import React, { useCallback, useState } from 'react'
import classNames from 'classnames'

import styles from './Navbar.module.css'
import { useThemeUpdater } from '../../hooks'
import NavLink from '../NavLink'

export interface NavProps extends React.HTMLAttributes<HTMLElement> {
  initialOpen?: boolean
}

const navs = [
  { title: 'Home', href: '/#home', icon: 'uil uil-estate' },
  { title: 'About', href: '/#about', icon: 'uil uil-user' },
  { title: 'Skills', href: '/#skills', icon: 'uil uil-file-alt' },
  { title: 'Portfolio', href: '/#portfolio', icon: 'uil uil-scenery' },
  { title: 'Contact', href: '/#contact', icon: 'uil uil-message' }
]

const Navbar: React.FC<NavProps> = ({ initialOpen = false, className, ...props }) => {
  const { toggle: toggleTheme, isDark } = useThemeUpdater()
  const [showMenu, setShowMenu] = useState(initialOpen)

  const toggle = useCallback(() => {
    setShowMenu(!showMenu)
  }, [showMenu])

  return (
    <nav className={classNames(styles.nav, className, 'container')} {...props}>
      <a href='#' className={styles.logo}>Ablause</a>

      <div className={classNames(styles.menu, { [styles['show-menu']]: showMenu })}>
        <ul className={classNames(styles.list, 'grid')} {...props}>
          {navs.map((nav, index) => (
            <li className={styles.item} key={`nav_${index}`}>
              <NavLink className={styles.link} href={nav.href}>
                <i className={classNames(styles.icon, nav.icon)} /> {nav.title}
              </NavLink>
            </li>
          ))}
        </ul>
        <i className={classNames(styles.close, 'uil uil-times')} onClick={toggle} />
      </div>

      <div className={styles.buttons}>
        <i className={classNames(styles['change-theme'], isDark ? 'uil uil-sun' : 'uil uil-moon')} onClick={toggleTheme} />

        <div className={classNames(styles.toggle)} onClick={toggle}>
          <i className='uil uil-apps' />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
