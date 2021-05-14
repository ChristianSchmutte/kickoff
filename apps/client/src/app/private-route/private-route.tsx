import React, { FunctionComponent, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import './private-route.module.scss';

/* eslint-disable-next-line */
export interface PrivateRouteProps {
  component: FunctionComponent;
  path: string;
  exact: boolean;
}

const PrivateRoute: FunctionComponent<PrivateRouteProps> = ({
  component: RouteComponent,
  exact,
  path
}) => {
  const [currentUser, setCurrentUser] = useState(null);

  return currentUser ? (
    <Route path={path} exact={exact} component={RouteComponent} />
  ) : (
    <Redirect to='/login' />
  );
};

export default PrivateRoute;
