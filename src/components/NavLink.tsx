import React, { useContext } from 'react'
import classNames from 'classnames'
import { RouterContext } from '../contexts'

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
}

const NavLink: React.FC<LinkProps> = ({ href, onClick, className, ...props }) => {
  const { location, history } = useContext(RouterContext)

  const linkClass = classNames(className, {
    active: location.hash !== '' && href?.includes(location.hash) === true
  })

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>): void => {
    if (href === undefined) { return }

    e.preventDefault()

    if (location.pathname === href) { return }

    if (href.includes('#')) {
      document.getElementById(href?.split('#')[1])?.scrollIntoView()
    }

    onClick?.(e)

    history.push(href)
  }

  return <a href={href} onClick={handleClick} className={linkClass} {...props} />
}

export default NavLink
