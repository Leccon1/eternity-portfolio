import { animate } from 'animejs'
import { useEffect, useRef } from 'react'

import styles from './parallaxBackground.module.scss'

const ParallaxBackground = ({
  className = '',
  isAnimate = true,
  parallaxSpeed = 0.1,
  imageSrc = '',
  opacity = 1,
}) => {
  const bgRef = useRef(null)
  const parallaxHandler = useRef(null)

  useEffect(() => {
    if (!bgRef.current) return

    {
      isAnimate
        ? animate(bgRef.current, {
            scale: [1, 1.1],
            translateY: [20, 0],
            duration: 1800,
            easing: 'easeOutExpo',
            onComplete: enableParallax,
          })
        : enableParallax()
    }

    function enableParallax() {
      let mouseX = 0
      let mouseY = 0
      let currentX = 0
      let currentY = 0
      const speed = parallaxSpeed

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

  return (
    <div
      ref={bgRef}
      className={`${styles.parallaxBg} ${className}`}
      style={{ backgroundImage: `url(${imageSrc})`, opacity: opacity }}
    />
  )
}

export default ParallaxBackground
