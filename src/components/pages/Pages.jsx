import { useState } from 'react'

import HomeScreen from './Home/Home'
import styles from './pages.module.scss'

const Pages = () => {
  const [currentScreen, setCurrentScreen] = useState('home')

  const goTo = (screenName) => setCurrentScreen(screenName)

  return (
    <main className={`${styles.pagesContainer}`}>{currentScreen === 'home' && <HomeScreen />}</main>
  )
}

export default Pages
