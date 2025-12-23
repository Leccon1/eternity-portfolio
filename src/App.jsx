import { animate } from 'animejs'
import { useEffect, useRef, useState } from 'react'

import Intro from './components/Intro/Intro'
import Header from './components/layout/Header/Header'

const App = () => {
  const containerRef = useRef(null)
  const [isIntroTextFinished, setIsIntroTextFinished] = useState(false)

  const pageRef = useRef(null)

  useEffect(() => {
    if (!pageRef.current) return

    if (isIntroTextFinished) {
      animate(pageRef.current, {
        opacity: [0, 1],
        translateY: [20, 0],
        easing: 'easeOutQuad',
        duration: 800,
      })
    }
  }, [isIntroTextFinished])

  return (
    <div className="app" ref={containerRef} style={{ display: 'flex', justifyContent: 'center' }}>
      <Header />

      <Intro onStartAnimateFinish={() => setIsIntroTextFinished(true)} />
    </div>
  )
}

export default App
