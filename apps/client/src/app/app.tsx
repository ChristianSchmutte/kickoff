import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Feed from './feed/feed';
import Login from './login/login';
import SignUp from './sign-up/sign-up';
import CreateActivityForm from './create-activity-form/create-activity-form';
import ActivityContext from './activity-context/activity-context';
import PageNotFound from './page-not-found/page-not-found';
import React from 'react';
import MapComponent from './map-component/map-component';
import getStarted from './get-started/get-started';

export function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ActivityContext>
        <BrowserRouter>
          <Switch>
            <Route exact path='/getStarted' component={getStarted} />
            <Route exact path='/home' component={Feed} />
            <Route exact path='/create' component={CreateActivityForm} />
            <Route exact path='/' component={Login} />
            <Route exact path='/signup' component={SignUp} />
            <Route component={PageNotFound} />
          </Switch>
        </BrowserRouter>
      </ActivityContext>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
