import React from 'react'
import Bodyimage from './Bodyimage'
import Footer from './Footer'
import Headerbuttons from './Headerbuttons'
import HeaderLogo from './HeaderLogo'
import Quote from './Quote'
import Womanman from './Womanman'

function Home() {
  return (
    <div><Headerbuttons />
    <HeaderLogo />
    <Bodyimage />
    <Womanman />  
    <Quote />
    <Footer />
    </div>
  )
}

export default Home