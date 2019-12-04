import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SignIn extends Component {

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

  signIn = () => {
    const { firebase }  = this.props;
    const { email, password } = this.state;
    firebase.signInUser( email, password ).then( (response)=> {
      console.log(response);
      this.setState({
        message: 'Successfully signed In'
      });
    }).catch(err => {
      this.setState({
        message: err.message
      });
      console.log(`Error occured : ${err}`);
    });

  }

  render() {
    const { email, password } = this.state;

    return (
      <div>
        <h1> Sign In </h1>
        <div className="form-container">
          <br/>
          <br/>
          <input type="text" onChange={this.changeEmail} value={email} placeholder="Your email Id" />
          <input type="password" onChange={this.changePassword} value={password} placeholder="Your email password" />
          <br/>
          <br/>
          <div className="button-holder">
            <button onClick={this.signIn}> Sign-In </button>
            <Link to='/' className="link"><button> Sign-Up </button> </Link>
          </div>
          <br />
          <p> Dont remember the password? <span className="blue" onClick={this.forgotPassword} > <Link to='/forgot-password'> click here </Link> </span> </p>
        </div>
      </div>
    )
  }
}
