import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

function ModalCos({ closeModal, cosulCumparaturi, deleteProdus }) {
  const [totalPrice, setTotalPrice] = useState('0');

  const calculateTotal = (cosulCumparaturi) => {
    const total = cosulCumparaturi?.reduce((acc, unElement) => {
      const price = parseInt(unElement?.price?.replace(/\D/g, ''));
      return acc + price;
    }, 0);

    return total;
  };

  useEffect(() => {
    setTotalPrice(calculateTotal(cosulCumparaturi));
  }, [cosulCumparaturi]);

  const navigateTo = useNavigate();

  return (
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
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          width: '90%',
          maxWidth: '500px',
          backgroundColor: '#fff',
          borderRadius: '6px',
          color: '#000',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {cosulCumparaturi?.length ? (
          <>
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
                  marginBottom: '10px',
                }}
                key={index}
              >
                <img
                  style={{
                    width: '100px',
                    height: '100px',
                    marginRight: '10px',
                  }}
                  src={`${unElement?.picture}`}
                  alt={unElement?.picture}
                />
                <div>
                  <div>{unElement?.name}</div>
                  <div>{unElement?.descriere}</div>
                </div>
                <button
                  style={{
                    marginLeft: 'auto',
                    backgroundColor: '#f44336',
                    border: 'none',
                    color: '#fff',
                    padding: '6px 12px',
                    borderRadius: '4px',
                    cursor: 'pointer',
                  }}
                  onClick={(e) => deleteProdus(unElement?.id)}
                >
                  Elimina
                </button>
              </div>
            ))}
            <div
              style={{
                marginTop: '10px',
                fontWeight: 'bold',
                textAlign: 'right',
              }}
            >
              Total: {totalPrice} lei
            </div>
          </>
        ) : (
          <div style={{ textAlign: 'center' }}>
            Inca nu ai selectat nimic
          </div>
        )}
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <button
            style={{
              marginTop: '10px',
              backgroundColor: '#4CAF50',
              border: 'none',
              color: '#fff',
              padding: '10px 20px',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
            type="button"
            disabled={!cosulCumparaturi}
            onClick={() => navigateTo('/checkout')}
          >
            Finalizeaza comanda
          </button>
          <button
            style={{
              marginTop: '10px',
              backgroundColor: '#f44336',
              border: 'none',
              color: '#fff',
              padding: '6px 12px',
              borderRadius: '4px',
              cursor: 'pointer',
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
