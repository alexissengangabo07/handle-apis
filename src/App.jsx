import React from 'react'
import Footer from './components/footer/Footer'
import Meteo from './components/meteo/Meteo'
import Navbar from './components/navbar/Navbar'
import Films from './components/films/Film'
import Avions from './components/avions/Avions'
import {Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/meteo' element={<Meteo />} />
        <Route path='/films' element={<Films />} />
        <Route path='/avions' element={<Avions />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App