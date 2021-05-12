import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import firebase from 'firebase/app';
import App from './app/app';

const firebaseConfig = {
  apiKey: 'AIzaSyA6h_SY3_hqiEBSZuDOOrzUef9Ko9gERow',
  authDomain: 'kickoff-6c4c9.firebaseapp.com',
  projectId: 'kickoff-6c4c9',
  storageBucket: 'kickoff-6c4c9.appspot.com',
  messagingSenderId: '756681853270',
  appId: '1:756681853270:web:18ddc55d5a9c59c6b7aef7',
  measurementId: 'G-7LFDQZWSF7',
};
firebase.initializeApp(firebaseConfig);
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);
