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
      <Improvements />
    </div>
  )
}

export default Updates
