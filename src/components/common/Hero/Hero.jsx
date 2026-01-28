import Heading from '@common/Heading/Heading'
import NavButton from '@common/NavButton/NavButton'
import { useAnimation } from '@hooks/useAnimationContext'
import ContentContainer from '@ui/ContentContainer/ContentContainer'
import { hexToRgb } from '@utils/hexToRgb'
import { randomRange } from '@utils/math'
import { animate, createTimeline, splitText, stagger } from 'animejs'
import { useEffect, useRef } from 'react'
import { shallow } from 'zustand/shallow'

import styles from './hero.module.scss'

const Hero = ({ data }) => {
  const containerRef = useRef(null)
  const nextSpawnRef = useRef(0)
  const { state } = useAnimation()
  const canvasRef = useRef(null)
  const particlesRef = useRef([])
  const lastSpawnRef = useRef(0)
  const spawnInterval = { min: 300, max: 700 }

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    let lastTime = performance.now()

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    canvas.style.width = '100%'
    canvas.style.height = '100%'

    const particlesColor = getComputedStyle(document.documentElement)
      .getPropertyValue('--color-accent')
      .trim()

    const particlesColorRgb = hexToRgb(particlesColor)
    console.log(particlesColorRgb, particlesColor)

    const animate = (time) => {
      const dt = time - lastTime
      lastTime = time

      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.shadowBlur = 0

      if (time - lastSpawnRef.current > nextSpawnRef.current) {
        const size = randomRange(15, 35)
        particlesRef.current.push({
          x: 0,
          y: canvas.height,
          size,
          speed: randomRange(0.03, 0.06),
          angle: (Math.random() * Math.PI) / 2,
          alpha: randomRange(0.5, 1),
          life: 0,
          maxLife: randomRange(7000, 15000),
          shrink: randomRange(5, 10),
          fading: false,
        })
        lastSpawnRef.current = time
        nextSpawnRef.current = randomRange(spawnInterval.min, spawnInterval.max)
      }

      particlesRef.current.forEach((p) => {
        if (!p.fading) {
          // движение
          p.x += Math.cos(p.angle) * p.speed * dt
          p.y -= Math.sin(p.angle) * p.speed * dt

          // увеличение жизни
          p.life += dt

          // проверка окончания жизни
          if (p.life >= p.maxLife || p.x > canvas.width || p.y < 0) {
            p.fading = true
          }
        } else {
          // затухание
          p.size *= 0.98
          p.alpha *= 0.98
        }

        // вычисление текущего размера
        const lifeRatio = p.life / p.maxLife
        const currentSize = p.fading
          ? Math.max(p.size, 0)
          : Math.max(p.size - lifeRatio * p.shrink, p.size * 0.5)

        // рисуем частицу с blur и динамическим цветом
        ctx.save()
        ctx.fillStyle = `rgba(${particlesColorRgb},${p.alpha})`
        ctx.shadowColor = `rgba(${particlesColorRgb},${p.alpha})`
        ctx.shadowBlur = currentSize * 8
        ctx.filter = `blur(${currentSize * 0.3}px)`

        ctx.beginPath()
        ctx.arc(p.x, p.y, currentSize, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      })

      // Удаляем «мертвые» частицы один раз после обновления всех
      particlesRef.current = particlesRef.current.filter((p) => p.alpha >= 0.01 && p.size >= 0.1)

      requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate)
  }, [])

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
