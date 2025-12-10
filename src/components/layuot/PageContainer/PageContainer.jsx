import styles from './pageContainer.module.scss'

const PageContainer = ({ children, type = 'default', className = '' }) => {
  const pageContainerClass = `${styles.pageContainer} ${styles[`pageContainer--${type}`]} ${className}`
  return <div className={pageContainerClass}>{children}</div>
}

export default PageContainer
