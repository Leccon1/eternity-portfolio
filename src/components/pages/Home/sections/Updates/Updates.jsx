import Improments from './Improments/Improments'
import News from './News/News'
import styles from './Updates.module.scss'

const Updates = ({ className = '' }) => {
  return (
    <section className={`${styles.Updates} ${className}`}>
      <News />
      <Improments />
    </section>
  )
}

export default Updates
