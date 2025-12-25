import styles from './home.module.scss'
import HomeHero from './sections/Hero/HomeHero'

const HomeScreen = () => {
  return (
    <div className={styles.homeScreen}>
      <HomeHero />
    </div>
  )
}

export default HomeScreen
