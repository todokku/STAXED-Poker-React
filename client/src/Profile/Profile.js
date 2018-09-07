import React, { Component } from "react";
import { ListGroup, ListGroupItem, Glyphicon } from "react-bootstrap";
import "./Profile.css";
import axios from "axios";
import { API_URL } from "../constants";

class Profile extends Component {
  componentWillMount() {
    this.setState({ profile: {} });

    const { userProfile, getProfile } = this.props.auth;
    if (!userProfile) {
      getProfile((err, profile) => {
        this.setState({ profile });
      });
    } else {
      this.setState({ profile: userProfile });
    }
  }

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
