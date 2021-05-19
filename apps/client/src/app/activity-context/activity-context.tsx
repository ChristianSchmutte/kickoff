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

  // const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivityId, setSelectedActivityId] = useState<number>();

  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  // const [geolocation, setGeolocation] = useState([-0.109697, 51.512963]);
  // const [position, setPosition] = useState([]);
  // const [postCode, setPostCode] = useState('EC4Y7HL');

  // const onChange = (text) => setPostCode(text);

  // const postCodeApiUrl = `http://api.postcodes.io/postcodes/${postCode}`;
  // const getCoordinatesFromPostcode = (postCodeApiUrl) => {
  //   return fetch(postCodeApiUrl)
  //     .then((response) => response.json())
  //     .then((json) => json)
  //     .catch((err) => console.log(err));
  // };

  // useEffect(() => {
  //   getCoordinatesFromPostcode(postCodeApiUrl).then((json) =>
  //     setGeolocation([json.result.longitude, json.result.latitude])
  //   );
  // }, [postCodeApiUrl]);

  // console.log(setGeolocation);

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

  const sortedActivities =
    activities &&
    [...activities].sort((a, b) => {
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

  const handleLatitude = (newActivity) => {
    setLat(lat);
  };

  const handleLongitude = (newActivity) => {
    setLng(lng);
  };

  const handleZoom = (newActivity) => {
    setZoom(zoom);
  };

  const contextContent = {
    activities: sortedActivities,
    handler: handleActivityPost,
    idHandler: handleSelectedActivityId,
    idx: selectedActivityId,
    selectedActivity: selectedActivity,
    editActivity: editActivityHandler,
    latitudeHandler: handleLatitude,
    longitudeHandler: handleLongitude,
    zoomHandler: handleZoom,
    latitude: lat,
    longitude: lng,
    zooom: zoom
  };

  return (
    <ActivitiesContext.Provider value={contextContent}>
      {props.children}
    </ActivitiesContext.Provider>
  );
}

export default ActivityContext;
