import Heading from '@common/Heading/Heading'
import Hero from '@common/Hero/Hero'
import ContentContainer from '@ui/ContentContainer/ContentContainer'

import NavButton from '../../common/NavButton/NavButton'

import styles from './home.module.scss'
const HomeScreen = () => {
  return (
    <div className={styles.homeScreen}>
      <Hero className={styles.hero}>
        <div className={styles.hero__content}>
          <ContentContainer>
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
          </ContentContainer>
          <div className={styles.hero__buttons}>
            <NavButton
              href={'#about'}
              className={styles.hero__button}
              vairiant="primary"
              size="md"
              onClick={() => console.log('gg')}
            >
              View News
            </NavButton>
            <NavButton
              href={'#about'}
              className={styles.hero__button}
              vairiant="secondary"
              size="md"
              onClick={() => console.log('gg')}
            >
              About Me
            </NavButton>
          </div>
        </div>
      </Hero>
    </div>
  )
}

export default HomeScreen
