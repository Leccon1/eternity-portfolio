import styles from './hero.module.scss'
const Hero = ({ className, children }) => {
  return <section className={`${styles.hero} ${className}`}>{children}</section>
}

export default Hero
