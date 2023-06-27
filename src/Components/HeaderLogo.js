import React, { useState } from 'react';
import Logo from '../logo/Logo.jpg';
import { GiShoppingCart } from 'react-icons/gi';
import { RiAccountPinCircleLine } from 'react-icons/ri';
import ModalCos from './ModalCos';
import { Link } from 'react-router-dom';

export function HeaderLogo({ cosulCumparaturi, deleteProdus }) {
  const [openModal, setOpenModal] = useState(false);
  const activateModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <div style={containerStyle}>
      <Link to="/" style={logoLinkStyle}>
        <img src={Logo} alt='logo' style={logoStyle} />
      </Link>
      <p style={titleStyle}>#BeCreative</p>
      <div style={buttonContainerStyle}>
        <button type='button' onClick={activateModal} style={cartButtonStyle}>
          <GiShoppingCart style={iconStyle} />
          <span style={buttonText}>{cosulCumparaturi?.length}</span>
        </button>
        <button type='button' style={accountButtonStyle}>
          <Link to='/login' style={linkStyle}>
            <RiAccountPinCircleLine style={iconStyle} />
          </Link>
        </button>
      </div>
      {openModal && (
        <ModalCos
          closeModal={() => setOpenModal(!openModal)}
          cosulCumparaturi={cosulCumparaturi}
          deleteProdus={(index) => deleteProdus(index)}
        />
      )}
    </div>
  );
}

// Define the styles as objects
const containerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  width: '90%',
  margin: '0 auto',
};

const logoLinkStyle = {
  textDecoration: 'none',
  flexGrow: '0',
  flexShrink: '0',
  display: 'block',
};

const logoStyle = {
  width: '80px',
  height: '80px',
};

const titleStyle = {
  fontSize: '25px',
  marginLeft: '10px',
};

const buttonContainerStyle = {
  display: 'flex',
  alignItems: 'center',
};

const cartButtonStyle = {
  display: 'flex',
  alignItems: 'center',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  marginRight: '20px',
};

const accountButtonStyle = {
  display: 'flex',
  alignItems: 'center',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
};

const linkStyle = {
  textDecoration: 'none',
  color: 'inherit',
};

const iconStyle = {
  fontSize: '24px',
  marginRight: '5px',
};

const buttonText = {
  fontWeight: 'bold',
};

export default HeaderLogo;
