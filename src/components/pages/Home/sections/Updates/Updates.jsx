import Improvements from './Improvements/Improvements'
import News from './News/News'
import styles from './Updates.module.scss'

const Updates = ({ className = '' }) => {
  return (
    <section className={`${styles.Updates} ${className}`}>
      <News />
      <Improvements />
    </section>
  )
}

export default Updates
