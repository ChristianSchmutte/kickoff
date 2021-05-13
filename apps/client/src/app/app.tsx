import styles from './app.module.scss';
import Feed from './feed/feed';
import { AuthProvider } from './auth-content/auth-content';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './private-route/private-route';
import PageNotFound from './page-not-found/page-not-found';
import Login from './login/login';
import SignUp from './sign-up/sign-up';

// TODO: create PageNotFound Component
export function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <PrivateRoute exact path='/home' component={Feed} />
          <Route exact path='/' component={Login} />
          <Route exact path='/signup' component={SignUp} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
