import ArrowButton from '@common/ArrowButton/ArrowButton'
import NavButton from '@common/NavButton/NavButton'
import TechStack from '@common/TechStack/TechStack'
import bookmarkManagerPreview from '@images/previewProjects/bookmark-manager-preview.png'

import styles from './projectsCard.module.scss'

const ProjectsCard = () => {
  return (
    <div className={styles.projectsCard}>
      <div className={styles.projectsCard__content}>
        <p className={styles.projectsCard__title}>Bookmark manager</p>
        <p className={styles.projectsCard__description}>
          An interactive web application with a dynamic interface and a thoughtful user scenario,
          focused on convenience and a holistic UX.
        </p>

        <TechStack items={['Html', 'SCSS', 'JavaScript', 'Vite']} className={styles.techStack} />

        <NavButton variant="secondary">View project</NavButton>
      </div>

      <div className={styles.spacer}></div>

      <div className={styles.previewPanel}>
        <ArrowButton direction="right" className={styles.arrowButton} onClick={() => {}} />

        <div className={styles.previewPanel__image}>
          <img src={bookmarkManagerPreview} alt="Bookmark manager preview" />
        </div>
      </div>
    </div>
  )
}

export default ProjectsCard
