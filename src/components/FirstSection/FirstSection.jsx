import image1 from '../../assets/desktop/image-woman-in-videocall.jpg'
import image2 from "../../assets/desktop/image-women-videochatting.jpg";
import image3 from "../../assets/desktop/image-men-in-meeting.jpg";
import image4 from "../../assets/desktop/image-man-texting.jpg";

import Typography from '../../ui-components/Typography/Typography'
import './FirstSection.scss'

function FirstSection() {
  return (
    <div className="first-section">
      <div className="images">
        <img className="image1" src={image1} alt="image1" />
        <img className="image2" src={image2} alt="image2" />
        <img className="image3" src={image3} alt="image3" />
        <img className="image4" src={image4} alt="image4" />
      </div>
      <Typography className="tagline" type="preset-3" color="cyan-600">Built for modern use</Typography>
      <Typography className="title" as="h2" type="preset-2">Smarter meetings, all in one place</Typography>
      <Typography className="description" type="preset-4" color="slate-600">Send messages, share files, show your screen, and record your meetings — all in one workspace. Control who can join with invite-only team access, data encryption, and data export.</Typography>
    </div>
  )
}

export default FirstSection