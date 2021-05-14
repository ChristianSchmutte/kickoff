import React, { useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ActivitiesContext } from '../activity-context/activity-context';
import { useHistory } from 'react-router-dom';

import './create-activity-form.module.scss';

/* eslint-disable-next-line */
export interface CreateActivityFormProps {}

export function CreateActivityForm(props: CreateActivityFormProps) {
  const { handler } = useContext(ActivitiesContext) || {};

  console.log('ha', handler);

  const initialState = {
    title: '',
    description: '',
    startTimestamp: new Date().getTime(),
    endTimestamp: new Date().getTime(),
    location: '',
    id: uuidv4(),
    postcode: '',
    location_url: ''
  };

  const [postedActivity, setPostedActivity] = useState(initialState);

  const handleChange = (changes) => {
    setPostedActivity({ ...postedActivity, ...changes });
  };

  // setPostedActivity(initialState);

  const history = useHistory();
  const redirectToFeed = () => {
    history.push('/home');
  };

  return (
    <>
      <form>
        <label htmlFor='title'>Activity Title</label>
        <input
          type='text'
          name='title'
          id='title'
          value={postedActivity.title}
          onChange={(e) => {
            handleChange({ title: e.target.value });
          }}
        />
        <label htmlFor='location'>Place</label>
        <input
          type='text'
          name='location'
          id='location'
          value={postedActivity.location}
          onChange={(e) => {
            handleChange({ location: e.target.value });
          }}
        />
        <label htmlFor='postcode'>Post Code</label>
        <input
          type='text'
          name='postcode'
          id='postcode'
          value={postedActivity.postcode}
          onChange={(e) => {
            handleChange({ postcode: e.target.value });
          }}
        />
        <label htmlFor='location_url'>Location URL</label>
        <input
          type='text'
          name='location_url'
          id='location_url'
          value={postedActivity.location_url}
          onChange={(e) => {
            handleChange({ location_url: e.target.value });
          }}
        />
        <label htmlFor='description'>Description</label>
        <textarea
          name='description'
          id='description'
          value={postedActivity.description}
          onChange={(e) => {
            handleChange({ description: e.target.value });
          }}
        />
        <label htmlFor='startTimestamp'>Date</label>
        <input
          type='datetime'
          name='startTimestamp'
          id='startTimestamp'
          value={postedActivity.startTimestamp}
          onChange={(e) => {
            handleChange({ startTimestamp: e.target.value });
          }}
        />
        <label htmlFor='endTimestamp'>Date</label>
        <input
          type='datetime'
          name='endTimestamp'
          id='endTimestamp'
          value={postedActivity.endTimestamp}
          onChange={(e) => {
            handleChange({ endTimestamp: e.target.value });
          }}
        />
        {/* To be changed to map later*/}
        <label htmlFor='map'>Map</label>
        <textarea name='map' id='map' value='' />
      </form>
      <div>
        <button
          onClick={() => {
            if (handler !== null) {
              handler(postedActivity);
              setPostedActivity(initialState);
            }
          }}
        >
          Post
        </button>
        <button>Delete</button>
        <button
          onClick={() => {
            redirectToFeed();
          }}
        >
          Feed
        </button>
      </div>
    </>
  );
}

export default CreateActivityForm;
