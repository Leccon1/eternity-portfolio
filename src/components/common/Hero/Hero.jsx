import Heading from '@common/Heading/Heading'
import NavButton from '@common/NavButton/NavButton'
import { useAnimation } from '@hooks/useAnimationContext'
import ContentContainer from '@ui/ContentContainer/ContentContainer'
import { hexToRgb } from '@utils/hexToRgb'
import { randomRange } from '@utils/math'
import { animate, createTimeline, splitText, stagger } from 'animejs'
import { useEffect, useRef } from 'react'

import styles from './hero.module.scss'

const Hero = ({ data }) => {
  const containerRef = useRef(null)
  const titleElementRef = useRef(null)
  const { state, setState } = useAnimation()
  const canvasRef = useRef(null)
  const particlesRef = useRef([])
  const lastSpawnRef = useRef(0)
  const nextSpawnRef = useRef(0)

  // --- ЭФФЕКТ ЧАСТИЦ (без изменений) ---
  useEffect(() => {
    if (!canvasRef.current) return
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const particlesColorHex = getComputedStyle(document.documentElement)
      .getPropertyValue('--color-accent')
      .trim()
    const particlesColorRgb = hexToRgb(particlesColorHex)

    const createCache = (colorRgb, size) => {
      const cacheCanvas = document.createElement('canvas')
      const blurAmount = 6
      const glowAmount = 64

      // Размер должен учитывать блюр и тень, чтобы они не обрезались
      cacheCanvas.width = size * 2 + glowAmount * 2
      cacheCanvas.height = size * 2 + glowAmount * 2
      const cctx = cacheCanvas.getContext('2d')

      cctx.filter = `blur(${blurAmount}px)`
      cctx.shadowColor = `rgba(${colorRgb}, 0.5)`
      cctx.shadowBlur = glowAmount

      const center = cacheCanvas.width / 2

      // Рисуем один раз
      const grad = cctx.createRadialGradient(center, center, 0, center, center, size)
      grad.addColorStop(0, `rgba(${colorRgb}, 1)`)
      grad.addColorStop(0.9, `rgba(${colorRgb}, 0.8)`)
      grad.addColorStop(1, `rgba(${colorRgb}, 0)`)

      cctx.fillStyle = grad
      cctx.beginPath()
      cctx.arc(center, center, size, 0, Math.PI * 2)
      cctx.fill()

      return cacheCanvas
    }

    const particleCache = createCache(particlesColorRgb, 35)
    const whiteCache = createCache('255, 255, 255', 35)

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize)
    handleResize()

    let lastTime = performance.now()
    let animationFrameId

    const animate = (time) => {
      const dt = time - lastTime
      lastTime = time
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      if (time - lastSpawnRef.current > nextSpawnRef.current) {
        for (let i = 0; i < 2; i++) {
          particlesRef.current.push({
            x: randomRange(0, canvas.width),
            y: canvas.height + 50,
            size: randomRange(5, 30),
            speed: randomRange(0.02, 0.05),
            angle: Math.PI / 2 + randomRange(-0.2, 0.2),
            alpha: randomRange(0.4, 0.8),
            life: 0,
            maxLife: randomRange(6000, 12000),
            shrink: randomRange(2, 5),
            fading: false,
          })
        }
        lastSpawnRef.current = time
        nextSpawnRef.current = randomRange(100, 400)
      }
      particlesRef.current.forEach((p) => {
        if (!p.fading) {
          p.x += Math.cos(p.angle) * p.speed * dt
          p.y -= Math.sin(p.angle) * p.speed * dt
          p.life += dt
          if (p.life >= p.maxLife || p.y < -50) p.fading = true
        } else {
          p.alpha *= 0.96
        }
        const lifeRatio = p.life / p.maxLife
        const currentSize = p.fading
          ? Math.max(p.size * p.alpha, 0)
          : Math.max(p.size - lifeRatio * p.shrink, p.size * 0.5)
        ctx.save()
        const whiteAlpha = Math.max(0, Math.sin(lifeRatio * Math.PI) * 0.8)
        ctx.globalAlpha = p.alpha
        ctx.drawImage(
          particleCache,
          p.x - currentSize,
          p.y - currentSize,
          currentSize * 2,
          currentSize * 2
        )
        if (whiteAlpha > 0) {
          ctx.globalAlpha = p.alpha * whiteAlpha
          ctx.drawImage(
            whiteCache,
            p.x - currentSize,
            p.y - currentSize,
            currentSize * 2,
            currentSize * 2
          )
        }
        ctx.restore()
      })
      particlesRef.current = particlesRef.current.filter((p) => p.alpha >= 0.02)
      animationFrameId = requestAnimationFrame(animate)
    }

    animationFrameId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', handleResize)
    }
  }, [state.introFinished])

  // --- ЭФФЕКТ 3D ТЕКСТА (ИНВЕРТИРОВАННАЯ ПЕРСПЕКТИВА) ---
  useEffect(() => {
    if (!state.introEnabled || state.introFinished) {
      setState((s) => ({ ...s, contentAnimated: true }))
    }

    const ctx = containerRef.current
    const heroSubtitle = ctx.querySelector(`.${styles.hero__subtitle}`)
    const heroPost = ctx.querySelector(`.${styles.hero__post}`)
    const heroDescription = ctx.querySelector(`.${styles.hero__description}`)
    const buttonsContainer = ctx.querySelector(`.${styles.hero__buttons}`)

    // 1. Разбиваем текст на символы
    const { chars } = splitText(titleElementRef.current, {
      chars: { wrap: 'clip' },
    })

    // 2. Рассчитываем тени относительно всей строки
    chars.forEach((char, i) => {
      const total = chars.length
      // Рассчитываем позицию от -1 до 1 строго по всей длине массива chars
      const offset = (i - (total - 1) / 2) / ((total - 1) / 2 || 1)

      // ИНВЕРСИЯ: Слева (offset -1) -> тень вправо (+), Справа (offset 1) -> тень влево (-)
      const maxShadowX = 40 // Увеличил для наглядности, можно подправить
      const shadowX = -(offset * maxShadowX)

      let shadowStyle = ''
      for (let s = 1; s <= 12; s++) {
        const x = (shadowX * (s / 12)).toFixed(2)
        const y = (s * 1.2).toFixed(2)

        const color =
          s < 8 ? `rgba(200, 225, 255, ${1 - s / 15})` : `rgba(10, 25, 45, ${0.3 + s / 20})`

        shadowStyle += `${x}px ${y}px 0px ${color}${s === 12 ? '' : ', '}`
      }

      shadowStyle += `, ${(shadowX * 1.5).toFixed(2)}px 15px 30px rgba(0, 0, 0, 0.4)`

      char.style.display = 'inline-block'
      char.style.textShadow = shadowStyle
    })

    // Анимации появления
    animate(chars, {
      y: ['100%', '0%'],
      duration: 1000,
      ease: 'out(3)',
      delay: stagger(50),
    })

    const tl = createTimeline({ easing: 'easeOutExpo', duration: 1000 })
    tl.add([heroSubtitle, heroPost, heroDescription, buttonsContainer], {
      scale: [0.9, 1],
      translateY: [10, 0],
      opacity: [0, 1],
      delay: stagger(500, { start: 1000 }),
    })

    tl.add(
      buttonsContainer,
      {
        gap: 'var(--spacing-xl)',
        duration: 1000,
      },
      2500
    )
  }, [state.introFinished, data])

  if (!data) return null

  return (
    <section className={styles.hero}>
      <div className={styles.hero__bg}>
        <div className={`${styles.glow} ${styles.glow_1}`} />
        <div className={`${styles.glow} ${styles.glow_2}`} />
        <canvas
          ref={canvasRef}
          style={{
            background: 'transparent',
            pointerEvents: 'none',
            zIndex: '-1',
          }}
        />
      </div>

      <div className={styles.hero__content} ref={containerRef}>
        <ContentContainer>
          <div className={styles.hero__info}>
            <Heading className={styles.hero__title} ref={titleElementRef} level="h1" size="3xl">
              {data.title}
            </Heading>
            <p className={styles.hero__subtitle}>{data.subtitle}</p>
            <p className={styles.hero__post}>{data.post}</p>
            <p className={styles.hero__description}>{data.description}</p>
          </div>
        </ContentContainer>

        <div className={styles.hero__buttons}>
          {data.buttons?.map((btn, index) => (
            <NavButton
              key={index}
              href={btn.href}
              className={styles.hero__button}
              variant={btn.variant}
              size="md"
              onClick={btn.onClick}
            >
              {btn.text}
            </NavButton>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
