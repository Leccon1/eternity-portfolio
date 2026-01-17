import NavButton from '@common/NavButton/NavButton'

import ImprovementsData from './improvements.data'
import styles from './improvements.module.scss'

const Improvements = () => {
  const { version, progress, list } = ImprovementsData

  return (
    <article className={styles.Improvements}>
      <div className={styles.ImprovementsContent}>
        <p className={styles.ImprovementsVersion}>{version}</p>

        <ul className={styles.ImprovementsList}>
          {list.map((item, index) => (
            <li key={index} className={styles.ImprovementsItem}>
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
  )
}

export default Improvements
