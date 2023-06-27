import React from 'react';
import '../fonts/CaveatBold.ttf';

function Quote() {
  return (
    <div
      style={{
        paddingLeft: '5%',
        paddingRight: '5%',
        textAlign: 'center',
        borderStyle: 'double',
        width: '80%',
        maxWidth: '700px',
        margin: '10px auto',
        height: 'auto',
        fontFamily: 'Light',
      }}
    >
      <h6 style={{ fontSize: '18px', margin: '20px 0' }}>
        "Elegance is when the inside is as beautiful as the outside!"
      </h6>
      <p style={{ fontSize: '18px', marginBottom: '20px' }}>~Coco Chanel~</p>
    </div>
  );
}

export default Quote;
