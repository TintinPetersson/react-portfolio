import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'

const Card2 = ({ name, desc, picture }) => {
  return (
    <>
      <div className="profile-card2">
        <div className="card-header2">
          <div className="pic2">
            <img src={picture} alt=""></img>
          </div>
          <div className="name2">{name}</div>
          <div className="desc2">{desc}</div>
          <div className="sm2">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/jonathan-kullman-107362200/"
            >
              <FontAwesomeIcon
                className="linkedin"
                icon={faLinkedin}
                color="#4d4d4e"
              />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/JonathanKullman"
            >
              <FontAwesomeIcon
                className="github"
                icon={faGithub}
                color="#4d4d4e"
              />
            </a>
          </div>
          <Link to="/aboutJonathan" className="flat-button">
            ABOUT ME
          </Link>
        </div>
      </div>
    </>
  )
}

export default Card2
