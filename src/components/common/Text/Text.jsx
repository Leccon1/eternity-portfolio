import styles from './text.module.scss'

const Text = ({ size = 'base', fontType = 'accent', className = '', children }) => {
  return (
    <p
      className={`${styles.text} ${styles[`text--${fontType}`]} ${styles[`text--${size}`]} ${className}`}
    >
      {children}
    </p>
  )
}

export default Text
