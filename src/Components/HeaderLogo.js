import React, { useState} from 'react'
import Logo from '../logo/Logo.jpg'
import {GiShoppingCart} from 'react-icons/gi'
import {RiAccountPinCircleLine} from 'react-icons/ri'
import ModalCos from './ModalCos'
//import ShoppingCart from './ShoppingCart'



export default function HeaderLogo({cosulCumparaturi, deleteProdus}) {
  const [openModal, setOpenModal] = useState(false);
  const activateModal = () => {
    setOpenModal(!openModal)
  }
  return (
    <div style={{display:'flex', alignItem:'center', justifyContent:'baseline'}}>
      <a href="">
    <img src= {Logo} alt='logo' style = {{
        width:'100px',
        height: '100px'
    }}></img></a>
      <p style = {{
       marginLeft: '40%',
       fontSize:'25px',
      }}>#BeCreative</p>
      <div style = {{
      display: 'flex',
      fontSize:'20px',
      marginLeft:'20%',
      marginTop: '30px',
      justifyContent:'baseline'


      }}><button style={{
        
  
    }} type='button' onClick={activateModal}><GiShoppingCart />Cosul meu({cosulCumparaturi?.length})</button></div>

      <div style = {{
      display:'flex',
      fontSize: '20px',
      marginLeft: '5%',
      marginTop: '30px',
      justifyContent:'baseline'


      }}><button type='button'><RiAccountPinCircleLine />Contul Meu</button></div>

      {openModal  ? <ModalCos closModal={activateModal} cosulCumparaturi={cosulCumparaturi} deleteProdus={(index) => deleteProdus(index)}/> : null}
    </div>
  )
}


