import React, { useState } from 'react';

import loginImg from '../../../src/login.svg';

import './styles.css'

const Login = props => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');

  const loginUser = (event) => {
    event.preventDefault();
    console.log(enteredEmail, enteredPassword);
  }

  const changeEmailHandle = event => {
    setEnteredEmail(event.target.value);
  }

  const changePasswordHandle = event => {
    setEnteredPassword(event.target.value);
  }

  return (
    <div className="base-container">
        <div className="header">Login</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} /> 
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" placeholder="email" value={enteredEmail} onChange={changeEmailHandle} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" value={enteredPassword} onChange={changePasswordHandle} />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="submit" className="btn" onClick={loginUser}>
            Login
          </button>
          <br />
          <br />
          <button type="button" className="btn">
            Sign Up
          </button>
        </div>
      </div>
  );
}

export default Login;