import { useContext, useState, useEffect } from 'react';
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

  const { selectedActivity } = useContext(ActivitiesContext) || {};

  const [lng, setLng] = useState();
  const [lat, setLat] = useState();
  const [location, setLocation] = useState({ name: '', lat: null, lng: null });

  const initialqueryAddress = 'War Memorial Park, Coventry, United kingdom';
  const [address, setAddress] = useState();
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

  useEffect(() => {
    setLocation({ name: address, lat: lat, lng: lng });
  }, [lat, lng, address]);

  // console.log('lat, lng', lat, lng);

  const iniState = {
    title: '',
    description: '',
    timestamp: new Date().toJSON(),
    ends: new Date().toJSON(),
    location: { name: '', lat: null, lng: null }
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
  const handleAddressChange = (changesInForm) => {
    setAddress(changesInForm);
  };

  useEffect(() => {
    setPostedActivity({ ...postedActivity, location });
  }, [location]);

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

  console.log('postActivity', postedActivity);
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
        <label htmlFor='location'>Address</label>
        <br />
        <input
          type='text'
          name='location'
          id='location'
          placeholder='Location Required'
          value={postedActivity.address}
          onChange={(e) => {
            // handleChange({ location: e.target.value });
            handleAddressChange(e.target.value);
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
          type='datetime-local'
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
          type='datetime-local'
          name='endTimestamp'
          id='endTimestamp'
          value={postedActivity.endTimestamp}
          onChange={(e) => {
            handleChange({ endTimestamp: e.target.value });
          }}
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
