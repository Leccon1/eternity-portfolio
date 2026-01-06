import NavButton from '@common/NavButton/NavButton'
import TechStack from '@common/TechStack/TechStack'

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

        <TechStack items={['React', 'Typescript', 'SCSS']} className={styles.techStack} />

        <NavButton variant="primary">View project</NavButton>
      </div>

      <div className={styles.spacer}></div>
    </div>
  )
}

export default ProjectsCard
