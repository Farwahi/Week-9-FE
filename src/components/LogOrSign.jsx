import React, { useState } from 'react';
import Login from './Login';
import Signup from './SignUp';

const LogOrSign = () => {
  const [showLogin, setShowLogin] = useState(true); 

  const handleSwitchForm = () => {
    setShowLogin(!showLogin); 
  };
  return (
    <div className="log-or-sign-container">
      {showLogin ? <Login /> : <Signup />}
     
      <button onClick={handleSwitchForm}>
        {showLogin ? 'Switch to Sign Up' : 'Switch to Login'}
      </button>
    </div>
  );
};

export default LogOrSign;

