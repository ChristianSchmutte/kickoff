import React from 'react';
import styles from './nav-bar.module.scss';
import home from '../../assets/home.svg';
import './nav-bar.module.scss';
import createIcon from '../../assets/plus-circle.svg';
/* eslint-disable-next-line */
export interface NavBarProps {}

export function NavBar(props: NavBarProps) {
  return (
    <div className={styles.container}>
      <img src={home} alt="home icon" />
      <img
        className={styles.createEventButton}
        src={createIcon}
        alt="create event icon"
      />
    </div>
  );
}

export default NavBar;
