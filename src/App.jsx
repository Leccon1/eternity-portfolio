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
import { useAnimation } from './hooks/useAnimationContext'
import { useScrollOverlap } from './hooks/useScrollOverlap'
import { useHeroStore } from './store/useHeroStore'

const App = () => {
  const containerRef = useRef(null)
  const [isIntroTextFinished] = useState(false)
  const { setState } = useAnimation()
  const data = useHeroStore((state) => state.data)

  const topRef = useRef(null)
  const bottomRef = useRef(null)

  useScrollOverlap(topRef, bottomRef, { targetOffset: -50 })

  useEffect(() => {
    if (!bottomRef.current) return

    if (isIntroTextFinished) {
      animate(bottomRef.current, {
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
      {/* <Intro onStartAnimateFinish={() => setState((prev) => ({ ...prev, introFinished: true }))} /> */}

      <Header />

      <FullScreenSection overflow="hidden">
        <div className={styles.heroContainer} ref={topRef}>
          <Hero data={data} />
        </div>
      </FullScreenSection>

      <div className={styles.pages} ref={bottomRef}>
        <Pages />
      </div>
    </div>
  )
}

export default App
