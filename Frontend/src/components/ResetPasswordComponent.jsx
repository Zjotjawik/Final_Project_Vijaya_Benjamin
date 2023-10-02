import React, { useState } from 'react';
import Axios from 'axios';
import { useParams } from 'react-router-dom'; 

export const ResetPasswordComponent = () => {
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const { token } = useParams();

  const handleResetPassword = () => {
    Axios.post(`https://cerulean-medovik-370b2c.netlify.app/reset-password/${token}`, { password })
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
