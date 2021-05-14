import React, { useState, useContext } from 'react';
import ActivityCard from '../activity-card/activity-card';
import NavBar from '../nav-bar/nav-bar';
import styles from './feed.module.scss';
import { v4 as uuidv4 } from 'uuid';
import createIcon from '../../assets/plus-circle.svg';
import { ActivityContext } from '../activities/activities';

import './feed.module.scss';

/* eslint-disable-next-line */
export interface FeedProps {}

// interface Activity {
//   title: string;
//   description: string;
//   startTimestamp: number;
//   endTimestamp: number;
//   location: string;
//   id: string;
//   postcode: string;
//   location_url: string;
// }

export function Feed(props: FeedProps) {
  // const { activities, handler } = useContext(ActivityContext);
  const context = useContext(ActivityContext);
  const activities = context.activities;
  console.log('activities', activities);

  const activityCards: JSX.Element[] = activities.map((activity) => (
    <ActivityCard
      id={activity.id}
      key={activity.id}
      title={activity.title}
      description={activity.description}
      startTimestamp={activity.startTimestamp}
      endTimestamp={activity.endTimestamp}
      location={activity.location}
    />
  ));
  return (
    <div className={styles.container}>
      <NavBar />
      {activityCards}
      <img
        className={styles.createEventButton}
        src={createIcon}
        alt='create event icon'
        onClick={() =>
          console.log('👍 clicked...  👉 should open create event form')
        }
      />
    </div>
  );
}

export default Feed;
