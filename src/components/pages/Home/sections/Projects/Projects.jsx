import InsightSection from '@common/InsightSection/InsightSection'
import ProjectsData from '@common/ProjectsCard/projects-card.data'
import ProjectsCard from '@common/ProjectsCard/ProjectsCard'

import styles from './projects.module.scss'

const Projects = () => {
  return (
    <section className={styles.projects}>
      <InsightSection
        title="more than just projects"
        description="Every project here is a solved puzzle and a clean architecture. I don't 'stamp' websites, but create digital products where a strict order is hidden behind the external aesthetics: from an ideal Git history to optimized states."
      />
      {ProjectsData.map((project, index) => (
        <ProjectsCard key={index} {...project} />
      ))}
    </section>
  )
}

export default Projects
