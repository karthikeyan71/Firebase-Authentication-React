import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { withRouter } from 'react-router';

import SignUp from './Other/signUpPage';
import SignIn from './Other/signInPage';
import ForgotPassword from './Other/forgotPassword';

const Routes = (props) => (
  <div className="route-container">
    <Switch>
      <Route exact path="/forgot-password" render={ () => <ForgotPassword {...props} /> } />
      <Route exact path="/sign-in" render={ ()=> <SignIn {...props} /> } />
      <Route path="/" render={ () => <SignUp {...props} /> } />
    </Switch>
  </div>
);

export default withRouter(Routes);
