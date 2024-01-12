import yolkPhoto from "../images/how01.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

export default function Info() {
  return (
    <div className="container info-container">
      <div className="info-img-wrapper">
        <img src={yolkPhoto} alt="yolk00 profile picture" />
      </div>
      <h1>yolk00</h1>
      <h4>Front End Developer</h4>
      <div className="info-contact-btn-container">
        <button className="info-contact-btn">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="info-contact-btn-icon"
          />
          Email
        </button>
        <button className="info-contact-btn">
          <FontAwesomeIcon icon={faLink} className="info-contact-btn-icon" />
          yolk00
        </button>
      </div>
    </div>
  );
}
