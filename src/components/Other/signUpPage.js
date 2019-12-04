import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './page.css';

export default class SignUp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      message: ''
    }
  }

  changeEmail = ({target: { value }}) => {
    this.setState({
      email: value
    });
  }

  changePassword = ({target: { value }}) => {
    this.setState({
      password: value
    });
  }

  signUp = () => {
    const { firebase }  = this.props;
    const { email, password } = this.state;
    firebase.newUserCreation( email, password ).then((response) => {
      this.setState({
        message: 'Account created successfully, proceed with signing in'
      })
    }).catch((err) => {
      this.setState({
        message: err.message
      });
      console.log(`Error occured : ${err}`);
    });
  }

  render() {
    const { email, password, message } = this.state;

    return (
        <div>
          <h1> Sign Up </h1>
          <div className="form-container">
            <br/>
            <br/>
            <input type="text" onChange={this.changeEmail} value={email} placeholder="Your email Id" />
            <input type="password" onChange={this.changePassword} value={password} placeholder="Your email password" />
            <br/>
            { message && (<span> { message } </span>) }
            <br/>
            <div className="button-holder">
              <button onClick={this.signUp} > Submit </button>
              <Link to='/sign-in' className="link"><button> Sign-In </button> </Link>
            </div>
            <br />
            <p> Dont remember the password? <span className="blue" onClick={this.forgotPassword} > <Link to='/forgot-password'> click here </Link> </span> </p>
          </div>
        </div>
      );

  }
}
