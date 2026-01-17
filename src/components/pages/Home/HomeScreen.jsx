import FullScreenSection from '../../common/FullScreenSection/FullScreenSection'

import styles from './homeScreen.module.scss'
import Identify from './sections/Identify/Identify'
import Projects from './sections/Projects/Projects'
import Updates from './sections/Updates/Updates'

const HomeScreen = () => {
  return (
    <section className={styles.homeScreen}>
      <FullScreenSection>
        <div className={styles.homeScreen__pitch}>
          <Identify />
          <Projects />
        </div>
      </FullScreenSection>

      <FullScreenSection>
        <Updates />
      </FullScreenSection>
    </section>
  )
}

export default HomeScreen
