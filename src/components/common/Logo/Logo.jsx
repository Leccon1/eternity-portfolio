import LogoImg from '@favicons/eternity.png'

const Logo = () => {
  return (
    <a href="/home">
      <img src={LogoImg} alt="logo image" style={{ width: '32px', height: 'auto' }} />
    </a>
  )
}

export default Logo
