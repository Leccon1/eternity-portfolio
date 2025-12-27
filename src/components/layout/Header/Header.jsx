import ArrowButton from '@components/common/ArrowButton/ArrowButton'
import Logo from '@components/common/Logo/Logo'
import { useAnimation } from '@hooks/useAnimationContext'
import { animate } from 'animejs'
import { useState, useRef, useEffect } from 'react'

import styles from './header.module.scss'
import navigationData from './navigation.data'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { state } = useAnimation()
  const containerRef = useRef(null)

  window.addEventListener('scroll', () => {
    if (window.screenY > 50) {
      containerRef.current.classList
    }
  })

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!state.introFinished) return

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
  }, [state.introFinished])

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`} ref={containerRef}>
      <nav className={styles.navigation}>
        <ul
          className={styles.navigation__list}
          style={{ gridTemplateColumns: `repeat(${navigationData.length}, 1fr)` }}
        >
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
            <div
              className={styles.openNav__grid}
              style={{ gridTemplateColumns: `repeat(${navigationData.length}, 1fr)` }}
            >
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
