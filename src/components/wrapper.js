import React, { Component } from 'react';
// import Something from './Other/something';
import SignUp from './Other/signUpPage';
import { FirebaseContext } from './firebase';
import { BrowserRouter } from 'react-router-dom';
import Routes from './router';
import './Other/page.css';

export default class Wrapper extends Component {
  render() {
    return (
      <div className="main-container">
        <BrowserRouter>
          <FirebaseContext.Consumer>
          {(Firebase)=> (
            <Routes firebase={Firebase} />
          )}
          </FirebaseContext.Consumer>
        </BrowserRouter>
      </div>
    );
  }
}
