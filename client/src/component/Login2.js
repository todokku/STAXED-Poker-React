import React, { Component } from 'react';
// import fire from '../config/constants';
import firebase from "firebase";

class Login2 extends Component {
  constructor(props) {
    super(props);

    this.login = this.login.bind(this);
    this.signup = this.signup.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      email: "",
      password: ""
    }
  };
  
  googleSignin(e) {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => {
        let token = result.credential.accessToken;
        let user = result.user;
        console.log(token);
        console.log(user);
      })
      .catch(error => {
        let errorCode = error.code;
        let errorMessage = error.message;
        let email = error.email;
        let credential = error.credential;
      });
  }

  // Authenticate w/ firebase using Password-Based Accounts Using JS
  login(ev) {
    ev.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .catch((error) => {
        // Handle Errors Here
        console.log(error);
        let errorCode = error.code;
        let errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      })
  }

  signup(e) {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {
        console.log(u);
      })
      .catch(error => {
        let errorCode = error.code;
        let errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        console.log(error);
      });
  }
  

  // logout(ev) {
  //   ev.preventDefault();
  //   fire
  //     .auth()
  //     .signOut()
  //     .then(() => {
  //       // Sign Out Successful
  //       console.log('Succesfully Signed out');
  //     })
  //     .catch((error) => {
  //       console.log('An Error Happened: ' + error);
  //     })
  // }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className="uk-height-1-1">
        <div className="uk-flex uk-flex-center uk-flex-middle uk-background-secondary uk-height-viewport uk-light">
          <div className="uk-width-medium uk-padding-small">
            <form action="login-dark.html">
              <fieldset className="uk-fieldset">
                <legend className="uk-legend">River City Card Room</legend>
                <div className="uk-margin">
                  <div className="uk-inline uk-width-1-1">
                    <span
                      className="uk-form-icon uk-form-icon-flip"
                      data-uk-icon="icon: user"
                    />
                    <input
                      value={this.state.email}
                      onChange={this.handleChange}
                      type="text"
                      name="email"
                      className="uk-input uk-form-large form-control"
                      id="exampleInputEmail"
                      aria-describedby="emailHelp"
                      // required
                      placeholder="Email"
                    />
                  </div>
                </div>

                <div className="uk-margin">
                  <div className="uk-inline uk-width-1-1">
                    <span
                      className="uk-form-icon uk-form-icon-flip"
                      data-uk-icon="icon: lock"
                    />
                    <input
                      value={this.state.password}
                      onChange={this.handleChange}
                      type="password"
                      name="password"
                      className="uk-input uk-form-large form-control"
                      id="exampleInputPassword1"
                      // required
                      placeholder="Password"
                    />
                  </div>
                </div>

                <div className="uk-margin">
                  <label>
                    <input className="uk-checkbox" type="checkbox" /> Keep me
                    logged in
                  </label>
                </div>
                <div className="uk-margin">
                  <button
                    type="submit"
                    onClick={this.login}
                    className="uk-button uk-button-primary uk-button-primary uk-button-large uk-width-1-1"
                  >
                    LOG IN
                  </button>
                </div>

                <div className="uk-margin">
                  <button
                    type="submit"
                    onClick={this.signup}
                    className="uk-button uk-button-secondary uk-button-secondary uk-button-large uk-width-1-1"
                  >
                    SIGNUP
                  </button>
                </div>
                <div className="uk-margin">
                  <button
                    type="submit"
                    onClick={this.googleSignin}
                    className="uk-button uk-button-secondary uk-button-secondary uk-button-large uk-width-1-1"
                  >
                    Google Signin
                  </button>
                </div>
              </fieldset>
            </form>
            <div>
              <div className="uk-text-center">
                <a
                  className="uk-link-reset uk-text-small"
                  data-uk-toggle="target: #recover;animation: uk-animation-slide-top-small"
                >
                  Forgot your password?
                </a>
              </div>
              <div className="uk-margin-small-top" id="recover" hidden>
                <form action="login-dark.html">
                  <div className="uk-margin-small">
                    <div className="uk-inline uk-width-1-1">
                      <span
                        className="uk-form-icon uk-form-icon-flip"
                        data-uk-icon="icon: mail"
                      />
                      <input
                        className="uk-input"
                        placeholder="E-mail"
                        required
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="uk-margin-small">
                    <button
                      type="submit"
                      className="uk-button uk-button-primary uk-button-primary uk-width-1-1"
                    >
                      SEND PASSWORD
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  
    
}


export default Login2;



{/* <div>
<div class="g-signin2" data-width="300" data-height="50" data-longtitle="true"></div>
</div> */}