import React from 'react';
import { Logout } from '../components/Logout';

export const LogoutPage = ({ setIsLoggedIn }) => {
  return (
    <div>
      <Logout setIsLoggedIn={setIsLoggedIn} />
    </div>
  );
};
