import React, { useEffect, useState } from 'react';
import './activity-context.module.scss';
import {
  Activity,
  ActivityContextType,
  ActivityContextProps
} from './activity-contex.types';

import { useRequest } from './activity-context.hooks';

/* eslint-disable-next-line */

export const ActivitiesContext = React.createContext<ActivityContextType | null>(
  null
);

export function ActivityContext(props: ActivityContextProps) {
  const {
    data: activities,
    isLoading,
    isError,
    isFetching,
    error
  } = useRequest('/feed');

  const [selectedActivity, setSelectedActivity] = useState<Activity>(null);

  if (isLoading) return <span>Is Loading...</span>;
  if (isError) return <span>Error: {error.message}</span>;
  if (isFetching) return <span>Is Updating...</span>;

  const formatCountdown = (timestamp: number): number => {
    const a: number = new Date().getTime();
    const b: number = timestamp;
    const timeRemainingInMilliseconds: number = b - a;
    return timeRemainingInMilliseconds;
  };

  const sortedActivities =
    activities &&
    [...activities].sort((a, b) => {
      if (formatCountdown(a.timestamp) > formatCountdown(b.ends)) return 1;
      if (formatCountdown(a.timestamp) < formatCountdown(b.ends)) return -1;
      return 0;
    });

  const handleSelectedActivity = (activity: Activity): void => {
    setSelectedActivity(activity);
  };

  const contextContent = {
    activities: sortedActivities,
    selectActivityHandler: handleSelectedActivity,
    selectedActivity: selectedActivity
  };

  return (
    <ActivitiesContext.Provider value={contextContent}>
      {props.children}
    </ActivitiesContext.Provider>
  );
}

export default ActivityContext;
