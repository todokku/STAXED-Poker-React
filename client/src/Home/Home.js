import React, { Component } from "react";
// import { Jumbotron, Button } from "react-bootstrap";
import "../Home/Home.css";

class Home extends Component {
  render() {
    // const { isAuthenticated, login } = this.props.auth;
    const { isAuthenticated } = this.props.auth;
    return (
      <body>
        <div className="jumbotron vertical-center container-fluid">
          <div className="container text-center">
            <div className="container">
              {isAuthenticated() && <h4>You are logged in!</h4>}
              {!isAuthenticated() && <div />}
            </div>
            <h1>Home</h1>
          </div>
        </div>
      </body>
    );
  }
}

export default Home;
