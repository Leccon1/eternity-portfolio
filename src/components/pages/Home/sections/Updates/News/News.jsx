import styles from './news.module.scss'
import { newsData } from './newsItem.data.js'

const News = () => {
  return (
    <section className={styles.news}>
      <p className={styles.newsTitle}>News</p>

      {newsData.map((item) => (
        <article key={item.id} className={styles.item}>
          <div className={styles.itemContent}>
            <div className={styles.itemImage}>
              <img src={item.image} alt={item.title} />
              <div className={styles.itemImageOverlay}>
                <span>Quick View</span>
              </div>
            </div>
            <p className={styles.itemTitle}>{item.title}</p>
            <p className={styles.itemDate}>{item.date}</p>
          </div>
        </article>
      ))}
    </section>
  )
}

export default News
