import React from 'react';

import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';

import SignUp from '../pages/SignUp';

import Dashboard from '../pages/Dashboard';

import ForgotPassword from '../pages/ForgotPassword';

import ResetPassword from '../pages/ResetPassword';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" component={SignUp} />
    <Route path="/forgotpassword" component={ForgotPassword} />
    <Route path="/resetpassword" component={ResetPassword} />
    <Route path="/dashboard" component={Dashboard} isPrivate />
  </Switch>
);

export default Routes;
