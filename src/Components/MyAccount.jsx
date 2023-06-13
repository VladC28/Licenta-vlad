import React, { useState } from 'react';
import CardDetails from './CardDetails';
import Headerbuttons from './Headerbuttons';
import LastOrders from './LastOrders';
import Settings from './Settings';
import UserDetails from './UserDetails';

const MyAccount = () => {
  const [activeTab, setActiveTab] = useState('userDetails');

  const renderContent = () => {
    switch (activeTab) {
      case 'userDetails':
        return <UserDetails />;
      case 'lastOrders':
        return <LastOrders />;
      case 'settings':
        return <Settings />;
      case 'defaultCard':
        return <CardDetails />;
      default:
        return null;
    }
  };

  return (
    <div>
        <Headerbuttons />
    <div style={{ textAlign: 'center' }}>
      <h2>MyAccount</h2>
      <div style={{ display: 'grid', gridTemplateColumns: '10% 1fr', columnGap: '2px' }}>
        <div style={{ backgroundColor: 'lightgrey', display: 'flex', flexDirection: 'column', gap: '10px'}}>
            <div style={{ margin: 'auto'}}>
                <button style={{margin: '4px', padding: '8px', width: '100px', borderRadius: '4px'}} onClick={() => setActiveTab('userDetails')}>User Details</button>
                <button style={{margin: '4px', padding: '8px', width: '100px', borderRadius: '4px'}} onClick={() => setActiveTab('lastOrders')}>Last Orders</button>
                <button style={{margin: '4px', padding: '8px', width: '100px', borderRadius: '4px'}} onClick={() => setActiveTab('settings')}>Settings</button>
                <button style={{margin: '4px', padding: '8px', width: '100px', borderRadius: '4px'}} onClick={() => setActiveTab('defaultCard')}>Default Card</button>
            </div>
        </div>
        <div style={{ backgroundColor: 'lightgrey' }}>{renderContent()}</div>
      </div>
    </div>
    </div>
  );
};

export default MyAccount;
