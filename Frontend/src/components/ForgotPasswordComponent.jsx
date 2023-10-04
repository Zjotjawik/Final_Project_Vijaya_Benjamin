import { useState } from 'react';
import Axios from 'axios';
import '../styles/ForgotPasswordComponent.css'
import LoadingSpinner from './LoadingSpinner';

export const ForgotPasswordComponent = ({email, setEmail, message, setMessage}) => {
  const [isLoading, setIsLoading] = useState(false);


  const handleResetPassword = async () => {
    try {
      setIsLoading(true);

      const response = await Axios.post('https://final-project-1lrc.onrender.com/auth/forgot-password', { email });
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
      <h2 className='forgot-title'>Forgot Password</h2>
      <p className='resetmsg'>Enter your email address to reset your password.</p>
      <input
      className='email-forgot'
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
        <button classname='resetpass ' onClick={handleResetPassword}> <br />Reset my Password</button>
      )}
      <p>{message}</p>
    </div>
  );
};