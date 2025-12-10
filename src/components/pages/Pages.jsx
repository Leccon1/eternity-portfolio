import { useState } from 'react'

import HomeScreen from './Home/Home'

const Pages = () => {
  const [currentScreen, setCurrentScreen] = useState('home')

  const goTo = (screenName) => setCurrentScreen(screenName)

  return (
    <div className="pages-container">
      <div className="screen">{currentScreen === 'home' && <HomeScreen />}</div>
    </div>
  )
}

export default Pages
