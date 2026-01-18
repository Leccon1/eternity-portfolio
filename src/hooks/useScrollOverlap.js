import { useEffect } from 'react'

export const useScrollOverlap = (targetRef, referenceRef, options = {}) => {
  const { targetOffset = -100, referenceOffset = 0 } = options

  useEffect(() => {
    const handleScroll = () => {
      if (!targetRef.current || !referenceRef.current) return

      const rect = referenceRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight

      if (rect.top <= windowHeight && rect.top >= 0) {
        const progress = 1 - rect.top / windowHeight
        targetRef.current.style.transform = `translateY(${progress * targetOffset}px)`
        referenceRef.current.style.transform = `translateY(${progress * referenceOffset}px)`
      } else if (rect.top < 0) {
        targetRef.current.style.transform = `translateY(${targetOffset}px)`
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [targetRef, referenceRef, targetOffset, referenceOffset])
}
