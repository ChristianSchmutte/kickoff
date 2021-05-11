import React, { useState } from 'react';
import ActivityCard from '../activity-card/activity-card';

import './feed.module.scss';

/* eslint-disable-next-line */
export interface FeedProps {}

interface Activity {
  title: string;
  description: string;
  startTimestamp: number;
  endTimestamp: number;
  location: string;
}

const mockActivities: Activity[] = [
  {
    title: 'Basketball',
    description: 'Stuff about bball',
    startTimestamp: new Date(2021, 4, 12, 11).getTime(),
    endTimestamp: new Date(2021, 4, 13, 13).getTime(),
    location: 'Middle of nowhere'
  }
]

export function Feed(props: FeedProps) {
  const [activities, setActivities] = useState<Activity[]>(mockActivities);

  const activityCards: JSX.Element[] = activities.map((activity) => (
    <ActivityCard 
      title={activity.title}
      description={activity.description}
      startTimestamp={activity.startTimestamp}
      endTimestamp={activity.endTimestamp}
      location={activity.location}
      key="1"
    />
  ));
  return (
    <div>
      {activityCards}
    </div>
  );
}

export default Feed;
