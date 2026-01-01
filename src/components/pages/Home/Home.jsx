import FullScreenSection from '../../common/FullScreenSection/FullScreenSection'

import styles from './home.module.scss'
import Identify from './sections/Identify/HomeIdentify'
import Projects from './sections/Projects/Projects'

const HomeScreen = () => {
  return (
    <div className={styles.homeScreen}>
      <FullScreenSection>
        <Identify />
        <Projects />
      </FullScreenSection>
    </div>
  )
}

export default HomeScreen
