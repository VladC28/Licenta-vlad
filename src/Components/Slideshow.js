import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import image1 from '../images/image1.jpeg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpeg';

const fadeImages = [
  {
    url: image1,
    caption: 'Cele mai bune promotii!'
  },
  {
    url: image2,
    caption: 'Articole noi in fiecare saptamana!'
  },
  {
   
    url: image3,
    caption: 'Nu rata oferta!'
  },
];

const Slideshow = () => {
  return (
    <div  className="slide-container">
      <Fade>
        {fadeImages.map((fadeImage, index) => (
          <div style={{textAlign:'center'}} key={index}>
            <img style={{ display:'flex', width: '80%', margin: 'auto', borderRadius: '5px', height:'550px', marginTop: '10px', border:'1px solid black'}} src={fadeImage.url} alt='images' />
            <h2>{fadeImage.caption}</h2>
          </div>
        ))}
      </Fade>
    </div>
  )
}

export default Slideshow