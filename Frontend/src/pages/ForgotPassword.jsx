import React from 'react';
import { ForgotPasswordComponent } from '../components/ForgotPasswordComponent';

export const ForgotPassword = ({email, setEmail, message, setMessage}) => {
  return (
    <>
     <ForgotPasswordComponent email={email} setEmail={setEmail} message={message} setMessage={setMessage}/> 
    </>
  )
}