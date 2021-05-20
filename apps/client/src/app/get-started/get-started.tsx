import React, { Component } from 'react'
import Lottie from 'react-lottie'
import animationData from '../../assets/11709-soccer/data.json';
import { useHistory } from 'react-router-dom';

import './get-started.module.scss';

/* eslint-disable-next-line */
export interface GetStartedProps {}

export function GetStarted(props: GetStartedProps) {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    },

  return (
  //   // const history = useHistory();
  //   // const redirect = () => {
  //   //   history.push('/');
  //   // };

  //   <div>
  //   <h1>Lottie</h1>
  //   <p>Base animation free from external manipulation</p>
  //   <Lottie options={defaultOptions}
  //         height={400}
  //         width={400}
  //   />
  // </div>
  );
}

export default GetStarted;
