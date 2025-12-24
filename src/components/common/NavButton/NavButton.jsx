import clsx from 'clsx'
import { Link } from 'react-router-dom'

import styles from './navButton.module.scss'

const NavButton = ({ to, href, vairiant = 'nav', size = 'base', children, className, onClick }) => {
  const classes = clsx(
    styles.navButton,
    styles[`navButton--${vairiant}`],
    styles[`navButton--${size}`],
    className
  )

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={classes} onClick={onClick}>
      {children}
    </button>
  )
}

export default NavButton
