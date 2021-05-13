import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useAuth } from '../auth-content/auth-content';
import './sign-up.module.scss';

/* eslint-disable-next-line */
export interface SignUpProps {}

export function SignUp(props: SignUpProps) {
  const [currentUser, setCurrentUser] = useState(null);

  const { signUp } = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      signUp(email.value, password.value);
      setCurrentUser(true);
    } catch (error) {
      console.log(error);
    }
  };

  if (currentUser) return <Redirect to='/home' />;

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email
        <input type='email' name='email' placeholder='Email Address' />
      </label>
      <label>
        Password
        <input type='password' name='password' placeholder='Password' />
      </label>
      <button type='submit'>Sign Up</button>
    </form>
  );
}

export default SignUp;
