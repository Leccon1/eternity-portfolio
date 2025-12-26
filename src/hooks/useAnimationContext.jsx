import { createContext, useContext, useState } from 'react'

const AnimationContext = createContext()

export const useAnimation = () => useContext(AnimationContext)

export const AnimationProvider = ({ children }) => {
  const [state, setState] = useState({
    introFinished: false,
    contentAnimated: false,
    parallaxActive: false,
  })

  return (
    <AnimationContext.Provider value={{ state, setState }}>{children}</AnimationContext.Provider>
  )
}
