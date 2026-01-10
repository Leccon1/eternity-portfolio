import { useEffect } from 'react'

export const useScrollOverlap = (targetRef, referenceRef, options = {}) => {
  const { targetOffset = -20, referenceOffset = -50 } = options

  useEffect(() => {
    const handleScroll = () => {
      if (!targetRef.current || !referenceRef.current) return

      const scrollY = window.scrollY
      const heroHeight = referenceRef.current.offsetHeight
      const progress = Math.min(Math.max(scrollY / heroHeight, 0), 1)

      referenceRef.current.style.transform = `translateY(${progress * referenceOffset}px)`
      targetRef.current.style.transform = `translateY(${progress * targetOffset}px)`
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [targetRef, referenceRef, targetOffset, referenceOffset])
}
