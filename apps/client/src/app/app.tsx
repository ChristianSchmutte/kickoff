import styles from './app.module.scss';
import Feed from './feed/feed';
import firebase from 'firebase/app';

export function App() {
  const firebaseApp = firebase.apps[0];
  console.log(JSON.stringify(firebaseApp.options, null, 2));
  return <Feed />;
}

export default App;
