import { useEffect, useRef, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import emailjs from '@emailjs/browser'
import './index.scss'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Jonte from '../../assets/images/Jonte.png'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const AboutJonathan = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_n3uwg9o',
        'template_u7w8a4u',
        refForm.current,
        'wpfe_4rXD--a_nNBv'
      )
      .then(
        () => {
          toast.success('Email sent!', {
            position: toast.POSITION.BOTTOM_CENTER,
            theme: 'colored',
          })
          document.getElementById('nameProfile').value = ''
          document.getElementById('emailProfile').value = ''
          document.getElementById('subjectProfile').value = ''
          document.getElementById('textareaProfile').value = ''
        },
        () => {
          toast.error('Message failed to send...', {
            position: toast.POSITION.BOTTOM_CENTER,
            theme: 'colored',
          })
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone"></div>
        <div className="profile-card-profile">
          <div className="card-header-profile">
            <h1 className="header-profile">Send me an email!</h1>
            <div className="pic">
              <img src={Jonte} alt=""></img>
            </div>
            <div className="name-jonte">Jonathan</div>
            <div className="desc-profile">Developer</div>
            <p className="text-profile">
              We are very ambitious developers looking for a role in an
              established IT company with the opportunity to work with the
              latest technologies on challenging and diverse projects.
            </p>
            <div className="sm-profile">
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
            <Link to="/about" className="flat-button">
              GO BACK
            </Link>
            <div className="contact-form-profile">
              <form ref={refForm} onSubmit={sendEmail}>
                <ul>
                  <li className="half-profile">
                    <input
                      id="nameProfile"
                      type="text"
                      name="name"
                      placeholder="Name"
                      required
                    ></input>
                  </li>
                  <li className="half-profile">
                    <input
                      id="emailProfile"
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                    ></input>
                  </li>
                  <li>
                    <input
                      id="subjectProfile"
                      placeholder="Subject"
                      type="text"
                      name="subject"
                      required
                    />
                  </li>
                  <li>
                    <textarea
                      id="textareaProfile"
                      placeholder="Message"
                      name="message"
                      required
                    ></textarea>
                  </li>
                  <li>
                    <input
                      type="submit"
                      className="flat-button-profile"
                      value="SEND"
                    ></input>
                  </li>
                </ul>
              </form>
            </div>
          </div>
        </div>
        <ToastContainer autoClose={2000} />
      </div>
    </>
  )
}

export default AboutJonathan
