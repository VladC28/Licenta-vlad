import React from 'react'
import Logo from '../logo/Logo.jpg'
import {GiShoppingCart} from 'react-icons/gi'
import {RiAccountPinCircleLine} from 'react-icons/ri'

export default function HeaderLogo() {
  return (
    <div style={{display:'flex', alignItem:'center', justifyContent:'baseline'}}>
    <img src= {Logo} alt='logo' style = {{
        width:'100px',
        height: '100px'
    }}></img>
      <p style = {{
       fontFamily:'Dancing Script, cursive',
       marginLeft: '40%',
       fontSize:'25px',
       
     

      }}>#BeCreative</p>
      <div style = {{
      display: 'flex',
      fontSize:'20px',
      marginLeft:'20%',
      marginTop: '30px',
      justifyContent:'baseline'


      }}><GiShoppingCart />Cosul Meu</div>

      <div style = {{
      display:'flex',
      fontSize: '20px',
      marginLeft: '5%',
      marginTop: '30px',
      justifyContent:'baseline'


      }}><RiAccountPinCircleLine />Contul Meu</div>


    </div>
  )
}


