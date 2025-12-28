import Heading from '@common/Heading/Heading'
import Hero from '@common/Hero/Hero'
import NavButton from '@common/NavButton/NavButton'
import { useAnimation } from '@hooks/useAnimationContext'
import ContentContainer from '@ui/ContentContainer/ContentContainer'
import { animate, createTimeline, splitText, stagger } from 'animejs'
import { useEffect, useRef } from 'react'

import styles from './homeHero.module.scss'

const HomeHero = () => {
  const containerRef = useRef(null)
  const { state } = useAnimation()

  useEffect(() => {
    if (!state.introFinished) return

    const heroSubtitle = containerRef.current.querySelector(`.${styles.hero__subtitle}`)
    const heroPost = containerRef.current.querySelector(`.${styles.hero__post}`)
    const heroDescription = containerRef.current.querySelector(`.${styles.hero__description}`)
    const buttonsContainer = containerRef.current.querySelector(`.${styles.hero__buttons}`)

    const { chars } = splitText('.hero__title', {
      chars: { wrap: 'clip' },
    })

    animate([chars, heroDescription, heroPost, heroSubtitle, buttonsContainer], {
      delay: 400,
    })

    animate(chars, {
      y: [{ to: ['100%', '0%'] }],
      duration: 1000,
      ease: 'out(3)',
      delay: stagger(50),
    })

    const tl = createTimeline({
      easing: 'easeOutExpo',
      duration: 1000,
    })

    tl.add([heroSubtitle, heroPost, heroDescription, buttonsContainer], {
      scale: [0.9, 1],
      translateY: [10, 0],
      opacity: [0, 1],
      delay: stagger(500, { start: 1000 }),
    })

    tl.add(
      buttonsContainer,
      {
        gap: 'var(--spacing-xl)',
        duration: 1000,
      },
      2500
    )
  }, [state.introFinished])

  return (
    <Hero className={styles.hero}>
      <div className={styles.hero__content} ref={containerRef}>
        <ContentContainer>
          <div className={styles.hero__info}>
            <Heading className="hero__title" level="h1" size="xxxl">
              Ivan Samolkin
            </Heading>
            <p className={styles.hero__subtitle}>Aka Leccon1</p>
            <p className={styles.hero__post}>Front-End Developer</p>
            <p className={styles.hero__description}>
              I am a self-taught front-end developer passionate about creating intuitive, modern,
              and user-friendly interfaces.
            </p>
          </div>
        </ContentContainer>
        <div className={styles.hero__buttons}>
          <NavButton
            href={'#about'}
            className={styles.hero__button}
            vairiant="primary"
            size="md"
            onClick={() => console.log('gg')}
          >
            View News
          </NavButton>
          <NavButton
            href={'#about'}
            className={styles.hero__button}
            vairiant="secondary"
            size="md"
            onClick={() => console.log('gg')}
          >
            About Me
          </NavButton>
        </div>
      </div>
    </Hero>
  )
}

export default HomeHero
