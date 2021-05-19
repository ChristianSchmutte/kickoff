import { useState, useContext } from 'react';
import ActivityCard from '../activity-card/activity-card';
import NavBar from '../nav-bar/nav-bar';
import styles from './feed.module.scss';
import createIcon from '../../assets/plus-circle.svg';
import { ActivitiesContext } from '../activity-context/activity-context';
import { useHistory } from 'react-router-dom';

import './feed.module.scss';

/* eslint-disable-next-line */
export interface FeedProps {}

const Feed = (props: FeedProps): JSX.Element => {
  const { activities, selectActivityHandler } =
    useContext(ActivitiesContext) || {};

  const [updatedActivities, setUpdatedActivities] = useState(activities);

  // For redirection to create activity page
  const history = useHistory();

  const redirect = () => {
    history.push('/create');
  };

  const activityCards: JSX.Element[] =
    updatedActivities &&
    updatedActivities.map((activity) => (
      <ActivityCard key={activity.id} activity={activity} />
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
};

export default Feed;
