import React from 'react'
import Footer from './Footer'
import Headerbuttons from './Headerbuttons'
import HeaderLogo from './HeaderLogo'
import Quote from './Quote'
import Womanman from './Womanman'
import Slideshow from './Slideshow'



function Home() {
  return (
    <div><Headerbuttons />
    <HeaderLogo />
    <Slideshow />
    <Womanman />  
    <Quote />
    <Footer />
    </div>
  )
}

export default Home