import { useRef } from 'react'

import { useScrollOverlap } from '../../../hooks/useScrollOverlap'
import FullScreenSection from '../../common/FullScreenSection/FullScreenSection'

import styles from './homeScreen.module.scss'
import Identify from './sections/Identify/Identify'
import Projects from './sections/Projects/Projects'
import Updates from './sections/Updates/Updates'

const HomeScreen = () => {
  const topRef = useRef(null)
  const bottomRef = useRef(null)

  useScrollOverlap(topRef, bottomRef, { targetOffset: -100 })
  return (
    <section className={styles.homeScreen}>
      <div className={styles.homeScreenPitch} ref={topRef}>
        <FullScreenSection>
          <Identify />
          <Projects />
        </FullScreenSection>
      </div>

      <FullScreenSection>
        <div className={styles.homeScreenUpdates} ref={bottomRef}>
          <Updates />
        </div>
      </FullScreenSection>
    </section>
  )
}

export default HomeScreen
