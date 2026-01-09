import ArrowButton from '@common/ArrowButton/ArrowButton'
import NavButton from '@common/NavButton/NavButton'
import TechStack from '@common/TechStack/TechStack'
import { useState } from 'react'

import styles from './projectsCard.module.scss'

const ProjectsCard = ({ title, description, techStack, image, link }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleCard = () => {
    setIsOpen(!isOpen)
  }

  return (
    <article className={`${styles.projectsCard} ${isOpen ? styles.isOpen : ''}`}>
      <div className={styles.projectsCard__content}>
        <h3 className={styles.projectsCard__title}>{title}</h3>
        <p className={styles.projectsCard__description}>{description}</p>

        <TechStack items={techStack} className={styles.techStack} />

        <NavButton variant="secondary" href={link}>
          View project
        </NavButton>
      </div>

      <div className={styles.projectsCard__previewPanel} onClick={toggleCard}>
        <ArrowButton
          direction={isOpen ? 'left' : 'right'}
          className={styles.arrowButton}
          onClick={(e) => e.stopPropagation()}
        />

        <div className={styles['projectsCard__previewPanel-image']}>
          <img src={image} alt={`${title} preview`} />
        </div>
      </div>
    </article>
  )
}

export default ProjectsCard
