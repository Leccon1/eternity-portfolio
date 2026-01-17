import NavButton from '@common/NavButton/NavButton'

import styles from './improments.module.scss'

const Improments = () => {
  return (
    <article className={styles.improments}>
      <p className={styles.impromentsVersion}>v1.0.0</p>

      <ul className={styles.impromentsList}>
        <li className={styles.impromentsItem}>Lorem ipsum dolor sit amet.</li>
        <li className={styles.impromentsItem}>Lorem ipsum dolor sit amet.</li>
        <li className={styles.impromentsItem}>Lorem ipsum dolor sit amet.</li>
      </ul>

      <div className={styles.impromentsOverlay}>
        <div className={styles.impromentsProgressBar}>
          <div className={styles.impromentsProgress}></div>
        </div>

        <div className={styles.impromentsProgressStatus}>85% completed</div>

        <NavButton variant="secondary">Detailed log</NavButton>
      </div>
    </article>
  )
}

export default Improments
