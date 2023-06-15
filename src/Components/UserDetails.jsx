import React from 'react';
import { VscAccount } from 'react-icons/vsc';

const UserDetails = () => {
  return (
    <div className="user-details">
      <div className="user-details-header">
        <VscAccount className="user-details-icon" />
      </div>
      <div className="user-details-content">
        <p><strong>Name:</strong>Badea Vlad Cristian</p>
        <p><strong>Email:</strong>badea.vlad13@gmail.com</p>
        <p><strong>Phone Number:</strong>0784914144</p>
        <p><strong>Address:</strong>Pitesti</p>
      </div>
    </div>
  );
};

export default UserDetails;
