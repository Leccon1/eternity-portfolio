import styles from './container.module.scss'

const Container = ({ children, type = 'default', className = '' }) => {
  const containerClass = `${styles.container} ${styles[`container--${type}`]} ${className}`

  return <div className={containerClass}>{children}</div>
}

export default Container
