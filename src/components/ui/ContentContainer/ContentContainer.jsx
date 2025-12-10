import styles from './contentContainer.module.scss'

const ContentContainer = ({ children, type = 'default', className = '' }) => {
  const сontentContainerClass = `${styles.contentContainer} ${styles[`contentContainer--${type}`]} ${className}`

  return <div className={сontentContainerClass}>{children}</div>
}

export default ContentContainer
