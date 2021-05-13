import styles from './app.module.scss';
import Feed from './feed/feed';
import { AuthProvider } from './auth-content/auth-content';
import { BrowserRoute as Router, Route } from 'react-router-dom';

export function App() {
  return (
    <AuthProvider>
      <Feed />
      <Router>
        <div></div>
      </Router>
    </AuthProvider>
  );
}

export default App;
