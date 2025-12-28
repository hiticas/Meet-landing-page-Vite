import imageMobile from '../../assets/mobile/image-footer.jpg'
import imageTablet from "../../assets/tablet/image-footer.jpg";
import imageDesktop from "../../assets/desktop/image-footer.jpg";

import Typography from '../../ui-components/Typography/Typography'
import Button from '../../ui-components/Button/Button'
import './Footer.scss'

function Footer() {
  return (
    <div className="footer">
      <img className="image-mobile" src={imageMobile} alt="Group of people in a video meeting on mobile" />
      <img className="image-tablet" src={imageTablet} alt="Group of people in a video meeting on tablet" />
      <img className="image-desktop" src={imageDesktop} alt="Group of people in a video meeting on desktop" />
      <div className="overlay">
        <Typography className="title" as="h2" type="preset-2">Experience more together</Typography>
        <Typography className="description" type="preset-4">Stay connected with reliable HD meetings and unlimited one-on-one and group video sessions.</Typography>
        <Button variant="purple" aria-label="Download Meet version 1.3">
          <Typography as="span" type="preset-5" color="white">Download</Typography>
          <Typography as="span" type="preset-5" color="purple">v1.3</Typography>
        </Button>
      </div>
    </div>
  )
}

export default Footer