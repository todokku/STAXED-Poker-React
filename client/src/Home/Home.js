import React, { Component } from "react";
// import { Jumbotron, Button } from "react-bootstrap";
import "../Profile/Profile.css";
// import axios from 'axios';
// import { API_URL } from "../constants";
// import logo from "../images/user-solid.png";

class Home extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      users: {},
      profile: {},
      user: {}
    }
  }

  // componentWillMount() {
  //   const {userProfile, getProfile } = this.props.auth;
  //   const defaultPicture = logo;
  //   console.log('Auth: ', this.props.auth)

  //   axios.get(`${API_URL}/user`)
  //   .then(response => {
  //     console.log('Home Res:', response)
  //     this.setState({
  //       loading:false,
  //       users: response.data
  //     })
  //   })

  render() {
    console.log('Welcome Home')
    // const { isAuthenticated, login } = this.props.auth;
    const { isAuthenticated } = this.props.auth;
    return (
      <div className="container">
        {isAuthenticated() && 
        <div>
          <h4>You are logged in!</h4>
          <h4>Insert Steve Home Navigation Component</h4>
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
