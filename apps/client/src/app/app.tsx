import styles from './app.module.scss';
import Feed from './feed/feed';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './private-route/private-route';
import PageNotFound from './page-not-found/page-not-found';
import Login from './login/login';
import SignUp from './sign-up/sign-up';
import CreateActivityForm from './create-activity-form/create-activity-form';
import ActivityContext from './activity-context/activity-context';

// TODO: create PageNotFound Component
export function App() {
  return (
    <ActivityContext>
      <Router>
        <Switch>
          <Route exact path='/home' component={Feed} />
          <Route exact path='/create' component={CreateActivityForm} />
          <Route exact path='/' component={Login} />
          <Route exact path='/signup' component={SignUp} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    </ActivityContext>
  );
}

export default App;
