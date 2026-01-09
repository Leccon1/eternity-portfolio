import InsightSection from '@common/InsightSection/InsightSection'
import NavButton from '@common/NavButton/NavButton'

import styles from './identify.module.scss'
const Identify = () => {
  return (
    <InsightSection
      className={styles.identify}
      title="Why am I working slowly?"
      description="Because every decision, from file structure to micro animations— passes through a filter of expediency. I believe that design is not a separate stage, but a continuation of the project architecture."
      action={<NavButton variant="secondary">View the history of my formation...</NavButton>}
    />
  )
}

export default Identify
