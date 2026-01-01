import Heading from '@common/Heading/Heading'
import NavButton from '@common/NavButton/NavButton'
import Text from '@common/Text/Text'
import ContentContainer from '@ui/ContentContainer/ContentContainer'
import clsx from 'clsx'

import styles from './insightSection.module.scss'

const InsightSection = ({ title, description, buttonText }) => {
  const classes = clsx(styles.insightSection, styles[`insightSection__content`])
  return (
    <div className={classes}>
      <ContentContainer>
        <div className={classes}>
          <Heading level="h2" size="xl">
            {title}
          </Heading>
          <Text fontType="primary">{description}</Text>
          <NavButton variant="secondary">{buttonText}</NavButton>
        </div>
      </ContentContainer>
    </div>
  )
}

export default InsightSection
