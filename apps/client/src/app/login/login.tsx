import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import './login.module.scss';

/* eslint-disable-next-line */
export interface LoginProps {}

export function Login(props: LoginProps) {
  const [currentUser, setCurrentUser] = useState(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      // ...
    } catch (error) {
      console.log(error);
    }
  };
  if (currentUser) return <Redirect to='/home' />;

  return (
    <form className='form-container' onSubmit={handleSubmit}>
      <label className='email-label'>
        Email
        <input
          className='email-input'
          type='email'
          name='email'
          placeholder='Email Address'
        />
      </label>
      <label className='password-label'>
        Password
        <input
          className='password-input'
          type='password'
          name='password'
          placeholder='Password'
        />
      </label>
      <button className='btn-login' type='submit'>
        Login
      </button>
    </form>
  );
}

export default Login;
