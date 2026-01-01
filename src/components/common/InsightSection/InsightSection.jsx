import Heading from '@common/Heading/Heading'
import Text from '@common/Text/Text'
import ContentContainer from '@ui/ContentContainer/ContentContainer'
import clsx from 'clsx'

import styles from './insightSection.module.scss'

const InsightSection = ({ title, description, maxWidthVar, action }) => {
  const classes = clsx(styles.insightSection, styles[`insightSection__content`])
  return (
    <div
      className={classes}
      style={{
        ...(maxWidthVar && {
          '--container-max-width': `var(${maxWidthVar})`,
        }),
      }}
    >
      <ContentContainer>
        <div className={classes}>
          <Heading level="h2" size="xl">
            {title}
          </Heading>
          <Text fontType="primary">{description}</Text>
          {action && <div>{action}</div>}
        </div>
      </ContentContainer>
    </div>
  )
}

export default InsightSection
