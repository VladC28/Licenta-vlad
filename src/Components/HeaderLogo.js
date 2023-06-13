import React, { useState} from 'react'
import Logo from '../logo/Logo.jpg'
import {GiShoppingCart} from 'react-icons/gi'
import {RiAccountPinCircleLine} from 'react-icons/ri'
import ModalCos from './ModalCos'
import { Link } from 'react-router-dom'
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
      marginLeft:'38%',
      marginTop: '30px',
      justifyContent:'baseline'
      }}><button style={{ fontSize: '40px', width: 'fit-content', height: 'fit-content', border: 'none', background: 'none'
    }} type='button' onClick={activateModal}><GiShoppingCart />{cosulCumparaturi?.length}</button></div>

      <div style = {{
      display:'flex',
      fontSize: '20px',
      marginTop: '30px',
      justifyContent:'baseline'
      }}><button  style={{fontSize: '40px', width: 'fit-content', height: 'fit-content', border: 'none', background: 'none'}}type='button'><Link to='/login'><RiAccountPinCircleLine /></Link></button></div>

      {openModal  ? <ModalCos closModal={activateModal} cosulCumparaturi={cosulCumparaturi} deleteProdus={(index) => deleteProdus(index)}/> : null}
    </div>
  )
}


