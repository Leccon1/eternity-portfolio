import { animate, createTimer } from 'animejs'
import { useEffect, useRef, useState } from 'react'

import styles from './intro.module.scss'

const Intro = ({ onFinish }) => {
  const [visible, setVisible] = useState(true)
  const containerRef = useRef(null)

  useEffect(() => {
    const titleLeft = containerRef.current.querySelector(`#introTitleLeft`)
    const titleRight = containerRef.current.querySelector(`#introTitleRight`)
    const introContainerLeft = containerRef.current.querySelector(`#introContainerLeft`)
    const introContainerRight = containerRef.current.querySelector(`#introContainerRight`)

    animate([titleLeft, titleRight], {
      opacity: [0, 1],
      translateY: [80, 0],
      easing: 'easeOutExpo',
      duration: 2500,
    })

    createTimer({
      duration: 2500,
      onComplete: () => {
        animate([titleLeft, titleRight], {
          opacity: [1, 0],
          easing: 'easeInExpo',
          duration: 2500,
          onComplete: () => {
            setVisible(false)
            onFinish()
          },
        })
        animate(introContainerLeft, {
          translateX: ['0%', '-100%'],
          easing: 'easeOutExpo',
          duration: 2500,
        })
        animate(introContainerRight, {
          translateX: ['0%', '100%'],
          easing: 'easeOutExpo',
          duration: 2500,
        })
      },
    })
  }, [])

  if (!visible) return null

  return (
    <div className={styles.intro} ref={containerRef}>
      <div className={styles.introLeft} id="introContainerLeft">
        <span className={styles.title} id="introTitleLeft">
          Eter
        </span>
      </div>
      <div className={styles.introRight} id="introContainerRight">
        <span className={styles.title} id="introTitleRight">
          nity
        </span>
      </div>
    </div>
  )
}

export default Intro
