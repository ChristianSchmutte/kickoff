import React from 'react';
import { useAuth } from '../auth-content/auth-content';
import styles from './login.module.scss';

/* eslint-disable-next-line */
export interface LoginProps {}

export function Login(props: LoginProps) {
  const { user, loading, logout } = useAuth();
  return (
    <div className={styles.container}>
      <form id='login-form' action=''>
        <label>
          <input type='text' name='email' />
        </label>
        <label>
          <input type='text' name='password' />
        </label>
        <button className={styles.login} type='button'>
          Login
        </button>
        <button className={styles.register} type='button'>
          Register
        </button>
      </form>
    </div>
  );
}

export default Login;
