import React from 'react';
import { Link } from 'react-router-dom';

function Headerbuttons() {
return (
  <div style={{ textAlign: 'right' }}>
    <button style={{
      margin: '10px',
      fontSize: '17px',
      boxShadow: '0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19)',
      background: 'linear-gradient(to right, #90caf9, #64b5f6)',
      color: 'white',
      textDecoration: 'none',
      cursor: 'pointer',
      border: 'none',
      borderRadius: '10px',
      padding: '10px 20px',
      transition: '0.3s',
    }}>
      <Link to="/">Home</Link>
    </button>
    <button style={{
      marginLeft: '10px',
      marginRight: '10px',
      fontSize: '17px',
      boxShadow: '0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19)',
      background: 'linear-gradient(to right, #90caf9, #64b5f6)',
      color: 'white',
      textDecoration: 'none',
      cursor: 'pointer',
      border: 'none',
      borderRadius: '10px',
      padding: '10px 20px',
      transition: '0.3s',
    }}>
      <Link to="/products">Femei</Link>
    </button>
    <button style={{
      marginLeft: '10px',
      marginRight: '10px',
      fontSize: '17px',
      boxShadow: '0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19)',
      background: 'linear-gradient(to right, #90caf9, #64b5f6)',
      color: 'white',
      textDecoration: 'none',
      cursor: 'pointer',
      border: 'none',
      borderRadius: '10px',
      padding: '10px 20px',
      transition: '0.3s',
    }}>
      <Link to="/products">Barbati</Link>
    </button>
  </div>
);



}

export default Headerbuttons