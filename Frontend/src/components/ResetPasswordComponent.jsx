// Frontend/src/components/ResetPasswordComponent.jsx

import React, { useState } from 'react';
import Axios from 'axios';

export const ResetPasswordComponent = ({ token }) => {
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleResetPassword = () => {
    Axios.post(`http://localhost:3000/auth/reset-password/${token}`, { password })
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch((error) => {
        console.error(error);
        setMessage('Password reset failed');
      });
  };

  return (
    <div className='reset-password-container'>
      <h2>Reset Password</h2>
      <p>Enter your new password.</p>
      <input
        type="password"
        placeholder="New Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleResetPassword}>Reset Password</button>
      <p>{message}</p>
    </div>
  );
};
