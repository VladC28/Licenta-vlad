import React from 'react'
import woman from '../images/woman.jpg'
import men from '../images/men.jpg'

function Bodyimage() {
  return (
    <div style={{width: "100%", display:"flex"}} className='Container'>
      <img style={{width:"50%"}} src={woman} alt="woman"></img>
      <img style={{width:"50%"}} src={men} alt="men"></img>
    </div>
  )
}

export default Bodyimage