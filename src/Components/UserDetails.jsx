import React from 'react';
import { VscAccount } from 'react-icons/vsc';

const UserDetails = () => {
  return (
    <div className="user-details">
      <div className="user-details-header">
        <VscAccount className="user-details-icon" />
      </div>
      <div className="user-details-content">
        <p><strong>Name:</strong>John Doe</p>
        <p><strong>Email:</strong>johndoe@example.com</p>
        <p><strong>Phone Number:</strong>123-456-7890</p>
        <p><strong>Address:</strong>123 Street, City, Country</p>
      </div>
    </div>
  );
};

export default UserDetails;
