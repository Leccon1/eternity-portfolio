import Heading from '@common/Heading/Heading'
import Text from '@common/Text/Text'
import ContentContainer from '@ui/ContentContainer/ContentContainer'

import styles from './insightSection.module.scss'

const InsightSection = ({ title, description, maxWidthVar, action, className = '' }) => {
  return (
    <section
      className={`${styles.insightSection} ${className}`}
      style={{
        ...(maxWidthVar && {
          '--container-max-width': `var(${maxWidthVar})`,
        }),
      }}
    >
      <ContentContainer>
        <div className={styles.insightSection__content}>
          <Heading level="h2" size="xl">
            {title}
          </Heading>
          <Text fontType="primary">{description}</Text>
          {action && <div>{action}</div>}
        </div>
      </ContentContainer>
    </section>
  )
}

export default InsightSection
