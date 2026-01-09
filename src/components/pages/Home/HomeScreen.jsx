import FullScreenSection from '../../common/FullScreenSection/FullScreenSection'

import styles from './homeScreen.module.scss'
import Identify from './sections/Identify/Identify'
import Projects from './sections/Projects/Projects'

const HomeScreen = () => {
  return (
    <div className={styles.homeScreen}>
      <FullScreenSection>
        <div className={styles.homeScreen__content}>
          <Identify />
          <Projects />
        </div>
      </FullScreenSection>
    </div>
  )
}

export default HomeScreen
