import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import styles from './login.module.scss';

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
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <div className={styles.emailLabelInputWrapper}>
        <label htmlFor='email' className={styles.emailLabel}>
          Email
        </label>
        <input
          className={styles.emailInput}
          type='email'
          name='email'
          placeholder='e.g. john@gmail.com'
        />
      </div>
      <div className={styles.passwordLabelInputWrapper}>
        <label className={styles.passwordLabel}>Password</label>
        <input
          className={styles.passwordInput}
          type='password'
          name='password'
          placeholder='At least 8 symbols...'
        />
      </div>
      <Link className={styles.loginButton} to='/home'>
        Login
      </Link>
      <Link className={styles.signUpButton} to='/signup'>
        Sign Up
      </Link>
    </form>
  );
}

export default Login;
