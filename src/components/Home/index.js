import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import './index.scss'
import $ from 'jquery'

const Home = () => {
  var req = new XMLHttpRequest()
  var url = 'https://api.nasa.gov/planetary/apod?api_key='
  var api_key = 'RvvwtRuAGj9e4fF9a7bCnOth3JOJFF7MqW2eHJ0x'

  req.open('GET', url + api_key)
  req.send()

  req.addEventListener('load', async function () {
    if (req.status == 200 && req.readyState == 4) {
      var response = await JSON.parse(req.responseText)
      document.getElementById('title').textContent = await response.title
      document.getElementById('date').textContent = await response.date
      document.querySelector('.nasa-container__image').style.backgroundImage =
        'url(' + (await response.hdurl) + ')'
      // document.getElementById('explanation').textContent = response.explanation
    }
  })

  $.getJSON(
    'http://api.open-notify.org/astros.json?callback=?',
    function (data) {
      var number = data['number']
      $('#spacepeeps').html(number)

      // data['people'].forEach(function (d) {
      //   $('#astronames').append('<li>' + d['name'] + '</li>')
      // })
    }
  )

  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = [
    'T',
    'i',
    'n',
    't',
    'i',
    'n',
    ' ',
    '&',
    ' ',
    'J',
    'o',
    'n',
    'a',
    't',
    'h',
    'a',
    'n',
    '.',
  ]
  const jobArray = ['D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', 's', '!']

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="peopleInSpace">
          <h1 id="spacepeeps"></h1>
          <h3>
            Astronauts in <span>space</span>
          </h3>
        </div>
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i</span>
            <span className={`${letterClass} _13`}>,</span>
            <span className={`${letterClass} _14`}></span>
            <span className={`${letterClass} _15`}>w</span>
            <span className={`${letterClass} _16`}>e</span>
            <span className={`${letterClass} _17`}> </span>
            <span className={`${letterClass} _18`}>a</span>
            <span className={`${letterClass} _19`}>r</span>
            <span className={`${letterClass} _20`}>e</span>
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>
            Fullstack devs <span>|</span> Space enthusiasts
            <span>|</span> Newly graduated
          </h2>
          <Link to="/contact" className="flat-button">
            CONTACT US
          </Link>
        </div>
        <div class="nasa-container">
          <div class="nasa-container__image">
            <div class="container__info container__author">
              Photo by NASA <br />
              <a
                id="title"
                class="link"
                href="https://www.nasa.gov/"
                target="_blank"
              ></a>
            </div>
            <div class="container__info container__location">
              <span id="date"></span>
            </div>
          </div>
        </div>
        {/* <div className="info-map">
          Tintin & Jonathan,
          <br />
          Sweden,
          <br />
          Blablagatan 23, 43431
          <br />
          Varberg
          <span>tpsson95@gmail.com</span>
        </div> */}
        {/* <div className="map-wrap">
          <MapContainer
            center={[57.09553408380541, 12.253090110922171]}
            zoom={13}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></TileLayer>
            <Marker position={[57.09553408380541, 12.253090110922171]}>
              <Popup>Spin n' Drink lives here!</Popup>
            </Marker>
          </MapContainer>
        </div> */}
      </div>
      <Loader type="ball-pulse" />
    </>
  )
}

export default Home
