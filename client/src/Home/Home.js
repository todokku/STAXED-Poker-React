import React, { Component } from "react";
// import { Jumbotron, Button } from "react-bootstrap";
import "../Profile/Profile.css";

class Home extends Component {
  render() {
    // const { isAuthenticated, login } = this.props.auth;
    const { isAuthenticated } = this.props.auth;
    return (
      <div className="container">
        {/* {isAuthenticated() && <h4>You are logged in!</h4>}
        {!isAuthenticated() && <div />} */}
        <h1>RIVER CITY</h1>
        <br />
        <h2>CARD ROOM</h2>
      </div>
    );
  }
}

export default Home;
