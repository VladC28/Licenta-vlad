import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import image1 from '../images/image1.jpeg';
import image6 from '../images/image6.jpg';
import image3 from '../images/image3.jpeg';

const fadeImages = [
  {
    url: image1,
    caption: 'Cele mai bune promotii!'
  },
  {
    url: image6,
    caption: 'Articole noi in fiecare saptamana!'
  },
  {
    url: image3,
    caption: 'Nu rata oferta!'
  },
];

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Fade>
        {fadeImages.map((fadeImage, index) => (
          <div style={slideStyle} key={index}>
            <img src={fadeImage.url} alt='images' style={imageStyle} />
            <h2 style={captionStyle}>{fadeImage.caption}</h2>
          </div>
        ))}
      </Fade>
    </div>
  );
};

// Define the styles as objects
const slideStyle = {
  textAlign: 'center',
};

const imageStyle = {
  display: 'block',
  width: '40%',
  margin: 'auto',
  height: '40%',
  borderRadius: '5px',
};

const captionStyle = {
  marginTop: '10px',
};

export default Slideshow;
