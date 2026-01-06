import styles from './techStack.module.scss'

// Изменяем пропс text на список элементов (по умолчанию пустой массив)
const TechStack = ({ items = [] }) => {
  return (
    <>
      {items.map((item, index) => (
        <p key={index} className={styles.techStack}>
          {item}
        </p>
      ))}
    </>
  )
}

export default TechStack
