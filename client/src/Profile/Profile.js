import React, { Component } from "react";
import { ListGroup, ListGroupItem, Glyphicon } from "react-bootstrap";
import "./Profile.css";
import axios from "axios";
import { API_URL } from "../constants";

// profile = user object from auth0
// userProfiles = users object from my database
// Need to only return one object that matches res.user.email/res.user.id AND assign it to let = userID; pass this variable into a template string `${API_URL}/${userID}`
class Profile extends Component {
  componentWillMount() {
    this.setState({ profile: {}, userProfiles: {}, userProfile: {} });

    const { userProfile, getProfile } = this.props.auth;
    if (!userProfile) {
      getProfile((err, profile) => {
        this.setState({ profile });
      });
    } else {
      this.setState({ profile: userProfile });
    }
  }

  // getUsers() {
  //   axios.get(`${API_URL}/user`)
  //     .then(res => this.setState({ userProfiles: res.data}))
  //     .catch(error => console.log(error.message))
  // }

  //
  // getUser() {
  //   axios.get(`${API_URL}/user/${userID}`)
  //     .then(response => this.setstate({ userProfile: res.data }))
  //     .catch(error => console.log(error.message)
  // }

  // ADMIN only request looks like function below
  // securedPing() {
  //   const { getAccessToken } = this.props.auth;
  //   const headers = { 'Authorization': `Bearer ${getAccessToken()}`}
  //   axios.get(`${API_URL}/private`, { headers })
  //     .then(response => this.setState({ message: response.data.message }))
  //     .catch(error => this.setState({ message: error.message }))
  // }

  render() {
    const { profile } = this.state;
    return (
      <body>
        <div className="profile">
          <img src={profile.picture} alt="profile" />
          <div className="details">
            <ListGroup>
              {/* <div className="userdatalist"> */}
              <div className="username">
                <i class="far fa-user-circle"> {profile.name}</i>
              </div>
              {/* changed profile.nickname to profile.name */}
              <div className="userdatalist">
                <div className="userbalance">
                  <i class="far fa-clock"> Balance {profile.balanceHours}</i>
                </div>

                <div className="userqualifier">
                  {/* <a class="btn-floating pulse"><i class="material-icons">menu</i></a> */}
                  Qualifier {profile.qualifierHours}
                </div>
              </div>
              {/* </div> */}
            </ListGroup>
          </div>
        </div>
      </body>
    );
  }
}

export default Profile;
