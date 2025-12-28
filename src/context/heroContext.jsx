import { createContext, useContext, useState } from 'react'

import { heroData } from '../components/common/Hero/hero.data'

const HeroContext = createContext()

export const HeroProvider = ({ children }) => {
  const [currentPageKey, setCurrentPageKey] = useState('home')

  const currentHeroData = heroData[currentPageKey] || heroData.home

  return (
    <HeroContext.Provider value={{ currentHeroData, setCurrentPageKey }}>
      {children}
    </HeroContext.Provider>
  )
}

export const useHero = () => {
  const context = useContext(HeroContext)

  if (!context) {
    throw new Error('useHero must be used within a HeroProvider')
  }

  return context
}

export default HeroContext
