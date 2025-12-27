import { useAnimation, AnimationProvider } from '@hooks/useAnimationContext'
import { animate } from 'animejs'
import { useEffect, useRef, useState } from 'react'

import HeroBg from './assets/images/hero/hero-bg.svg'
import FullScreenSection from './components/common/FullScreenSection/FullScreenSection'
import ParallaxBackground from './components/common/ParallaxBackground/ParallaxBackground'
import Intro from './components/Intro/Intro'
import Header from './components/layout/Header/Header'
import Pages from './components/pages/Pages'
const App = () => {
  const containerRef = useRef(null)
  const [isIntroTextFinished, setIsIntroTextFinished] = useState(false)
  const { state, setState } = useAnimation()

  console.log(state)
  const pageRef = useRef(null)

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

      <FullScreenSection>
        <ParallaxBackground imageSrc={HeroBg} opacity={0.1} />
        <Header />
        <Pages />
      </FullScreenSection>

      <Pages />
      <Pages />
    </div>
  )
}

export default App
