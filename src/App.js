import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Layout from './components/Layout'
import AboutTintin from './components/AboutTintin'
import AboutJonathan from './components/AboutJonathan'
import './App.scss'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/aboutTintin" element={<AboutTintin />} />
          <Route path="/aboutJonathan" element={<AboutJonathan />} />
        </Route>
      </Routes>
    </>
  )
}
export default App
