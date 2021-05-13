import React, { FunctionComponent } from 'react';
import { useAuth } from '../auth-content/auth-content';
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
  const { user } = useAuth();

  return user ? (
    <Route path={path} exact={exact} component={RouteComponent} />
  ) : (
    <Redirect to='/login' />
  );
};

export default PrivateRoute;
