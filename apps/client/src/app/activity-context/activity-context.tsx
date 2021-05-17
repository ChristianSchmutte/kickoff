import React, { useState } from 'react';
import {
  Activity,
  ActivityContextType,
  ActivityContextProps
} from './activity-contex.types';
import './activity-context.module.scss';

import useRequest from './activity-context.service';

/* eslint-disable-next-line */

export const ActivitiesContext = React.createContext<ActivityContextType | null>(
  null
);

export function ActivityContext(props: ActivityContextProps) {
  const { data, isLoading, isError, isFetching, error } = useRequest('/feed');
  const [activities, setActivities] = useState(data);
  const [selectedActivityId, setSelectedActivityId] = useState<number>();

  if (isLoading) return <span>Is Loading...</span>;
  if (isError) return <span>Error: {error.message}</span>;
  if (isFetching) return <span>Is Updating...</span>;

  const formatCountdown = (timestamp: number): number => {
    const a: number = new Date().getTime();
    const b: number = timestamp;
    const timeRemainingInMilliseconds: number = b - a;
    return timeRemainingInMilliseconds;
  };

  const selectedActivity: Activity =
    activities &&
    activities.find((activity) => activity.id === selectedActivityId);

  const handleSelectedActivityId = (id: number): void => {
    setSelectedActivityId(id);
  };

  const sortedActivities = [...activities].sort((a, b) => {
    if (formatCountdown(a.timestamp) > formatCountdown(b.ends)) return 1;
    if (formatCountdown(a.timestamp) < formatCountdown(b.ends)) return -1;
    return 0;
  });

  const handleActivityPost = (newActivity) => {
    setActivities([...activities, newActivity]);
  };
  // TODO: try to modify the editActivityHandler into a pure function with no side effects (or at least minimize side effects)
  const editActivityHandler = (id, newActivity) => {
    const newActivities = [...activities];
    const index = activities.findIndex((activity) => activity.id === id);
    newActivities[index] = newActivity;
    setActivities(newActivities);
  };

  const contextContent = {
    activities: sortedActivities,
    handler: handleActivityPost,
    idHandler: handleSelectedActivityId,
    idx: selectedActivityId,
    selectedActivity: selectedActivity,
    editActivity: editActivityHandler
  };

  return (
    <ActivitiesContext.Provider value={contextContent}>
      {props.children}
    </ActivitiesContext.Provider>
  );
}

export default ActivityContext;
