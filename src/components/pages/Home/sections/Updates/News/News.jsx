import img from '@images/previewProjects/bookmark-manager-preview.png'

import styles from './news.module.scss'
const News = () => {
  return (
    <article className={styles.news}>
      <p className={styles.newsTitle}>News</p>
      <div className={styles.item}>
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
      </div>
    </article>
  )
}

export default News
