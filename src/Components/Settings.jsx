import React, { useState } from 'react';

const SettingsPage = () => {
  const [emailAccepted, setEmailAccepted] = useState(true);
  const [smsAccepted, setSmsAccepted] = useState(true);
  const [phoneAccepted, setPhoneAccepted] = useState(true);

  const handleEmailChange = () => {
    setEmailAccepted(!emailAccepted);
  };

  const handleSmsChange = () => {
    setSmsAccepted(!smsAccepted);
  };

  const handlePhoneChange = () => {
    setPhoneAccepted(!phoneAccepted);
  };

  const handleUnsubscribe = () => {
    alert('You have been unsubscribed. We are sorry to see you leaving.');
  };

  return (
    <div>
      <h2>Settings</h2>
      <div style={{ display: 'flex', alignItems: 'baseline'}}>
        <h3>Emails</h3>
        <label>
          <input type="checkbox" checked={emailAccepted} onChange={handleEmailChange} />
          <span style={{ fontSize: '7px', color: 'lightgrey' }}>
            {emailAccepted ? 'Accepted' : 'Not Accepted'}
          </span>
        </label>
        <p>User accepted marketing emails</p>
      </div>
      <div style={{ display: 'flex', alignItems: 'baseline'}}>
        <h3>SMS</h3>
        <label>
          <input type="checkbox" checked={smsAccepted} onChange={handleSmsChange} />
          <span style={{ fontSize: '7px', color: 'lightgrey' }}>
            {smsAccepted ? 'Accepted' : 'Not Accepted'}
          </span>
        </label>
        <p>User accepted marketing SMS</p>
      </div>
      <div style={{ display: 'flex', alignItems: 'baseline'}}>
        <h3>Phone Calls</h3>
        <label>
          <input type="checkbox" checked={phoneAccepted} onChange={handlePhoneChange} />
          <span style={{ fontSize: '7px', color: 'lightgrey' }}>
            {phoneAccepted ? 'Accepted' : 'Not Accepted'}
          </span>
        </label>
        <p>User accepted marketing phone calls</p>
      </div>
      <div>
        <button style={{ background: 'none', border: 'none', color: 'blue', textDecoration: 'underline'}}onClick={handleUnsubscribe}>Unsubscribe</button>
      </div>
    </div>
  );
};

export default SettingsPage;
