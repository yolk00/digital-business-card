import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="container content-container bottom-border-radius">
      <div className="socials-container">
        <a href="#" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} size="xl" />
        </a>
        <a href="#" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="xl" />
        </a>
        <a href="#" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faTwitter} size="xl" />
        </a>
      </div>
    </footer>
  );
}
