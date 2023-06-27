import React from 'react';

function ComponentRenderCardMan({ haineBarbat, callBackAddCos }) {
  const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
  return (
    <div style={isDesktop ? containerStyleDesktop : containerStyleMobile}>
      {
        haineBarbat?.map((unElement, index) => {
          return (
            <div style={cardStyle} key={index}>
              <div style={imageContainerStyle}>
                <img style={imageStyle} src={`${unElement?.picture}`} alt={unElement?.picture} />
              </div>
              <div style={infoContainerStyle}>
                <div style={titleStyle}>{unElement?.name}</div>
                <div style={descriptionStyle}>{unElement?.description}</div>
                <div style={priceStyle}>{unElement?.price}</div>
              </div>
              <button style={buttonStyle} onClick={() => callBackAddCos(index)}>Adauga in cos</button>
            </div>
          )
        })
      }
    </div>
  )
}

// Define the styles as objects
const containerStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '20px',
  width: '100%',
  maxWidth: '800px',
  margin: 'auto',
  padding: '20px',
};

const cardStyle = {
  margin: '10px',
  borderRadius: '5px',
  border: '1px solid',
  backgroundColor: '#F1F1F1',
  display: 'flex',
  flexDirection: 'column',
};

const imageContainerStyle = {
  flex: '1',
};

const imageStyle = {
  width: '100%',
  height: '200px',
  objectFit: 'cover',
};

const infoContainerStyle = {
  padding: '10px',
  display: 'flex',
  flexDirection: 'column',
  flexGrow: '1',
};

const titleStyle = {
  fontSize: '20px',
  fontWeight: 'bold',
  marginTop: '10px',
};

const descriptionStyle = {
  fontSize: '16px',
  marginBottom: '10px',
};

const priceStyle = {
  fontSize: '18px',
  marginTop: 'auto',
};

const buttonStyle = {
  cursor: 'pointer',
  backgroundColor: '#4CAF50',
  border: 'none',
  color: 'white',
  padding: '10px 20px 15px',
  textAlign: 'center',
  textDecoration: 'none',
  display: 'block',
  fontSize: '16px',
  margin: '10px auto 10px',
};
const containerStyleMobile = {
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '20px',
  width: '100%',
  maxWidth: '800px',
  margin: 'auto',
  padding: '20px',
};

// Styles for desktop view
const containerStyleDesktop = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gap: '20px',
  width: '100%',
  maxWidth: '800px',
  margin: 'auto',
  padding: '20px',
};

export default ComponentRenderCardMan;
