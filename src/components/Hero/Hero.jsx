import './Hero.scss'
import logo from '../../assets/logo.svg'
import heroLeft from '../../assets/desktop/image-hero-left.png'
import heroRight from '../../assets/desktop/image-hero-right.png'
import Typography from '../../ui-components/Typography/Typography'
import Button from '../../ui-components/Button/Button'

function Hero() {
  return (
    <div className="hero">
      <img className="logo" src={logo} alt="Meet Logo" />
      <div className="hero-content-mobile">
        <img className="image-hero-left" src={heroLeft} alt="Illustration of video call interface on mobile" />
        <img className="image-hero-right" src={heroRight} alt="Illustration of group chat on mobile" />
      </div>
      <div className="hero-content">
        <img className="image-hero-left" src={heroLeft} alt="Illustration of video call interface" />
        <div className="middle">
          <Typography className="title" as="h1" type="preset-1" color="slate-900">Group Chat for Everyone</Typography>
          <Typography className="subtitle" type="preset-4" color="slate-600">Meet makes it easy to connect with others face-to-face virtually and collaborate across any device.</Typography>
          <div className="buttons">
            <Button variant="blue" aria-label="Download Meet version 1.3">
              <Typography as="span" type="preset-5" color="white">Download</Typography>
              <Typography as="span" type="preset-5" color="cyan-300">v1.3</Typography>
            </Button>
            <Button variant="purple" aria-label="Learn more about Meet">
              <Typography as="span" type="preset-5" color="white">Learn More</Typography>
            </Button>
          </div>
        </div>
        <img className="image-hero-right" src={heroRight} alt="Illustration of group chat" />
      </div>
    </div>
  )
}

export default Hero
