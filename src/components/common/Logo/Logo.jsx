import LogoImg from '@favicons/eternity.png'

const Logo = ({ className = '' }) => {
  return (
    <a href="/home" className={className}>
      <img src={LogoImg} alt="logo image" style={{ width: '32px', height: 'auto' }} />
    </a>
  )
}

export default Logo
