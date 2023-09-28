import React, { useState } from 'react';
import Axios from 'axios';
import '../styles/ForgotPasswordComponent.css'

export const ForgotPasswordComponent = ({email, setEmail, message, setMessage}) => {
  
  const handleResetPassword = () => {
    Axios.post('http://localhost:3000/auth/forgot-password', { email })
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch((error) => {
        console.error(error);
        setMessage('Password reset request failed');
      });
  };

  return (
    <div className='fp-container'>
      <h2>Forgot Password</h2>
      <p>Enter your email address to reset your password.</p>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleResetPassword}>Reset Password</button>
      <p>{message}</p>
    </div>
  );
};