import React from 'react'
import Footer from './components/footer/Footer'
import Meteo from './components/meteo/Meteo'
import Navbar from './components/navbar/Navbar'

const App = () => {
  return (
    <>
      <Navbar />
      <Meteo />
      <Footer />
    </>
  )
}

export default App