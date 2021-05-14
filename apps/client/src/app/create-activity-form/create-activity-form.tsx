import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Activity, handleActivityPost } from '../feed/feed';

import './create-activity-form.module.scss';

/* eslint-disable-next-line */
export interface CreateActivityFormProps {}

export function CreateActivityForm(props: CreateActivityFormProps) {
  const [postedActivity, setPostedActivity] = useState({
    title: '',
    description: '',
    startTimestamp: '',
    endTimestamp: '',
    location: '',
    id: uuidv4(),
    postcode: '',
    location_url: ''
  });
  const handleChange = (changes) => {
    setPostedActivity({ ...postedActivity, ...changes });
  };

  return (
    <>
      <div>
        <label htmlFor='title'>Activity Title</label>
        <input
          type='text'
          name='title'
          id='title'
          value=''
          onChange={(e) => {
            handleChange({ title: e.target.value });
          }}
        />
        <label htmlFor='location'>Place</label>
        <input
          type='text'
          name='location'
          id='location'
          value=''
          onChange={(e) => {
            handleChange({ location: e.target.value });
          }}
        />
        <label htmlFor='postcode'>Post Code</label>
        <input
          type='text'
          name='postcode'
          id='postcode'
          value=''
          onChange={(e) => {
            handleChange({ postcode: e.target.value });
          }}
        />
        <label htmlFor='location_url'>Location URL</label>
        <input
          type='text'
          name='location_url'
          id='location_url'
          value=''
          onChange={(e) => {
            handleChange({ location_url: e.target.value });
          }}
        />
        <label htmlFor='description'>Description</label>
        <textarea
          name='description'
          id='description'
          value=''
          onChange={(e) => {
            handleChange({ description: e.target.value });
          }}
        />
        <label htmlFor='startTimestamp'>Date</label>
        <input
          type='datetime'
          name='startTimestamp'
          id='startTimestamp'
          value=''
          onChange={(e) => {
            handleChange({ startTimestamp: e.target.value });
          }}
        />
        <label htmlFor='endTimestamp'>Date</label>
        <input
          type='datetime'
          name='endTimestamp'
          id='endTimestamp'
          value=''
          onChange={(e) => {
            handleChange({ endTimestamp: e.target.value });
          }}
        />
        {/* To be changed to map later*/}
        <label htmlFor='map'>Map</label>
        <textarea name='map' id='map' value='' />
      </div>
      <div>
        <button onClick={() => handleActivityPost(postedActivity)}>Post</button>
        <button>Delete</button>
      </div>
    </>
  );
}

export default CreateActivityForm;
