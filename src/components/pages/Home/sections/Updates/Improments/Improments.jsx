import NavButton from '@common/NavButton/NavButton'

import styles from './improments.module.scss'

const Improments = () => {
  return (
    <article className={styles.Improvements}>
      <div className={styles.ImprovementsContent}>
        <p className={styles.ImprovementsVersion}>v1.0.0</p>
        <ul className={styles.iImprovementsList}>
          <li className={styles.ImprovementsItem}>Lorem ipsum dolor sit amet.</li>
          <li className={styles.ImprovementsItem}>Lorem ipsum dolor sit amet.</li>
          <li className={styles.ImprovementsItem}>Lorem ipsum dolor sit amet.</li>
        </ul>
      </div>

      <div className={styles.ImprovementsOverlay}>
        <div className={styles.ImprovementsProgressBar}>
          <div className={styles.ImprovementsProgress}></div>
        </div>

        <div className={styles.ImprovementsProgressStatus}>85% completed</div>

        <NavButton variant="secondary">Detailed log</NavButton>
      </div>
    </article>
  )
}

export default Improments
