import React from 'react'
import "../fonts/CaveatBold.ttf"

function Quote() {
  return (
    <div style={{
        paddingLeft:'10%',
        textAlign: 'center',
        borderStyle: 'double',
        width:'70%',
        margin: ' 10px auto',
        height: '400px',
        fontFamily:'Light'}}>
        <h6 style={{fontSize:'50px'}}>"Elegance is when the inside is as beautiful as the outside!"</h6>
        <p style={{fontSize:'30px'}}>~Coco Chanel~</p>
    </div>
  )
}

export default Quote