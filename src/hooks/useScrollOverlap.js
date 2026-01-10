import { useEffect } from 'react'

export const useScrollOverlap = (pagesRef, heroRef) => {
  useEffect(() => {
    const handleScroll = () => {
      if (!pagesRef.current || !heroRef.current) return

      const scrollY = window.scrollY
      const heroHeight = heroRef.current.offsetHeight

      const progress = Math.min(scrollY / heroHeight, 1)

      heroRef.current.style.transform = `translateY(${-progress * 10}px)`
      pagesRef.current.style.transform = `translateY(${-progress * 20}px)`
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [pagesRef, heroRef])
}
