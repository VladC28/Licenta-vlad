import React from 'react'
import '../css/images.css'
import image4 from '../images/image4.jpg'
import image5 from '../images/image5.jpg'

function Womanman() {
  return (
    <div className="main" style ={{width: '100%', textAlign: 'center'}}>
      <img style={{}} src={image4} alt='woman'></img>
      <a href="" className='woman' style={{display: 'block'}}>
        <h4>
          Femei
        </h4>
      </a>
      <img style={{}} src={image5} alt='man'></img>
      <a href="" className='man' style={{display: 'block'}}>
        <h4>
          Barbati
        </h4>
      </a>
    </div>
  )
}

export default Womanman