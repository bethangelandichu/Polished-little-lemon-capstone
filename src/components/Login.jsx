

import React, { useState } from 'react';
import './Login.scss';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignupEmailChange = (e) => {
    setSignupEmail(e.target.value);
  };

  const handleSignupPasswordChange = (e) => {
    setSignupPassword(e.target.value);
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleLogin = () => {
  
  };

  const handleSignup = () => {
   
  };

  return (
    <div className="login-container">
      <h1>One of us 😃
        Login to continue;

      </h1>
      <form className="login-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
      <div className="form-separator"></div> 
      <div className="signup-heading">
      <h2>New here?
          Sign Up
      </h2>
      </div>
      <form className="signup-form">
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={handleFirstNameChange}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={handleLastNameChange}
        />
        <input
          type="email"
          placeholder="Email"
          value={signupEmail}
          onChange={handleSignupEmailChange}
        />
        <input
          type="password"
          placeholder="Password"
          value={signupPassword}
          onChange={handleSignupPasswordChange}
        />
        <input
          type="tel"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
        />
        <button type="button" onClick={handleSignup}>
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Login;
