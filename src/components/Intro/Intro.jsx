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
    const borderLineLeft = introLeft.current.querySelector(`#introBorderLineLeft`)
    const borderLineRight = introRight.current.querySelector(`#introBorderLineRight`)
    const introContainerLeft = introLeft.current
    const introContainerRight = introRight.current

    const textDuration = 2500
    const timerDuration = 4000

    animate([titleLeft, titleRight], {
      opacity: [0, 1],
      translateY: [80, 0],
      easing: 'easeOutExpo',
      duration: textDuration,

      onComplete: () => {
        animate(titleLeft, {
          translateX: ['-5%'],
          easing: 'easeInOutSine',
          duration: 1000,
        })
        animate(titleRight, {
          translateX: ['5%'],
          easing: 'easeInOutSine',
          duration: 1000,
        })

        onStartAnimateFinish()
      },
    })

    animate([borderLineLeft, borderLineRight], {
      translateY: ['-115%', '0%'],
      easing: 'easeInOutSine',
      duration: 1000,
      delay: textDuration,
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
          animate(titleLeft, {
            translateX: ['-50%'],
            easing: 'easeInOutSine',
            duration: 1000,
          })
          animate(titleRight, {
            translateX: ['50%'],
            easing: 'easeInOutSine',
            duration: 1000,
          })
          animate(introContainerLeft, {
            translateX: ['0%', '-100%'],
            easing: 'easeOutExpo',
            '--intro-blur': ['0px', '5px'],
            duration: timerDuration,
          })
          animate(introContainerRight, {
            translateX: ['0%', '100%'],
            easing: 'easeOutExpo',
            '--intro-blur': ['0px', '5px'],
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
        <div
          className={`${styles.borderLine} ${styles.borderLineLeft}`}
          id="introBorderLineLeft"
        ></div>
      </div>
      <div className={`${styles.introContainer} ${styles.introRight}`} ref={introRight}>
        <span className={styles.title} id="introTitleRight">
          nity
        </span>
        <div
          className={`${styles.borderLine} ${styles.borderLineRight}`}
          id="introBorderLineRight"
        ></div>
      </div>
    </>
  )
}

export default Intro
