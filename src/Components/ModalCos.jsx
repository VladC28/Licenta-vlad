import React, { useEffect, useState } from 'react';

function ModalCos({ closeModal, cosulCumparaturi, deleteProdus }) {
  const [totalPrice, setTotalPrice] = useState('0')
  
  const calculateTotal = (cosulCumparaturi) => {
  const total = cosulCumparaturi?.reduce((acc, unElement) => {
    const price = parseInt(unElement?.price?.replace(/\D/g, ''));
    return acc + price;
  }, 0);

  return total;
};
  useEffect(() => {
    setTotalPrice(calculateTotal(cosulCumparaturi))
  }, [cosulCumparaturi])
  return (
    <div>
      <div
        style={{
          zIndex: '1000',
          position: 'fixed',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          width: '100%',
          height: '100%',
          background: 'rgba(0, 0, 0, 0.7)',
        }}
      >
        <div
          style={{
            position: 'fixed',
            width: '60%',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#fff',
            borderRadius: '6px',
            color: '#000',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {cosulCumparaturi?.length ? (
            <div>
              {cosulCumparaturi?.map((unElement, index) => (
                <div
                  style={{
                    borderRadius: '5px',
                    border: '1px solid',
                    background: '#c4c4c4',
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'row',
                    padding: '10px',
                  }}
                  key={index}
                >
                  <img
                    style={{ width: '100px', height: '100px', marginRight: '10px' }}
                    src={`${unElement?.picture}`}
                    alt={unElement?.picture}
                  />
                  <div>
                    <div>{unElement?.name}</div>
                    <div>{unElement?.descriere}</div>
                  </div>
                  <button onClick={(e) => deleteProdus(unElement?.id)}>
                    remove this
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div>Inca nu ai selectat nimic</div>
          )}
          {cosulCumparaturi?.length ? (
            <div style={{ marginTop: '10px' }}>
              Prices: {totalPrice} lei
            </div>
          ) : null}
          <button
            style={{
              position: 'absolute',
              top: '5px',
              right: '5px',
            }}
            onClick={() => closeModal()}
          >
            x
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalCos;
