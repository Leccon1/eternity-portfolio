import downArrowsIcon from '@icons/down-arrows.svg'
import { useState } from 'react'

import styles from './header.module.scss'
import navigationData from './navigation.data'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className={styles.header}>
      <nav className={styles.navigation}>
        <ul className={styles.navigation__list}>
          {navigationData.map((item) => (
            <li key={item.label} className={styles.navigation__item}>
              <button type="button" className={styles.navigation__link}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <div className={`${styles.openNav} ${isOpen ? styles.open : ''}`}>
          <div className={styles.openNav__grid}>
            {navigationData.map((item) => (
              <div key={item.label} className={styles.openNav__column}>
                {item.subMenu && (
                  <ul className={styles.openNav__list}>
                    {item.subMenu.map((sub) => (
                      <li key={sub.label}>
                        <a href={sub.href}>{sub.label}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>

        <button className={styles.openNavToggle} type="button" onClick={() => setIsOpen(!isOpen)}>
          <img src={downArrowsIcon} alt="Down arrows" />
        </button>
      </nav>
    </header>
  )
}

export default Navigation
