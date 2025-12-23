import LogoImg from '@favicons/eternity.png'

const Logo = ({ className = '' }) => {
  return (
    <a href="/home" className={className}>
      <img src={LogoImg} alt="logo image" />
    </a>
  )
}

export default Logo
