import { useState } from 'react'

import HomeScreen from './Home/Home'

const Pages = () => {
  const [currentScreen, setCurrentScreen] = useState('home')

  const goTo = (screenName) => setCurrentScreen(screenName)

  return <main className="pages-container">{currentScreen === 'home' && <HomeScreen />}</main>
}

export default Pages
