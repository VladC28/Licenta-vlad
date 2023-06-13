import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigateTo = useNavigate();
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if email and password match the predefined values
    if (email === 'vald@vlad.com' && password === 'HaiAcum') {
      // Successful login
      setErrorMessage('');
      navigateTo('/myAccount')

      // Perform any necessary actions, such as redirecting to a dashboard
    } else {
      // Invalid credentials
      setErrorMessage('Invalid email or password');
    }
  };

  return (
    <div style={{ height: '100vh'}}>
        <div
        style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: 'fit-content',
            border: '1px solid #ccc',
            borderRadius: '5px',
            width: '50%', 
            paddingBottom: '2%',
            margin: '20% auto 5% auto'
        }}
        >
        <h2>Login</h2>
        <form onSubmit={handleSubmit} style={{ width: '70%' }}>
            <div>
            <label htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                required
                style={{
                borderRadius: '5px',
                border: '1px solid #ccc',
                padding: '5px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                width: '100%',
                }}
            />
            </div>
            <div>
            <label htmlFor="password">Password:</label>
            <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                required
                style={{
                borderRadius: '5px',
                border: '1px solid #ccc',
                padding: '5px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                width: '100%',
                }}
            />
            </div>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            <button
            type="submit"
            style={{
                backgroundColor: 'yellow',
                borderRadius: '5px',
                padding: '10px',
                width: '100%',
                marginTop: '10px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            }}
            >
            Login
            </button>
        </form>
        </div>
    </div>
  );
};

export default LoginPage;
