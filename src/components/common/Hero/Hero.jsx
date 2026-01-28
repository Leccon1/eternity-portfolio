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
    const canvas = containerRef.current
    if (!canvas || !(canvas instanceof HTMLCanvasElement)) return

    const ctx = canvas.getContext('2d')
    const $range = document.querySelector('.range')

    const particles = []
    const particleCount = 60 // Начнем с меньшего числа для теста

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    window.addEventListener('resize', resize)
    resize()

    // Инициализация
    for (let i = 0; i < particleCount; i++) {
      const p = {
        x: utils.random(0, 50),
        y: 0,
        scale: 0,
        opacity: 0,
      }
      particles.push(p)

      // Более явная анимация для объектов
      animate(p, {
        x: {
          value: [p.x, p.x + utils.random(200, 800)],
          easing: 'linear',
        },
        y: {
          value: [0, utils.random(-400, -800)],
          easing: 'outCubic',
        },
        scale: [
          { value: 1, duration: 1000, easing: 'outQuad' },
          { value: 0, duration: 4000, easing: 'inQuad' },
        ],
        opacity: [
          { value: 1, duration: 800, easing: 'linear' },
          { value: 0, duration: 5000, easing: 'linear' },
        ],
        duration: utils.random(4000, 8000),
        delay: i * 100,
        loop: true,
      })
    }

    let animationFrame
    const render = () => {
      // Очищаем прозрачным цветом
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p) => {
        // Если частица невидима, не тратим ресурсы
        if (p.opacity <= 0.001) return

        ctx.beginPath()
        ctx.globalAlpha = p.opacity
        ctx.fillStyle = '#00f2ff'

        // Рисуем относительно НИЗА канваса
        // ВАЖНО: убедитесь, что canvas.height > 0
        const drawX = p.x
        const drawY = canvas.height + p.y

        const radius = 10 * p.scale
        if (radius > 0) {
          ctx.arc(drawX, drawY, radius, 0, Math.PI * 2)
          ctx.fill()
        }
      })

      animationFrame = requestAnimationFrame(render)
    }

    render()

    const onInput = (e) => {
      engine.speed = parseFloat(e.target.value)
    }
    $range?.addEventListener('input', onInput)

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationFrame)
      $range?.removeEventListener('input', onInput)
    }
  }, [data])

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
        <div className={styles.particleScene}>
          <div className={styles.sceneInner}>
            <canvas ref={containerRef} className={styles.particleCanvas} />

            <div className="medium row">
              <fieldset className={styles.controls}>
                <input
                  type="range"
                  min="0.1"
                  max="2"
                  defaultValue="1"
                  step=".01"
                  className="range"
                />
              </fieldset>
            </div>
          </div>
        </div>
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
