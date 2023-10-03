import { useState } from 'react';
import Axios from 'axios';
import '../styles/ForgotPasswordComponent.css'
import LoadingSpinner from './LoadingSpinner';

export const ForgotPasswordComponent = ({email, setEmail, message, setMessage}) => {
  const [isLoading, setIsLoading] = useState(false);


  const handleResetPassword = async () => {
    try {
      setIsLoading(true);

      const response = await Axios.post('http://localhost:3000/auth/forgot-password', { email });
      setMessage(response.data.message);
    } catch (error) {
      console.error(error);
      setMessage('Password reset request failed');
    } finally {
      setIsLoading(false);
    }
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
      {isLoading ? (
        <div className="loading-spinner">
          <LoadingSpinner />
        </div>
      ) : (
        <button onClick={handleResetPassword}>Reset Password</button>
      )}
      <p>{message}</p>
    </div>
  );
};