import React, { useState } from 'react';
import ActivityCard from '../activity-card/activity-card';
<<<<<<< HEAD
import NavBar from '../nav-bar/nav-bar';
import styles from './feed.module.scss';
=======
import { v4 as uuidv4 } from 'uuid';
>>>>>>> 7d8790f0646d6bc1bda36c807643399236f25177

import './feed.module.scss';

/* eslint-disable-next-line */
export interface FeedProps {}

interface Activity {
  id: number;
  title: string;
  description: string;
  startTimestamp: number;
  endTimestamp: number;
  location: string;
  // timeRemainingMS: number;
  id: string;
}

// console.log('uuidv4:', uuidv4());

const mockActivities: Activity[] = [
  {
<<<<<<< HEAD
    id: 12,
    title: 'Basketball',
    description: 'Stuff about bball',
    startTimestamp: new Date(2021, 4, 12, 11).getTime(),
    endTimestamp: new Date(2021, 4, 13, 13).getTime(),
    location: 'Middle of nowhere',
  },
  {
    id: 8,
    title: 'Cricket',
    description: 'Stuff about cricket',
    startTimestamp: new Date(2021, 4, 15, 12).getTime(),
    endTimestamp: new Date(2021, 4, 16, 14).getTime(),
    location: 'somehwere',
  },
];
=======
    title: 'Football',
    description: 'Saturday Night Football',
    startTimestamp: new Date(2021, 7, 12, 11).getTime(),
    endTimestamp: new Date(2021, 7, 13, 13).getTime(),
    location: 'War Memorial Park',
    id: uuidv4(),
  },

  {
    title: 'Basketball',
    description: 'Stuff about bball',
    startTimestamp: new Date(2021, 6, 12, 11).getTime(),
    endTimestamp: new Date(2021, 6, 13, 13).getTime(),
    location: 'Middle of nowhere',
    id: uuidv4(),
  },

  {
    title: 'Cricket',
    description: 'Stuff about bball',
    startTimestamp: new Date(2021, 6, 6, 11).getTime(),
    endTimestamp: new Date(2021, 6, 7, 13).getTime(),
    location: 'Middle of nowhere',
    id: uuidv4(),
  },
];

console.log('mockActivities:', mockActivities[0].id);

function formatTimeRemaingInMilliseconds(timestamp: number): number {
  const a: number = new Date().getTime();
  const b: number = timestamp;
  const timeRemainingInMilliseconds: number = b - a;
  console.log('timeremainingms:', timeRemainingInMilliseconds);
  return timeRemainingInMilliseconds;
}
>>>>>>> 7d8790f0646d6bc1bda36c807643399236f25177

export function Feed(props: FeedProps) {
  const [activities, setActivities] = useState<Activity[]>(mockActivities);

<<<<<<< HEAD
  const activityCards: JSX.Element[] = activities.map((activity) => (
    <ActivityCard
      className={styles.activity}
=======
  /* List cards
     profile image -> string (url)
     time attached -> timestamp
     description -> string
     button with a click handler pass id for clickhandler
     duration
    participants */

  const sortedActivities = activities.sort(function (a, b) {
    if (
      formatTimeRemaingInMilliseconds(a.startTimestamp) >
      formatTimeRemaingInMilliseconds(b.startTimestamp)
    )
      return 1;
    if (
      formatTimeRemaingInMilliseconds(a.startTimestamp) <
      formatTimeRemaingInMilliseconds(b.startTimestamp)
    )
      return -1;
    return 0;
  });

  console.log('sorted:', sortedActivities);

  const activityCards: JSX.Element[] = sortedActivities.map((activity) => (
    <ActivityCard
      id={activity.id}
      key={activity.id}
>>>>>>> 7d8790f0646d6bc1bda36c807643399236f25177
      title={activity.title}
      description={activity.description}
      startTimestamp={activity.startTimestamp}
      endTimestamp={activity.endTimestamp}
      location={activity.location}
<<<<<<< HEAD
      key={activity.id}
    />
  ));
  return (
    <div className={styles.container}>
      <NavBar />
      {activityCards}
    </div>
  );
=======
    />
  ));
  return <div>{activityCards}</div>;
>>>>>>> 7d8790f0646d6bc1bda36c807643399236f25177
}

export default Feed;
