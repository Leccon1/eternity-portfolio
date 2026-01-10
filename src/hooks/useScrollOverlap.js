import { useEffect } from 'react'

export const useScrollOverlap = (targetRef, referenceRef) => {
  useEffect(() => {
    const handleScroll = () => {
      if (!targetRef.current || !referenceRef.current) return

      const scrollY = window.scrollY
      const heroHeight = referenceRef.current.offsetHeight

      const progress = Math.min(scrollY / heroHeight, 1)

      referenceRef.current.style.transform = `translateY(${-progress * 50}px)`
      referenceRef.current.style.filter = `blur(${progress * 5}px)`

      targetRef.current.style.transform = `translateY(${-progress * 20}px)`
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [targetRef, referenceRef])
}
