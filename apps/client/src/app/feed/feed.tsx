import React, { useState } from 'react';
import ActivityCard from '../activity-card/activity-card';
import NavBar from '../nav-bar/nav-bar';
import styles from './feed.module.scss';
import { v4 as uuidv4 } from 'uuid';

import './feed.module.scss';

/* eslint-disable-next-line */
export interface FeedProps {}

interface Activity {
  title: string;
  description: string;
  startTimestamp: number;
  endTimestamp: number;
  location: string;
  id: string;
}

const mockActivities: Activity[] = [
  {
    title: 'Football',
    description: 'Saturday Night Football',
    startTimestamp: new Date(2021, 7, 12, 11).getTime(),
    endTimestamp: new Date(2021, 7, 13, 13).getTime(),
    location: 'War Memorial Park',
    id: uuidv4(),
  },

  {
    title: 'Basketball',
    description: 'description...',
    startTimestamp: new Date(2021, 6, 12, 11).getTime(),
    endTimestamp: new Date(2021, 6, 13, 13).getTime(),
    location: "Da'an Forest Park",
    id: uuidv4(),
  },

  {
    title: 'Cricket',
    description: 'description...',
    startTimestamp: new Date(2021, 6, 6, 11).getTime(),
    endTimestamp: new Date(2021, 6, 7, 13).getTime(),
    location: 'Coffin Cricket Ink',
    id: uuidv4(),
  },
];

function formatTimeRemaingInMilliseconds(timestamp: number): number {
  const a: number = new Date().getTime();
  const b: number = timestamp;
  const timeRemainingInMilliseconds: number = b - a;
  return timeRemainingInMilliseconds;
}

export function Feed(props: FeedProps) {
  const [activities, setActivities] = useState<Activity[]>(mockActivities);

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

  const activityCards: JSX.Element[] = sortedActivities.map((activity) => (
    <ActivityCard
      id={activity.id}
      key={activity.id}
      title={activity.title}
      description={activity.description}
      startTimestamp={activity.startTimestamp}
      endTimestamp={activity.endTimestamp}
      location={activity.location}
      key={activity.id}
    />
  ));
  return (
    <div className={styles.container}>
      <NavBar />
      {activityCards}
    </div>
  );
}

export default Feed;
