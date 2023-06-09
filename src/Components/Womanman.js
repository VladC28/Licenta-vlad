import React from 'react'
import '../css/images.css'
import image4 from '../images/image4.jpg'
import image5 from '../images/image5.jpg'
import {Link} from 'react-router-dom'

function Womanman() {
  return (
    <div className="main" style ={{width: '100%', textAlign: 'center'}}>
      <img style={{}} src={image4} alt='woman'></img>
      <div style={{width:'100%', height:'25px', textAlign:'center', backgroundColor:'black'}}>
      <button style={{}}><Link to="/products">Femei</Link></button>
      </div>
      <img style={{}} src={image5} alt='man'></img>
      <div style={{width:'100%', height:'25px', textAlign:'center', backgroundColor:'black'}}>
      <button style={{}}><Link to="/products">Barbati</Link></button>
      </div>
    </div>
  )
}

export default Womanman