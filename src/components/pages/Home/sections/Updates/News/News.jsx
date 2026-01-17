import { newsData } from './news.data.js'
import styles from './news.module.scss'

const News = () => {
  return (
    <>
      {newsData.map((item) => (
        <article key={item.id} className={styles.news}>
          <div className={styles.newsContent}>
            <div className={styles.newsImage}>
              <img src={item.image} alt={item.title} />
              <div className={styles.newsImageOverlay}>
                <span>Quick View</span>
              </div>
            </div>
            <p className={styles.newsTitle}>{item.title}</p>
            <p className={styles.newsDate}>{item.date}</p>
          </div>
        </article>
      ))}
    </>
  )
}

export default News
