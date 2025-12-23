import Heading from '@common/Heading/Heading'

import Hero from '../../common/Hero/Hero'

import styles from './home.module.scss'
const HomeScreen = () => {
  return (
    <div className={styles.homeScreen}>
      <Hero className={styles.hero}>
        <div className={styles.hero__content}>
          <div className={styles.hero__info}>
            <Heading className={styles.hero__title} level="h1" size="xxxl">
              Ivan Samolkin
            </Heading>
            <p className={styles.hero__subtitle}>Aka Leccon1</p>
            <p className={styles.hero__post}>Front-End Developer</p>
            <p className={styles.hero__description}>
              I am a self-taught front-end developer passionate about creating intuitive, modern,
              and user-friendly interfaces.
            </p>
          </div>
          <div className={styles.hero__buttons}>
            <button type="button">View News</button>
            <button type="button">About Me</button>
          </div>
        </div>
      </Hero>
    </div>
  )
}

export default HomeScreen
