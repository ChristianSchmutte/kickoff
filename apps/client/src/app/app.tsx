import styles from './app.module.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Feed from './feed/feed';
import Login from './login/login';
import SignUp from './sign-up/sign-up';
import PageNotFound from './page-not-found/page-not-found';

export function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/home' component={Feed} />
        <Route exact path='/' component={Login} />
        <Route exact path='/signup' component={SignUp} />
        <Route component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
