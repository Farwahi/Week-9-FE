import React from 'react';
import Login from'./Login';
import Signup from './SignUp';

const LogOrSign = () => {
  // Add logic here to switch between login and signup forms
  // For example, show Login by default and provide a link/button to switch to Signup
  return (
    <div className="log-or-sign-container">
      <Login />
      {/* Add a link/button to switch to Signup */}
      {/* You can also render Signup conditionally based on user interaction */}
      <Signup />
    </div>
  );
};

export default LogOrSign;