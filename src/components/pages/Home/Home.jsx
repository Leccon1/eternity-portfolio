import FullScreenSection from '../../common/FullScreenSection/FullScreenSection'

import styles from './home.module.scss'
import Identify from './sections/Identify/Identify'
const HomeScreen = () => {
  return (
    <div className={styles.homeScreen}>
      <FullScreenSection>
        <Identify />
      </FullScreenSection>
    </div>
  )
}

export default HomeScreen
