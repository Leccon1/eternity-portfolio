import { useAnimation } from '@hooks/useAnimationContext'
import { animate } from 'animejs'
import { useEffect, useRef, useState } from 'react'

import styles from './app.module.scss'
import HeroBg from './assets/images/hero/hero-bg.svg'
import FullScreenSection from './components/common/FullScreenSection/FullScreenSection'
import Hero from './components/common/Hero/Hero'
import ParallaxBackground from './components/common/ParallaxBackground/ParallaxBackground'
import Intro from './components/Intro/Intro'
import Header from './components/layout/Header/Header'
import Pages from './components/pages/Pages'
import { useScrollOverlap } from './hooks/useScrollOverlap'
import { useHeroStore } from './store/useHeroStore'

const App = () => {
  const containerRef = useRef(null)
  const [isIntroTextFinished] = useState(false)
  const { setState } = useAnimation()
  const data = useHeroStore((state) => state.data)

  const pageRef = useRef(null)
  const heroRef = useRef(null)
  const pagesRef = useRef(null)

  //   useScrollOverlap(pageRef, heroRef)

  useEffect(() => {
    if (!pageRef.current) return

    if (isIntroTextFinished) {
      animate(pageRef.current, {
        opacity: [0, 1],
        translateY: [200, 0],
        easing: 'easeOutQuad',
        duration: 4000,
      })
    }
  }, [isIntroTextFinished])

  return (
    <div
      className="app"
      ref={containerRef}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Intro onStartAnimateFinish={() => setState((prev) => ({ ...prev, introFinished: true }))} />

      <Header />

      <FullScreenSection overflow="hidden">
        <div className={styles.heroContainer} ref={heroRef}>
          <ParallaxBackground imageSrc={HeroBg} opacity={0.1} />
          <Hero data={data} />
        </div>
      </FullScreenSection>

      <div className={styles.pages} ref={pageRef}>
        <Pages ref={pagesRef} />
      </div>
    </div>
  )
}

export default App
