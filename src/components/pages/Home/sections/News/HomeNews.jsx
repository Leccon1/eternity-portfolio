import styles from './homeNews.module.scss'

const HomeNews = ({ className = '' }) => {
  return <section className={`${styles.news} ${className}`}>NEWS</section>
}

export default HomeNews
