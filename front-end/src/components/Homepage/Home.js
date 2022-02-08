import React from 'react'
import Contact from './Contact/Contact'
import Feature from './Feature/Feature'
import Footer from './Footer/Footer'
import Header from './Header'
import Slider from './Slider/Slider'
import Staff from './Staff/Staff'

const Home = () => {
  return (
    <>
      <Header />
      <Slider />
      <Feature />
      <Staff />
      <Contact />
      <Footer />
    </>
  )
}

export default Home
