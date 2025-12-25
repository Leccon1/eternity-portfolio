import ArrowButton from '@components/common/ArrowButton/ArrowButton'
import Logo from '@components/common/Logo/Logo'
import { animate } from 'animejs'
import { useState, useRef, useEffect } from 'react'

import styles from './header.module.scss'
import navigationData from './navigation.data'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const containerRef = useRef(null)

  useEffect(() => {
    const navigation = containerRef.current.querySelector(`.${styles.navigation}`)
    const navigationList = containerRef.current.querySelector(`.${styles.navigation__list}`)

    animate(navigation, {
      opacity: [0, 1],
      translateY: [-100, 0],
      easing: 'ease',
      duration: 1200,
      onComplete: () => {
        animate(navigationList, {
          gap: 'clamp(40px,calc(40px + 40 * ((100vw - 375px) / 1545)),80px)',
          easing: 'ease',
          duration: 1200,
        })
      },
    })
    animate(navigationList, {})
  }, [])

  return (
    <header className={styles.header} ref={containerRef}>
      <nav className={styles.navigation}>
        <ul className={styles.navigation__list}>
          {navigationData.map((item, index) => (
            <li
              key={index}
              className={styles.navigation__item}
              onClick={() => console.log(item.label)}
            >
              {item.type === 'Logo' ? (
                <Logo className={styles.navigation__logo} />
              ) : (
                <button type="button" className={styles.navigation__link}>
                  {item.label}
                </button>
              )}
            </li>
          ))}
        </ul>

        <div className={styles.openNavContainer}>
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

          <ArrowButton
            className={styles.openNavToggle}
            onClick={() => setIsOpen(!isOpen)}
            direction={isOpen ? 'up' : 'down'}
          />
        </div>
      </nav>
    </header>
  )
}

export default Header
