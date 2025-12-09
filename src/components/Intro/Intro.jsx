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

    const TEXT_DURATION = 2500
    const TIMER_DURATION = 4000

    animate([titleLeft, titleRight], {
      opacity: [0, 1],
      translateY: [80, 0],
      easing: 'easeOutExpo',
      duration: TEXT_DURATION,

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
      delay: TEXT_DURATION,
    })

    createTimer(
      {
        duration: TIMER_DURATION,
        onComplete: () => {
          animate([titleLeft, titleRight], {
            opacity: [1, 0],
            easing: 'easeInExpo',
            duration: TIMER_DURATION,
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
            translateX: ['0%', '-110%'],
            easing: 'easeOutExpo',
            '--intro-blur': ['0px', '5px'],
            duration: TIMER_DURATION,
          })
          animate(introContainerRight, {
            translateX: ['0%', '110%'],
            easing: 'easeOutExpo',
            '--intro-blur': ['0px', '5px'],
            duration: TIMER_DURATION,
          })
        },
      },
      TEXT_DURATION
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
