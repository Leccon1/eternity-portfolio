import { animate, createTimer } from 'animejs'
import { useEffect, useRef, useState } from 'react'

import styles from './intro.module.scss'

const Intro = ({ onStartAnimateFinish }) => {
  const introLeft = useRef(null)
  const introRight = useRef(null)

  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const titleLeft = introLeft.current.querySelector(`#introTitleLeft`)
    const titleRight = introRight.current.querySelector(`#introTitleRight`)
    const introContainerLeft = introLeft.current
    const introContainerRight = introRight.current

    const textDuration = 2500
    const timerDuration = 2500

    animate([titleLeft, titleRight], {
      opacity: [0, 1],
      translateY: [80, 0],
      easing: 'easeOutExpo',
      duration: textDuration,

      onComplete: () => {
        onStartAnimateFinish()
      },
    })

    createTimer(
      {
        duration: timerDuration,
        onComplete: () => {
          animate([titleLeft, titleRight], {
            opacity: [1, 0],
            easing: 'easeInExpo',
            duration: 2500,
            onComplete: () => setVisible(false),
          })
          animate(introContainerLeft, {
            translateX: ['0%', '-100%'],
            easing: 'easeOutExpo',
            '--intro-blur': ['0px', '5px'],
            '--intro-opacity': [1, 0.8],
            duration: timerDuration,
          })
          animate(introContainerRight, {
            translateX: ['0%', '100%'],
            easing: 'easeOutExpo',
            '--intro-blur': ['0px', '5px'],
            '--intro-opacity': [1, 0.8],
            duration: timerDuration,
          })
        },
      },
      textDuration
    )
  }, [])

  if (!visible) return null

  return (
    <>
      <div className={`${styles.introContainer} ${styles.introLeft}`} ref={introLeft}>
        <span className={styles.title} id="introTitleLeft">
          Eter
        </span>
      </div>
      <div className={`${styles.introContainer} ${styles.introRight}`} ref={introRight}>
        <span className={styles.title} id="introTitleRight">
          nity
        </span>
      </div>
    </>
  )
}

export default Intro
