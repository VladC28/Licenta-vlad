import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import Footer from './Footer';
import Headerbuttons from './Headerbuttons';
import HeaderLogo from './HeaderLogo';

function CheckoutPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigateTo = useNavigate();

  useEffect(() => {
    if (isSubmitted) {
      setTimeout(() => {
        navigateTo('/products');
      }, 5000);
    }
  }, [isSubmitted, navigateTo]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div style={{}}>
      <Headerbuttons />
      <HeaderLogo />
      {isSubmitted ? (
        <div style={messageContainerStyle}>
          <p style={messageStyle}>Ai finalizat comanda...</p>
        </div>
      ) : (
             <form style={formStyle} onSubmit={handleSubmit}>
        <label>
          Nume si Prenume:
          <input type="text" name="fullName" required style={inputStyle} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" required style={inputStyle} />
        </label>
        <br />
        <label>
          Numar Card:
          <input type="text" name="cardNumber" required style={inputStyle} />
        </label>
        <br />
        <label>
          Data Expirare:
          <input type="text" name="expiryDate" required style={inputStyle} />
        </label>
        <br />
        <label>
          CVV:
          <input type="text" name="cvv" required style={inputStyle} />
        </label>
        <br />
        <label>
          Adresa Facturare:
          <input type="text" name="billingAddress" required style={inputStyle} />
        </label>
        <br />
        <label>
          Oras:
          <input type="text" name="city" required style={inputStyle} />
        </label>
        <br />
        <label>
          Cod Postal:
          <input type="text" name="postalCode" required style={inputStyle} />
        </label>
        <br />
        <button type="submit" style={submitButtonStyle}>Cumpara</button>
      </form>
      )}
      <Footer />
    </div>
  );
}


const formStyle = {
  margin: '20px auto',
  width: '400px',
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '5px',
};

const inputStyle = {
  marginBottom: '10px',
  padding: '5px',
  width: '100%',
};

const submitButtonStyle = {
  padding: '10px 20px',
  backgroundColor: '#4CAF50',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

const messageContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: 'calc(100vh - 100px)', 
};

const messageStyle = {
  fontSize: '24px',
  color: 'lightgrey',
};

export default CheckoutPage;
