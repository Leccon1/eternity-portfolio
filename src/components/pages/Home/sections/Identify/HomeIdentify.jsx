import InsightSection from '@common/InsightSection/InsightSection'

import styles from './homeIdentify.module.scss'
const HomeIdentify = () => {
  return (
    <section className={styles.identify}>
      <InsightSection
        title="Why am I working slowly?"
        description="Because every decision, from file structure to micro animations— passes through a filter of expediency. I believe that design is not a separate stage, but a continuation of the project architecture."
        buttonText="View the history of my formation..."
      />
    </section>
  )
}

export default HomeIdentify
