import React from 'react';
import { useHistory } from 'react-router-dom';

import './get-started.module.scss';

/* eslint-disable-next-line */
export interface GetStartedProps {}

export function GetStarted(props: GetStartedProps) {
  return (
    // const history = useHistory();
    // const redirect = () => {
    //   history.push('/');
    // };

    <div>
      <h1>Welcome to getStarted!</h1>
    </div>
  );
}

export default GetStarted;
