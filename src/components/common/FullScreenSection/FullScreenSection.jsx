import styles from './fullScreenSection.module.scss'

const FullScreenSection = ({ children, overflow = 'hidden' }) => {
  return (
    <div className={styles.fullScreenSection} style={{ overflow }}>
      {children}
    </div>
  )
}

export default FullScreenSection
