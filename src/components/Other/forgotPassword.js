import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ForgotPassword extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      message: ''
    }
  }

  changeEmail = ({target: { value }}) => {
    this.setState({
      email: value
    });
  }

  emailTrigger = () => {
    const { email } = this.state;
    const { firebase } = this.props;
    firebase.passwordReset(email).then((response) => {
      console.log(response);
      this.setState({
        message: 'Email sent. Check your inbox to reset the password'
      })
    }).catch(err => {
      this.setState({
        message: err.message
      })
      console.log(`Error Occured : ${err}`);
    })
    console.log('inside the function emailTrigger');
  }

  render() {
    const { email, message } = this.state;

    return (
      <div>
        <h1> Forgot Password </h1>
        <br />
        <br />
        <div className="form-container">
          <input type="text" onChange={this.changeEmail} value={email} placeholder="Your email Id" />
          <br />
          <br />
          { message && (<p> { message } </p>) }
          <br />
          <button onClick={this.emailTrigger}> Send reset mail </button>
          <Link to='/sign-in' className="link"><button> Sign-In </button> </Link>
        </div>
      </div>
    );
  }
}
