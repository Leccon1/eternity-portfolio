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
  const nextSpawnRef = useRef(0)
  const { state } = useAnimation()
  const canvasRef = useRef(null)
  const particlesRef = useRef([])
  const lastSpawnRef = useRef(0)

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

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    // 1. Сначала получаем цвета
    const particlesColorHex = getComputedStyle(document.documentElement)
      .getPropertyValue('--color-accent')
      .trim()
    const particlesColorRgb = hexToRgb(particlesColorHex)

    // 2. Создаем кэш (теперь переменная цвета доступна)
    // Размер 35 — это базовый радиус, кэш подстроится сам
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

      // Увеличение количества: спавним чаще
      if (time - lastSpawnRef.current > nextSpawnRef.current) {
        // Спавним по 2 частицы за раз для густоты
        for (let i = 0; i < 2; i++) {
          const size = randomRange(5, 30)
          particlesRef.current.push({
            x: randomRange(0, canvas.width), // Вылет по всей ширине
            y: canvas.height + 50,
            size,
            speed: randomRange(0.02, 0.05),
            angle: Math.PI / 2 + randomRange(-0.2, 0.2), // Летит вверх с легким разбросом
            alpha: randomRange(0.4, 0.8),
            life: 0,
            maxLife: randomRange(6000, 12000),
            shrink: randomRange(2, 5),
            fading: false,
          })
        }
        lastSpawnRef.current = time
        // Уменьшенный интервал для большего количества частиц
        nextSpawnRef.current = randomRange(100, 400)
      }

      particlesRef.current.forEach((p) => {
        if (!p.fading) {
          p.x += Math.cos(p.angle) * p.speed * dt
          p.y -= Math.sin(p.angle) * p.speed * dt
          p.life += dt
          if (p.life >= p.maxLife || p.y < -50) p.fading = true
        } else {
          p.alpha *= 0.96 // Плавное исчезновение
        }

        const lifeRatio = p.life / p.maxLife
        const currentSize = p.fading
          ? Math.max(p.size * p.alpha, 0)
          : Math.max(p.size - lifeRatio * p.shrink, p.size * 0.5)

        // Рисуем из кэша
        ctx.save()

        // Медленный перелив в белый (синус)
        const whiteAlpha = Math.max(0, Math.sin(lifeRatio * Math.PI) * 0.8)

        // Отрисовка основной частицы
        ctx.globalAlpha = p.alpha
        ctx.drawImage(
          particleCache,
          p.x - currentSize,
          p.y - currentSize,
          currentSize * 2,
          currentSize * 2
        )

        // Отрисовка белого перелива поверх
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

  useEffect(() => {
    if (!state.introFinished || !data) return

    const ctx = containerRef.current
    const heroSubtitle = ctx.querySelector(`.${styles.hero__subtitle}`)
    const heroPost = ctx.querySelector(`.${styles.hero__post}`)
    const heroDescription = ctx.querySelector(`.${styles.hero__description}`)
    const buttonsContainer = ctx.querySelector(`.${styles.hero__buttons}`)

    const titleElement = ctx.querySelector('.hero__title')

    const { chars } = splitText(titleElement, {
      chars: { wrap: 'clip' },
    })

    animate([chars, heroDescription, heroPost, heroSubtitle, buttonsContainer], {
      opacity: [0, 1],
      delay: 0,
    })

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
        <div className={`${styles.glow} ${styles.glow_3}`} />
        <div className={`${styles.glow} ${styles.glow_4}`} />
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
            <Heading className="hero__title" level="h1" size="3xl">
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
