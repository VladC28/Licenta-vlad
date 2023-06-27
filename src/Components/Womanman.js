import React from 'react';
import '../css/images.css';
import image4 from '../images/image4.jpg';
import image5 from '../images/image5.jpg';
import { Link } from 'react-router-dom';

function Womanman() {
  return (
    <div style={containerStyle}>
      <div className="image-container">
        <img className="image" src={image4} alt="woman" />
        <div className="overlay">
          <Link to="/products" className="overlay-link">Descopera Women's Collection</Link>
        </div>
      </div>
      <div className="image-container">
        <img className="image" src={image5} alt="man" />
        <div className="overlay">
          <Link to="/products" className="overlay-link">Descopera Men's Collection</Link>
        </div>
      </div>
    </div>
  );
}

// Define the styles as objects
const containerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '20px',
  width: '100%',
  textAlign: 'center',
};

export default Womanman;
