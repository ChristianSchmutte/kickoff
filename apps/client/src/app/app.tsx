import styles from './app.module.scss';
import Feed from './feed/feed';
import { Router, Route, Switch } from 'react-router-dom';
import Login from './login/login';
import SignUp from './sign-up/sign-up';
import PageNotFound from './page-not-found/page-not-found';

// TODO: create PageNotFound Component
export function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/home' component={Feed} />
        <Route exact path='/' component={Login} />
        <Route exact path='/signup' component={SignUp} />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
}

export default App;
