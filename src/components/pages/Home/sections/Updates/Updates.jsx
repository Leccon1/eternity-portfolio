import Improvements from './Improvements/Improvements'
import News from './News/News'
import styles from './Updates.module.scss'

const Updates = ({ className = '' }) => {
  return (
    <div className={`${styles.updates} ${className}`}>
      <section className={styles.updatesNews}>
        <p className={styles.updatesNewsTitle}>News</p>
        <News />
      </section>
      <section className={styles.updatesImprovements}>
        <p className={styles.updatesImprovementsTitle}>Improvements</p>
        <Improvements />
      </section>
    </div>
  )
}

export default Updates
