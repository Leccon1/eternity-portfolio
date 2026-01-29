import styles from './heading.module.scss'

const Heading = ({ level = 'h1', size = 'xxxl', className = '', ref, children }) => {
  const Tag = level

  return (
    <Tag ref={ref} className={`${styles.heading} ${styles[`heading--${size}`]} ${className}`}>
      {children}
    </Tag>
  )
}

export default Heading
