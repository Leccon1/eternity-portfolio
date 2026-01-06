import styles from './techStack.module.scss'

const TechStack = ({ items = [], className = '' }) => {
  return (
    <>
      {items.map((item, index) => (
        <p key={index} className={`${styles.techStack} ${className}`}>
          {item}
        </p>
      ))}
    </>
  )
}

export default TechStack
