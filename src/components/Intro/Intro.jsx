import { animate, createTimer } from 'animejs'
import { useEffect, useRef, useState } from 'react'

import styles from './intro.module.scss'

export default function Intro({ onFinish }) {
  const [visible, setVisible] = useState(true)
  const containerRef = useRef(null)

  useEffect(() => {
    const title = containerRef.current.querySelector(`h1`)

    animate(title, {
      opacity: [0, 1],
      translateY: [40, 0],
      easing: 'easeOutExpo',
      duration: 1200,
    })

    createTimer({
      duration: 800,
      onComplete: () => {
        animate(title, {
          opacity: [1, 0],
          easing: 'easeOutQuad',
          duration: 600,
          onComplete: () => {
            setVisible(false)
            onFinish()
          },
        })
      },
    })
  }, [])

  if (!visible) return null

  return (
    <div className={styles.intro} ref={containerRef}>
      <h1 className={styles.title}>Eternity</h1>
    </div>
  )
}
