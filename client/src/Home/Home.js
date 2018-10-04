import React, { Component } from "react";
import "../Profile/Profile.css";

class Home extends Component {
  render() {
    console.log('Welcome Home')
    // const { isAuthenticated, login } = this.props.auth;
    const { isAuthenticated } = this.props.auth;
    return (
      <div className="container">
        {isAuthenticated() && 
        <div>
          <h4>Welcome Member!</h4>
        </div>}
        {!isAuthenticated() && <div />}
        <h1>RIVER CITY</h1>
        <br />
        <h2>CARD ROOM</h2>
        
      </div>
    );
  }
}

export default Home;
