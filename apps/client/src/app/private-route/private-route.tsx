import React from 'react';
import { useAuth } from '../auth-content/auth-content';
import { Route, Redirect } from 'react-router-dom';
import './private-route.module.scss';

/* eslint-disable-next-line */
export interface PrivateRouteProps {}

const PrivateRoute: React.FC = (props: PrivateRouteProps) => {
  const { user } = useAuth();

  return user ? (
    <Route path={props.path} exact={props.exact} component={props.component} />
  ) : (
    <Redirect to='/login' />
  );
};

export default PrivateRoute;
