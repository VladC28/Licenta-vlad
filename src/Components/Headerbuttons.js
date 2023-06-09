import React from 'react';
import { Link } from 'react-router-dom';

function Headerbuttons() {
  return (
    <div style ={{textAlign:'right'}}>
     <button style = {{
    maraginLeft:'10px',
    marginRight:'10px',
    fontSize: '17px',
    boxShadow: '0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19)',
    backgroundColor: 'gray',
    color:'black',
    cursor:'pointer',
    border: '1px',
    borderRadius: '10px'


 }}><Link to="/">Home</Link></button>
     <button style ={{
         maraginLeft:'10px',
         marginRight:'10px',
         fontSize: '17px',
         boxShadow: '0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19)',
         backgroundColor: 'gray',
         color:'black',
         cursor:'pointer',
         border: '1px',
         borderRadius: '10px'


     }}><Link to="/products">Femei</Link></button>
     <button style ={{
         maraginLeft:'10px',
         marginRight:'10px',
         fontSize: '17px',
         boxShadow: '0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19)',
         backgroundColor: 'gray',
         color:'black',
         cursor:'pointer',
         border: '1px',
         borderRadius: '10px'

     }}><Link to="/products">Barbati</Link></button>
    
    </div>
  )
}

export default Headerbuttons