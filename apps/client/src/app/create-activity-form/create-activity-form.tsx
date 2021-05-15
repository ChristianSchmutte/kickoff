import React, { useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ActivitiesContext } from '../activity-context/activity-context';
import { useHistory } from 'react-router-dom';

import './create-activity-form.module.scss';

/* eslint-disable-next-line */

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

export interface CreateActivityFormProps {
  postedActivity: Activity;
}

export function CreateActivityForm(props: CreateActivityFormProps) {
  const { chosenActivity, handler, activityHandler, idHandler } =
    useContext(ActivitiesContext) || {};

  // console.log('ha', handler);

  const iniState = {
    title: '',
    description: '',
    startTimestamp: new Date().getTime(),
    endTimestamp: new Date().getTime(),
    location: '',
    id: uuidv4(),
    postcode: '',
    location_url: ''
  };

  let initialState;

  const mode = chosenActivity ? 'Edit' : 'NewPost';
  if (mode === 'Edit') {
    initialState = chosenActivity;
  } else {
    initialState = iniState;
  }

  const [postedActivity, setPostedActivity] = useState(initialState);

  const handleChange = (changes) => {
    setPostedActivity({ ...postedActivity, ...changes });
  };

  const activityEdit = (changes) => {
    activityHandler(postedActivity.id, { ...postedActivity, ...changes });
  };
  // setPostedActivity(initialState);

  const history = useHistory();
  const redirectToFeed = () => {
    history.push('/home');
  };

  const onSaveHandler = () => {
    if (mode === 'Edit') {
      activityHandler(postedActivity.id, postedActivity);
    } else if (handler !== null) {
      handler(postedActivity);
    }
    redirectToFeed();
    idHandler(null);
    // setPostedActivity(initialState);
  };

  return (
    <>
      <form>
        <button onClick={(e) => redirectToFeed()}>&times;</button>
        <br />
        <br />
        <label htmlFor='title'>Activity Title</label>
        <br />
        <input
          type='text'
          name='title'
          id='title'
          placeholder='Title Required'
          value={postedActivity.title}
          onChange={(e) => {
            handleChange({ title: e.target.value });
          }}
        />
        <br />
        <br />
        <label htmlFor='location'>Place</label>
        <br />
        <input
          type='text'
          name='location'
          id='location'
          placeholder='Location Required'
          value={postedActivity.location}
          onChange={(e) => {
            handleChange({ location: e.target.value });
          }}
        />
        <br />
        <br />
        <label htmlFor='postcode'>Post Code</label>
        <br />
        <input
          type='text'
          name='postcode'
          id='postcode'
          placeholder='PostCode Required'
          value={postedActivity.postcode}
          onChange={(e) => {
            handleChange({ postcode: e.target.value });
          }}
        />
        <br />
        <br />
        <label htmlFor='location_url'>Location URL</label>
        <br />
        <input
          type='text'
          name='location_url'
          id='location_url'
          value={postedActivity.location_url}
          onChange={(e) => {
            handleChange({ location_url: e.target.value });
          }}
        />
        <br />
        <br />
        <label htmlFor='description'>Description</label>
        <br />
        <textarea
          name='description'
          id='description'
          value={postedActivity.description}
          onChange={(e) => {
            handleChange({ description: e.target.value });
          }}
        />
        <br />
        <br />
        <label htmlFor='startTimestamp'>Start</label>
        <br />
        <input
          type='datetime'
          name='startTimestamp'
          id='startTimestamp'
          placeholder='Start date and time Required'
          value={postedActivity.startTimestamp}
          onChange={(e) => {
            handleChange({ startTimestamp: e.target.value });
          }}
        />
        <br />
        <br />
        <label htmlFor='endTimestamp'>Finish</label>
        <br />
        <input
          type='datetime'
          name='endTimestamp'
          id='endTimestamp'
          value={postedActivity.endTimestamp}
          onChange={(e) => {
            handleChange({ endTimestamp: e.target.value });
          }}
        />
        <br />
        <br />
        {/* To be changed to map later*/}
        <label htmlFor='map'>Map</label>
        <br />
        <textarea name='map' id='map' value='' />
        <br />
        <br />
      </form>
      <div>
        <button onClick={() => onSaveHandler()}>Save</button>
      </div>
    </>
  );
}

export default CreateActivityForm;
