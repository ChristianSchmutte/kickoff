import React, { useState } from 'react';
import ActivityCard from '../activity-card/activity-card';
import NavBar from '../nav-bar/nav-bar';
import styles from './feed.module.scss';

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
}

const mockActivities: Activity[] = [
  {
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

export function Feed(props: FeedProps) {
  const [activities, setActivities] = useState<Activity[]>(mockActivities);

  const activityCards: JSX.Element[] = activities.map((activity) => (
    <ActivityCard
      className={styles.activity}
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
