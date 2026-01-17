import NavButton from '@common/NavButton/NavButton'

import ImprovementsData from './improvements.data'
import styles from './improvements.module.scss'

const Improvements = () => {
  return (
    <section className={styles.ImprovementsGrid}>
      {ImprovementsData.map(({ version, progress, list }, index) => (
        <article key={index} className={styles.Improvements}>
          <div className={styles.ImprovementsContent}>
            <p className={styles.ImprovementsVersion}>{version}</p>

            <ul className={styles.ImprovementsList}>
              {list.map((item, itemIndex) => (
                <li key={itemIndex} className={styles.ImprovementsItem}>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.ImprovementsOverlay}>
            <div className={styles.ImprovementsProgressBar}>
              <div className={styles.ImprovementsProgress} style={{ width: `${progress}%` }} />
            </div>

            <div className={styles.ImprovementsProgressStatus}>{progress}% completed</div>

            <NavButton variant="secondary">Detailed log</NavButton>
          </div>
        </article>
      ))}
    </section>
  )
}

export default Improvements
