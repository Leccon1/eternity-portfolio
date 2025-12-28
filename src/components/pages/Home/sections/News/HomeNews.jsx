import styles from './news.module.scss'

const HomeNews = ({ className = '' }) => {
  return <section className={`${styles.news} ${className}`}>NEWS</section>
}

export default HomeNews
