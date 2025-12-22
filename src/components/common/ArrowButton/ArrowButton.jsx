import downArrowsIcon from '@icons/down-arrows.svg'

import styles from './arrowButton.module.scss'
const ArrowButton = ({ className, onClick, direction = 'down' }) => {
  return (
    <button
      className={`${styles.arrowButton} ${styles[`arrowButton--${direction}`]} ${className || ''}`}
      type="button"
      onClick={onClick}
    >
      <img src={downArrowsIcon} alt={`${direction} arrow`} />
    </button>
  )
}

export default ArrowButton
