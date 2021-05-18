import { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ActivitiesContext } from '../activity-context/activity-context';
import { CreateActivityFormProps } from './create-activity-form.types';
import './create-activity-form.module.scss';
import { v4 as uuidv4 } from 'uuid';

import { useMutation, useQueryClient, QueryCache } from 'react-query';
import { postActivity } from './create-activity-form.service';
/* eslint-disable-next-line */
export function CreateActivityForm(props: CreateActivityFormProps) {
  const queryClient = useQueryClient();
  const { mutate } = useMutation(postActivity, {
    onMutate: (newData) => {
      queryClient.cancelQueries('feed');
      const state = queryClient.getQueryData('feed');
    },
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries('feed');
    }
  });

  const { selectedActivity, handler, editActivity, idHandler } =
    useContext(ActivitiesContext) || {};

  const iniState = {
    title: '',
    description: '',
    timestamp: new Date().getTime(),
    ends: new Date().getTime(),
    organizerId: 1,
    locationId: 1,
    sportId: 1
  };

  let initialState;

  const mode = selectedActivity ? 'Edit' : 'NewPost';
  if (mode === 'Edit') {
    initialState = selectedActivity;
  } else {
    initialState = iniState;
  }

  const [postedActivity, setPostedActivity] = useState(initialState);

  const handleChange = (changes) => {
    setPostedActivity({ ...postedActivity, ...changes });
  };
  // TODO: remove this handler, since it's not being used anywhere
  const editActivityHandler = (changes) => {
    editActivity(postedActivity.id, { ...postedActivity, ...changes });
  };

  const history = useHistory();
  const redirectToFeed = () => {
    history.push('/home');
  };

  const onSaveHandler = async (): Promise<void> => {
    if (mode === 'Edit') {
      editActivity(postedActivity.id, postedActivity);
    } else if (mutate) {
      console.log(postedActivity);
      await mutate({ endpoint: '/activity', activity: postedActivity });
    }
    redirectToFeed();
    idHandler(null);
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
        {/* <input
          type='text'
          name='location'
          id='location'
          placeholder='Location Required'
          value={postedActivity.location}
          onChange={(e) => {
            handleChange({ location: e.target.value });
          }}
        /> */}
        <br />
        <br />
        <label htmlFor='postcode'>Post Code</label>
        <br />
        {/* <input
          type='text'
          name='postcode'
          id='postcode'
          placeholder='PostCode Required'
          value={postedActivity.postcode}
          onChange={(e) => {
            handleChange({ postcode: e.target.value });
          }}
        /> */}
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
        <textarea
          name='map'
          id='map'
          value=''
          onChange={(e) => handleChange({ description: e.target.value })}
        />
        <br />
        <br />
      </form>
      <div>
        <button
          onClick={() => {
            onSaveHandler();
          }}
        >
          Save
        </button>
      </div>
    </>
  );
}

export default CreateActivityForm;
