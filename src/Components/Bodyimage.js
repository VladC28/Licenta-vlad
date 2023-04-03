import React from 'react'
import woman from '../images/woman.jpg'
import men from '../images/men.jpg'

function Bodyimage() {
  return (
    <div style ={{width: '100%' }}>
        <img style={{width:'45%', border:'1px solid black', marginLeft:'25px' }} src={woman} alt='woman'></img>
        <img style={{width:'45%', border: '1px solid black', marginLeft:'7rem'}} src={men} alt='man'></img>
    </div>
  )
}

export default Bodyimage