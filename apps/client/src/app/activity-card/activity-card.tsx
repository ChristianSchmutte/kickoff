import React, { useState } from 'react';
import Moment from 'moment';
import styles from './activity-card.module.scss';
import user from '../../assets/user.svg';
import photo from '../../assets/photo.jpeg';

/* eslint-disable-next-line */
export interface ActivityCardProps {
  title: string;
  description: string;
  startTimestamp: number;
  endTimestamp?: number;
  location: string;
  id?: string;
}

function convertToMoment(timestamp: number): [number, number, number] {
  const getFullYear = new Date(timestamp).getFullYear();
  const getMonth = new Date(timestamp).getMonth();
  const getDay = new Date(timestamp).getDate();
  return [getFullYear, getMonth, getDay];
}

function formatTimeRemaing(timestamp: number): string {
  // console.log({
  //   'starting time': Moment(convertToMoment(timestamp)).format(
  //     'YYYY, MMM Do h:mm a'
  //   ),
  // });
  const a: Moment.Moment = Moment(convertToMoment(Date.now()));
  const b: Moment.Moment = Moment(convertToMoment(timestamp));
  const timeRemaining: string = a.to(b);
  return timeRemaining;
}

function formatFromStartToFinish(start: number, finish: number): string {
  return `${Moment(start).format('MMM, Do h:mm a')} to ${Moment(finish).format(
    'h:mm a'
  )}`;
}

export function ActivityCard({
  title,
  description,
  startTimestamp,
  endTimestamp,
  location,
  id,
}: ActivityCardProps): JSX.Element {
  const timeRemaining: string = formatTimeRemaing(startTimestamp);
  console.log('key:', id);
  const fromStartToFinish: string = formatFromStartToFinish(
    startTimestamp,
    endTimestamp
  );

  // profilePics: An array of profile pictures for every participant
  const [profilePics, setProfilePics] = useState([]);

  const renderProfilePics = profilePics.map(({ img, id }) => (
    <div className={styles.profilePicWrapper}>
      <img className={styles.profilePic} key={id} src={img} alt="profile" />
    </div>
  ));

  return (
    <div className={styles.cardContainer}>
      <div className={styles.header}>
        <img className={styles.photo} src={photo} alt="profile" />
        <p className={styles.titleWrapper}>
          <h3 className={styles.title}>{title}</h3>
          <h6 className={styles.timeRemaining}>{timeRemaining}</h6>
        </p>
      </div>
      <div className={styles.description}>
        {description.length > 200
          ? 'Number of characters exceeds the limit of 200!'
          : description}
      </div>
      <div className={styles.details}>
        <p className={styles.location}>{location}</p>
        <div className={styles.startToFinish}>{fromStartToFinish}</div>
      </div>
      <div className={styles.footer}>
        <button type="button" className={styles.join}>
          <span>Join</span>
        </button>
        <div className={styles.particpants}>
          {renderProfilePics ? renderProfilePics : undefined}
        </div>
      </div>
    </div>
  );
}

export default ActivityCard;
