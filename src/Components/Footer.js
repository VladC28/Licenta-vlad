import React from 'react';

function Footer() {
  return (
    <div className='Footer' style={footerStyle}>
      <p style={textStyle}>
        &copy; 2023 Badea Vlad Cristian
      </p>
    </div>
  );
}

// Define the styles as objects
const footerStyle = {
  textAlign: 'center',
  backgroundColor: '#333',
  color: 'white',
  padding: '20px',
};

const textStyle = {
  fontSize: '14px',
  margin: '0',
};

export default Footer;
