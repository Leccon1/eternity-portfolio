import FullScreenSection from '../../common/FullScreenSection/FullScreenSection'

import styles from './home.module.scss'
import HomeIdentify from './sections/Identify/HomeIdentify'
const HomeScreen = () => {
  return (
    <div className={styles.homeScreen}>
      <FullScreenSection>
        <HomeIdentify />
      </FullScreenSection>
    </div>
  )
}

export default HomeScreen
