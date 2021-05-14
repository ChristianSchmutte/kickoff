import React, { useEffect, useState } from 'react';
import NavBar from '../nav-bar/nav-bar';
import { v4 as uuidv4 } from 'uuid';
import createIcon from '../../assets/plus-circle.svg';
import Feed from '../feed/feed';
import CreateActivityForm from '../create-activity-form/create-activity-form';
import './activity-context.module.scss';

/* eslint-disable-next-line */
export interface ActivityContextProps {
  children: React.ReactNode;
}

interface Activity {
  title: string;
  description: string;
  startTimestamp: number;
  endTimestamp: number;
  location: string;
  id: string;
  postcode: string;
  location_url: string;
}

interface ActivityContextType {
  activities: Activity[];
  handler: (activity: Activity) => void;
}
export const ActivitiesContext = React.createContext<ActivityContextType | null>(
  null
);

export function ActivityContext(props: ActivityContextProps) {
  const mockActivities: Activity[] = [
    {
      title: 'Football',
      description: 'Saturday Night Football',
      startTimestamp: new Date(2021, 7, 12, 11).getTime(),
      endTimestamp: new Date(2021, 7, 13, 13).getTime(),
      location: 'War Memorial Paraak',
      id: uuidv4(),
      postcode: 'CV24FR',
      location_url: 'www.google.com'
    },

    {
      title: 'Basketball',
      description: 'description...',
      startTimestamp: new Date(2021, 6, 12, 11).getTime(),
      endTimestamp: new Date(2021, 6, 13, 13).getTime(),
      location: `Da'an Forest Park`,
      id: uuidv4(),
      postcode: 'CV31ORR',
      location_url: 'www.google.com'
    },

    {
      title: 'Cricket',
      description: 'description...',
      startTimestamp: new Date(2021, 6, 6, 11).getTime(),
      endTimestamp: new Date(2021, 6, 7, 13).getTime(),
      location: 'Coffin Cricket Ink',
      id: uuidv4(),
      postcode: 'CV24GW',
      location_url: 'www.google.com'
    }
  ];

  function formatTimeRemaingInMilliseconds(timestamp: number): number {
    const a: number = new Date().getTime();
    const b: number = timestamp;
    const timeRemainingInMilliseconds: number = b - a;
    return timeRemainingInMilliseconds;
  }

  const [activities, setActivities] = useState<Activity[]>(mockActivities);
  // const [selectedActivityId, setSelectedActivityId] = useState();
  // const selectedActivity = activities.find(
  //   (activity) => activity.id === selectedActivityId
  // );

  const handleActivityPost = (newActivity) => {
    setActivities([...activities, newActivity]);
  };

  const sortedActivities = [...activities].sort(function (a, b) {
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

  console.log('SA', sortedActivities);

  const contextContent = {
    activities: sortedActivities,
    handler: handleActivityPost
  };

  return (
    <ActivitiesContext.Provider value={contextContent}>
      {props.children}
    </ActivitiesContext.Provider>
  );
}

export default ActivityContext;
