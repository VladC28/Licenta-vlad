import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import image1 from '../images/image1.jpeg'
import image2 from '../images/image2.jpg'
import image3 from '../images/image3.jpeg'

const fadeImages = [
  {
    url: image1 ,
    caption: 'First Slide'
  },
  {
    url: image2,
    caption: 'Second Slide'
  },
  {
    url: image3,
    caption: 'Third Slide'
  },
];

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Fade>
        {fadeImages.map((fadeImage, index) => (
          <div key={index}>
            <img style={{ width: '90%' }} src={fadeImage.url} alt='images' />
            <h2>{fadeImage.caption}</h2>
          </div>
        ))}
      </Fade>
    </div>
  )
}

export default Slideshow