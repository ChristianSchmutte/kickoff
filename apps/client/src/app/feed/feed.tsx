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
    title: 'Soccer here',
    description: 'Stuff about soccer',
    timestamp: Date.now(),
    location: 'Middle of nowhere'
  },
  {
    title: 'Cricket here',
    description: 'Stuff about cricket',
    timestamp: Date.now(),
    location: 'Middle of nowhere'
    
  },
  {
    title: 'Bball here',
    description: 'Stuff about bball',
    startTimestamp: new Date(2021, 4, 12, 11).getTime(),
    endTimestamp: new Date(2021, 4, 13, 13).getTime(),
    location: 'Middle of nowhere'
  },
]

export function Feed(props: FeedProps) {
  const [activities, setActivities] = useState<Activity[]>(mockActivities);

  /* List cards
     profile image -> string (url)
     time attached -> timestamp
     description -> string
     button with a click handler pass id for clickhandler
     duration
    participants */

  const activityCards: JSX.Element[] = activities.map((activity) => (
    <ActivityCard 
      title={activity.title}
      description={activity.description}
      timestamp={activity.timestamp}
      location={activity.location}
    />
  ));
  return (
    <div>
      {activityCards}
    </div>
  );
}

export default Feed;
