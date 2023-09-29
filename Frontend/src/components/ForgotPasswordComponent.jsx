import React from 'react';
import Axios from 'axios';
import '../styles/ForgotPasswordComponent.css'

export const ForgotPasswordComponent = ({email, setEmail, message, setMessage}) => {
  
  const handleResetPassword = () => {
    Axios.post('http://localhost:3000/auth/forgot-password', { email })
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch((error) => {
        // https://axios-http.com/docs/handling_errors
        console.error(error);
        setMessage('Password reset request failed');
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
        console.log(error.config);
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