import styles from './home.module.scss'
import HomeNews from './sections/News/HomeNews'
const HomeScreen = () => {
  return (
    <div className={styles.homeScreen}>
      <HomeNews />
    </div>
  )
}

export default HomeScreen
