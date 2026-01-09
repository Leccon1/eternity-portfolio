import styles from './heading.module.scss'

const Heading = ({ level = 'h1', size = 'xxxl', className = '', children }) => {
  const Tag = level

  return (
    <Tag className={`${styles.heading} ${styles[`heading--${size}`]} ${className}`}>{children}</Tag>
  )
}

export default Heading
