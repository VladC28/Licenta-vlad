import React from 'react';

const CardDetails = () => {
  return (
    <div>
      <h2>Card Details</h2>
    <div
      style={{
        border: '1px solid #ccc',
        borderRadius: '5px',
        padding: '20px',
        backgroundColor: 'white',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        maxWidth: '400px',
        margin: '25px auto',
      }}
    >
      <div>
        <p>Bank Name: Banca Romaniei</p>
        <p>Sort Code: 12-34-56</p>
        <p>Account Number: 12345678</p>
        <p>IBAN: RO12 ABCD 3456 7890 1234 56</p>
        <p>Name: Badea Vlad Cristian</p>
      </div>
    </div>
    </div>
  );
};

export default CardDetails;
