import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import './create-activity-form.module.scss';

/* eslint-disable-next-line */
export interface CreateActivityFormProps {}

export function CreateActivityForm(props: CreateActivityFormProps) {
  return (
    <>
      <div>
        <label htmlFor='title'>Activity Title</label>
        <input type='text' name='title' id='title' value='' />
        <label htmlFor='location'>Place</label>
        <input type='text' name='location' id='location' value='' />
        <label htmlFor='postcode'>Post Code</label>
        <input type='text' name='postcode' id='postcode' value='' />
        <label htmlFor='location_url'>Location URL</label>
        <input type='text' name='location_url' id='location_url' value='' />
        <label htmlFor='description'>Description</label>
        <textarea name='description' id='description' value='' />
        <label htmlFor='date'>Date</label>
        <input type='date' id='date' value='' />
        <label htmlFor='time'>Time</label>
        <input type='time' id='time' value='' />
        {/* To be changed to map later*/}
        <label htmlFor='map'>Map</label>
        <textarea name='map' id='map' value='' />
      </div>
      <div>
        <button>Post</button>
        <button>Delete</button>
      </div>
    </>
  );
}

export default CreateActivityForm;
