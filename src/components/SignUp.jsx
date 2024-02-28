import React from 'react';

const Signup = () => {
  return (
    <div className="form-container">
      <h2>Sign Up</h2>
      <form>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <input type="email" placeholder="Email Address" />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;