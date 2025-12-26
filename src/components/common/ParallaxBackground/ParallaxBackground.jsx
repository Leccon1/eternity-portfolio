import { animate } from 'animejs'
import { useEffect, useRef } from 'react'

import styles from './parallaxBackground.module.scss'

const ParallaxBackground = () => {
  const bgRef = useRef(null)
  const parallaxHandler = useRef(null)

  useEffect(() => {
    if (!bgRef.current) return

    animate(bgRef.current, {
      scale: [1, 1.1],
      translateY: [20, 0],
      duration: 1800,
      easing: 'easeOutExpo',
      onComplete: enableParallax,
    })

    function enableParallax() {
      let mouseX = 0
      let mouseY = 0
      let currentX = 0
      let currentY = 0
      const speed = 0.06

      const animateParallax = () => {
        currentX += (mouseX - currentX) * speed
        currentY += (mouseY - currentY) * speed

        bgRef.current.style.transform = `scale(1.1) translate3d(${currentX}px, ${currentY}px, 0)`

        requestAnimationFrame(animateParallax)
      }

      const handleMouseMove = (e) => {
        mouseX = (e.clientX / window.innerWidth - 0.5) * 20
        mouseY = (e.clientY / window.innerHeight - 0.5) * 20
      }

      parallaxHandler.current = handleMouseMove
      window.addEventListener('mousemove', handleMouseMove)
      animateParallax()
    }

    // Cleanup
    return () => {
      if (parallaxHandler.current) {
        window.removeEventListener('mousemove', parallaxHandler.current)
      }
    }
  }, [])

  return <div ref={bgRef} className={styles.parallaxBg} />
}

export default ParallaxBackground
