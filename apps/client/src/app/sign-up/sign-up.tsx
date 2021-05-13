import React from 'react';
import { useAuth } from '../auth-content/auth-content';
import './sign-up.module.scss';

/* eslint-disable-next-line */
export interface SignUpProps {}

export function SignUp(props: SignUpProps) {
  const { signUp } = useAuth();

  return <div></div>;
}

export default SignUp;
