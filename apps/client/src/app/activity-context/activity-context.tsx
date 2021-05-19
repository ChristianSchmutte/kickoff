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

  const [lng, setLng] = useState(-0.109697);
  const [lat, setLat] = useState(51.512963);
  const [zoom, setZoom] = useState(9);

  const initialqueryAddress = 'War Memorial Park, Coventry, United kingdom';
  const [address, setAddress] = useState(initialqueryAddress);
  const apiAccessKey = 'ab4721ca0c1750b5bc6247df15a8134a';
  const initialGeoCodingApiUrl = `http://api.positionstack.com/v1/forward?query=${address}&access_key=${apiAccessKey}`;
  const [geoCodingApiUrl, setGeoCodingApiUrl] = useState(
    initialGeoCodingApiUrl
  );
  const getCoordinates = (geoCodingApiUrl) => {
    return fetch(geoCodingApiUrl)
      .then((response) => response.json())
      .then((json) => json)
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    setGeoCodingApiUrl(
      `http://api.positionstack.com/v1/forward?query=${address}&access_key=${apiAccessKey}`
    );
  }, [address]);

  useEffect(() => {
    console.log(geoCodingApiUrl);
    getCoordinates(geoCodingApiUrl).then((json) =>
      setLng(json.data[0].longitude)
    );
  }, [geoCodingApiUrl]);

  useEffect(() => {
    getCoordinates(geoCodingApiUrl).then((json) =>
      // setPosition([json.data[0].longitude, json.data[0].latitude, 13])
      setLat(json.data[0].latitude)
    );
  }, [geoCodingApiUrl]);

  // const [activities, setActivities] = useState<Activity[]>([]);
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

  // const selectedActivity: Activity =
  //   activities &&
  //   activities.find((activity) => activity.id === selectedActivityId);

  const handleSelectedActivity = (activity: Activity): void => {
    setSelectedActivity(activity);
  };

  const sortedActivities =
    activities &&
    [...activities].sort((a, b) => {
      if (formatCountdown(a.timestamp) > formatCountdown(b.ends)) return 1;
      if (formatCountdown(a.timestamp) < formatCountdown(b.ends)) return -1;
      return 0;
    });

  // const handleActivityPost = (newActivity) => {
  //   setActivities([...activities, newActivity]);
  // };

  // const editActivityHandler = (id, newActivity) => {
  //   const newActivities = [...activities];
  //   const index = activities.findIndex((activity) => activity.id === id);
  //   newActivities[index] = newActivity;
  //   setActivities(newActivities);
  // };

  const handleLatitude = (change) => {
    setLat(change);
  };

  const handleLongitude = (change) => {
    setLng(change);
  };

  const handleZoom = (change) => {
    setZoom(change);
  };

  const handleAddress = (change) => {
    setAddress(change);
  };

  const contextContent = {
    activities: sortedActivities,
    // handler: handleActivityPost,
    selectActivityHandler: handleSelectedActivity,
    // idx: selectedActivityId,
    selectedActivity: selectedActivity,
    // editActivity: editActivityHandler,
    latitudeHandler: handleLatitude,
    longitudeHandler: handleLongitude,
    zoomHandler: handleZoom,
    latitude: lat,
    longitude: lng,
    zooom: zoom,
    addressHandler: handleAddress
  };

  return (
    <ActivitiesContext.Provider value={contextContent}>
      {props.children}
    </ActivitiesContext.Provider>
  );
}

export default ActivityContext;
