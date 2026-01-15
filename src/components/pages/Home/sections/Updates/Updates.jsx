import News from './News/News'
import styles from './Updates.module.scss'

const Updates = ({ className = '' }) => {
  return (
    <section className={`${styles.Updates} ${className}`}>
      <News />
    </section>
  )
}

export default Updates
