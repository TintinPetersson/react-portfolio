import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'

const Card = ({ name, desc, picture }) => {
  return (
    <>
      <div className="profile-card">
        <div className="card-header">
          <div className="pic">
            <img src={picture} alt=""></img>
          </div>
          <div className="name">{name}</div>
          <div className="desc">{desc}</div>
          <div className="sm">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/tintin-petersson-a152441b6/"
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
              href="https://github.com/TintinPetersson"
            >
              <FontAwesomeIcon
                className="github"
                icon={faGithub}
                color="#4d4d4e"
              />
            </a>
          </div>
          <Link to="/aboutTintin" className="flat-button">
            ABOUT ME
          </Link>
        </div>
      </div>
    </>
  )
}

export default Card
