import React from 'react';
import styles from './get-started.module.scss';
import Lottie from 'react-lottie';
import animationData from '../../assets/11709-soccer/data.json';
import { Link } from 'react-router-dom';

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
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.topContainer}>
        <div className={styles.title}>KICKOFF</div>
        <Link to={'/home'}>
          <button className={styles.button}>Get Started</button>
        </Link>
      </div>
      <div className={styles.bottomContainer}>
        <Lottie options={defaultOptions} height={300} width={300} />
      </div>
    </div>
  );
}

export default GetStarted;
