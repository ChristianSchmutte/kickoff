import React, { useState, useContext, useEffect } from 'react';
import ActivityCard from '../activity-card/activity-card';
import NavBar from '../nav-bar/nav-bar';
import styles from './feed.module.scss';
import { v4 as uuidv4 } from 'uuid';
import createIcon from '../../assets/plus-circle.svg';
import { ActivitiesContext } from '../activity-context/activity-context';
import { useHistory } from 'react-router-dom';

import './feed.module.scss';

/* eslint-disable-next-line */
export interface FeedProps {}

export function Feed(props: FeedProps) {
  const { activities, handler } = useContext(ActivitiesContext) || {};
  // console.log('activities', activities);

  const [refreshedActivities, setRefreshedActivities] = useState(activities);

  useEffect(() => {
    setRefreshedActivities(refreshedActivities);
  }, [activities]);

  // For redirection to create activity page
  const history = useHistory();
  const redirect = () => {
    history.push('/create');
  };

  const activityCards: JSX.Element[] = refreshedActivities?.map((activity) => (
    <ActivityCard
      id={activity.id}
      key={activity.id}
      title={activity.title}
      description={activity.description}
      startTimestamp={activity.startTimestamp}
      endTimestamp={activity.endTimestamp}
      location={activity.location}
    />
  ));
  return (
    <div className={styles.container}>
      <NavBar />
      {activityCards}
      <img
        className={styles.createEventButton}
        src={createIcon}
        alt='create event icon'
        onClick={() => {
          redirect();
        }}
      />
    </div>
  );
}

export default Feed;
