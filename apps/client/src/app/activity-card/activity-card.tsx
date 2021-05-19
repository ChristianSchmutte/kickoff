import React, { useState, useContext } from 'react';
import Moment from 'moment';
import styles from './activity-card.module.scss';
import user from '../../assets/user.svg';
import photo from '../../assets/photo.jpeg';
import { useHistory } from 'react-router-dom';
import { ActivitiesContext } from '../activity-context/activity-context';
import { Activity, Location } from '../activity-context/activity-contex.types';
import edit from '../../assets/edit.svg';
import MapComponent from '../map-component/map-component';
// import useSWR from 'swr';

/* eslint-disable-next-line */
export interface ActivityCardProps {
  activity: Activity;
}

function convertToMoment(timestamp: number): [number, number, number] {
  const getFullYear = new Date(timestamp).getFullYear();
  const getMonth = new Date(timestamp).getMonth();
  const getDay = new Date(timestamp).getDate();
  return [getFullYear, getMonth, getDay];
}

function formatTimeRemaing(timestamp: number): string {
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

export function ActivityCard({ activity }: ActivityCardProps): JSX.Element {
  const {
    id,
    title,
    description,
    timestamp: startTimestamp,
    ends: endTimestamp,
    location
  } = activity;
  const timeRemaining: string = formatTimeRemaing(startTimestamp);
  const fromStartToFinish: string = formatFromStartToFinish(
    startTimestamp,
    endTimestamp
  );

  // profilePics: An array of profile pictures for every participant
  const [profilePics, setProfilePics] = useState([]);

  const { idHandler, selectActivityHandler } =
    useContext(ActivitiesContext) || {};

  const renderProfilePics = profilePics.map(({ img, id }) => (
    <div className={styles.profilePicWrapper}>
      <img className={styles.profilePic} key={id} src={img} alt='profile' />
    </div>
  ));

  // For redirection to edit activity page
  const history = useHistory();
  const redirect = () => {
    history.push('/create');
  };

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className={styles.cardContainer}>
      <div className={styles.header}>
        <img className={styles.photo} src={photo} alt='profile' />
        <div className={styles.titleWrapper}>
          <h3 className={styles.title}>{title}</h3>
          <h6 className={styles.timeRemaining}>{timeRemaining}</h6>
          <button onClick={handleClick}>&times;</button>
        </div>
      </div>
      {open && (
        <>
          <div className={styles.description}>
            {description.length > 200
              ? 'Number of characters exceeds the limit of 200!'
              : description}
          </div>
          <div className={styles.details}>
            <p className={styles.location}>{location.name}</p>
            <div className={styles.startToFinish}>{fromStartToFinish}</div>
          </div>
          <MapComponent
            latitude={location.latitude}
            longitude={location.longitude}
          />
        </>
      )}
      <div className={styles.footer}>
        <button type='button' className={styles.join}>
          <span>Join</span>
        </button>
        <img
          src={edit}
          alt='edit button'
          onClick={(e) => {
            selectActivityHandler(activity);
            redirect();
          }}
        />
        <div className={styles.particpants}>
          {renderProfilePics ? renderProfilePics : undefined}
        </div>
      </div>
    </div>
  );
}

export default ActivityCard;
