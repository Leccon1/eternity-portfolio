import Heading from '@common/Heading/Heading'
import NavButton from '@common/NavButton/NavButton'
import Text from '@common/Text/Text'
import ContentContainer from '@ui/ContentContainer/ContentContainer'

import styles from './homeIdentify.module.scss'
const HomeIdentify = () => {
  return (
    <section className={styles.identify}>
      <ContentContainer>
        <div className={styles.identify__content}>
          <Heading level="h2" size="xl">
            Why am I working slowly?
          </Heading>
          <Text fontType="primary" className={styles.identify__description}>
            Because every decision, from file structure to micro animations— passes through a filter
            of expediency. I believe that design is not a separate stage, but a continuation of the
            project architecture.
          </Text>
          <NavButton variant="secondary">View the history of my formation...</NavButton>
        </div>
      </ContentContainer>
    </section>
  )
}

export default HomeIdentify
