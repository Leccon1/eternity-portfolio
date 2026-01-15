import img from '@images/previewProjects/bookmark-manager-preview.png'

import styles from './news.module.scss'
const News = () => {
  return (
    <section className={styles.news}>
      <p className={styles.newsTitle}>News</p>
      <article
        className={styles.item}
        onMouseEnter={(e) => e.currentTarget.classList.add(styles.itemHover)}
        onMouseLeave={(e) => e.currentTarget.classList.remove(styles.itemHover)}
      >
        <div className={styles.itemContent}>
          <div className={styles.itemImage}>
            <img src={img} alt="" />
            <div className={styles.itemImageOverlay}>
              <span>Quick View</span>
            </div>
          </div>
          <p className={styles.itemTitle}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita, facilis!
          </p>
          <p className={styles.itemDate}>OCT 28, 2026</p>
        </div>
      </article>
    </section>
  )
}

export default News
