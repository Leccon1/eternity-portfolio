import styles from './techStack.module.scss'

const TechStack = ({ items = [], className = '' }) => {
  return (
    <ul className={`${styles.techStack} ${className}`}>
      {items.map((item) => (
        <li key={item} className={styles.techStackItem}>
          {item}
        </li>
      ))}
    </ul>
  )
}

export default TechStack
