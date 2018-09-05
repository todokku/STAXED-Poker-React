import React, { Component } from "react";
import { Panel, ControlLabel, Glyphicon } from "react-bootstrap";
import "./Profile.css";
import axios from 'axios';
import { API_URL } from '../constants';
import ItemsBody from '../component/ItemsBody';

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
      <div className="container">
        <div className="profile-area">
          <h1>{profile.name}</h1>
          <Panel header="Profile">
            <img src={profile.picture} alt="profile" />
            <div>
              <ControlLabel>
                <Glyphicon glyph="user" /> Name Here
              </ControlLabel>
              <h3>{profile.nickname}</h3>
            </div>
            <div>
              <ControlLabel>
                <Glyphicon glyph="user" /> Michael Whitzel
              </ControlLabel>
              <h3>{profile.nickname}</h3>
            </div>
            <pre>{JSON.stringify(profile, null, 2)}</pre>
          </Panel>
        </div>
      </div>
    );
  }
}

export default Profile;
