import { useEffect, useRef, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import emailjs from '@emailjs/browser'
import './index.scss'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Contact = () => {
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
        'service_xl2gpvh',
        'template_v3ahatz',
        refForm.current,
        'wpfe_4rXD--a_nNBv'
      )
      .then(
        () => {
          toast.success('Email sent!', {
            position: toast.POSITION.BOTTOM_CENTER,
            theme: 'colored',
          })
          document.getElementById('name').value = ''
          document.getElementById('email').value = ''
          document.getElementById('subject').value = ''
          document.getElementById('textarea').value = ''
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
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'u', 's']}
              idx={15}
            />
          </h1>
          <p className="paragraph">
            We are very ambitious developers looking for a role in an
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                  ></input>
                </li>
                <li className="half">
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  ></input>
                </li>
                <li>
                  <input
                    id="subject"
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    id="textarea"
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input
                    type="submit"
                    className="flat-button"
                    value="SEND"
                  ></input>
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Tintin & Jonathan,
          <br />
          Sweden,
          <br />
          Blablagatan 23, 43431
          <br />
          Varberg
          <span>tpsson95@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer
            center={[57.09553408380541, 12.253090110922171]}
            zoom={13}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></TileLayer>
            <Marker position={[57.09553408380541, 12.253090110922171]}>
              <Popup>Spin n' Drink lives here!</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <ToastContainer autoClose={2000} />
      <Loader type="ball-pulse"></Loader>
    </>
  )
}

export default Contact
