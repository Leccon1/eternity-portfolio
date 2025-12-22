import downArrowsIcon from '@icons/down-arrows.svg'

import styles from './arrowButton.module.scss'
const ArrowButton = ({ className, onClick, direction = 'down' }) => {
  return (
    <button
      className={`${className} ${styles[`arrowButton--${direction}`]}`}
      type="button"
      onClick={onClick}
    >
      <img src={downArrowsIcon} alt={`${direction} arrow`} />
    </button>
  )
}

export default ArrowButton
