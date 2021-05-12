import React from 'react';

import styles from './create-event-form.module.scss';

/* eslint-disable-next-line */
export interface CreateEventFormProps {}

export function CreateEventForm(props: CreateEventFormProps) {
  return (
    <div>
      <label htmlFor="set-date">
        <input className={styles.dateInput} id="set-date" type="text" />
      </label>
      <h1>Welcome to CreateEventForm!</h1>
    </div>
  );
}

export default CreateEventForm;
