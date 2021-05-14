import styles from './app.module.scss';
import Feed from './feed/feed';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './private-route/private-route';
import PageNotFound from './page-not-found/page-not-found';
import Login from './login/login';
import SignUp from './sign-up/sign-up';
import activities from './activities/activities';

// TODO: create PageNotFound Component
export function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/home' component={activities} />
        <Route exact path='/' component={Login} />
        <Route exact path='/signup' component={SignUp} />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
}

export default App;
