import React, { Component } from "react";
import { ListGroup } from "react-bootstrap";
import "./Profile.css";
import axios from "axios";
import { API_URL } from "../constants";
import logo from "../images/user-solid.png";
// const db = require('../../db')

class Profile extends Component {
  constructor(props) {
    super(props);
    console.log("Profile props:", props)
    this.state = {
      profile: {},
      users: {},
      user: {},
      username: "",
      userId: null,
      loading: true,
      isMounted: ""
    };
    this.checkGrav = this.checkGrav.bind(this);
    this.matchEmailForId = this.matchEmailForId.bind(this);
    this.matchUsernameForId = this.matchUsernameForId.bind(this);
    this.userFetch = this.userFetch.bind(this);
  }
  // Trigger a child component to re-render.
  // Use this to trigger child to rerender when parent state updates.
  // componentWillReceiveProps(props) {
  //   const { refresh, id } = this.props;
  //   if(this.props !== refresh ) {
  //     this.fetchData(id)
  //       .then(this.refreshUserList)
  //   }
  // }

  componentWillMount() {
    const { userProfile, getProfile } = this.props.auth;
    const defaultPicture = logo;
    // console.log(this.props.users)
    console.log("Profile auth: ", this.props.auth);

    // Async fetch. if/else logic should only run after this.
    axios.get(`${API_URL}/user`).then(response => {
      this.setState({
        loading: false,
        users: response.data
      });
    });

    // pass callback in setState to ensure proper reconciliation OR componentDidUpdate
    if (!userProfile) {
      getProfile((err, profile) => {
        if (this.checkGrav(profile.picture) === true) {
          console.log("this must be a normal account", profile);
          profile.picture = defaultPicture;
          axios.get(`${API_URL}/user`).then(response => {
            console.log("No userProfile fetch: ", response);
            this.setState(
              {
                loading: false,
                profile,
                username: profile.name,
                users: response.data
              },
              this.matchEmailForId(profile.name)
            );
          });
        }
        // google signins return usernames as "profile.nickname" (keolazy1).
        else if (this.checkGrav(profile.picture) === false) {
          console.log("This must be a GMAIL account... ");
          axios.get(`${API_URL}/user`).then(response => {
            console.log(response);
            this.setState(
              {
                loading: false,
                profile,
                username: profile.nickname,
                users: response.data
              },
              this.matchUsernameForId(this.state.username)
            );
          });
        } else {
          console.log("if and else if, didn't happen....");
          this.setState({ profile });
        }
      });
    } else {
      this.setState({ profile: userProfile });
    }
  } 
  // End of componentWillUnount()


  checkGrav(str) {
    let containsGrav = /grav/.test(str);
    return containsGrav;
  }

  // handleUserFetchChange? Used in both matchEmail and matchUsername
  userFetch(id) {
    axios
      .get(`${API_URL}/user/${id}`)
      .then(response => {
        this.setState({ userId: id, user: response.data }, () =>
          this.setState({ state: this.state })
        );
      })
      .catch(error => console.log(error));
  }

  // match function for email.
  matchEmailForId(str) {
    let uniqueId = -1;
    const usersArray = this.state.users;
    for (let i = 0; i < usersArray.length; i++) {
      let userEmail = usersArray[i].email;
      console.log(userEmail);
      if (userEmail === str) {
        console.log("YAY! found an email match with " + usersArray[i].email);
        uniqueId = usersArray[i].id;
        console.log(uniqueId);
        this.userFetch(uniqueId);
        break;
      } else {
        // uniqueId = usersArray[i].id;
        // console.log(uniqueId);
        console.log("Sorry, email didn't match");
      }
    }
  }

  // match function for gmail usernames: combine matchEmail() with getUser
  matchUsernameForId(string) {
    let uniqueId = -1;
    const usersArray = this.state.users;
    for (let i = 0; i < usersArray.length; i++) {
      let userEmail = usersArray[i].email;
      let re = new RegExp(string, "gi");
      // console.log(userEmail.match(re));
      if (userEmail.match(re).length < 25) {
        console.log("state @ matchUsernameForId: ", this.state);
        console.log("YAY! found an email match with " + usersArray[i].email);
        uniqueId = usersArray[i].id;
        console.log(uniqueId);
        this.userFetch(uniqueId);
        break;
      } else {
        console.log("Sorry, username didn't match");
      }
    }
  }

  // handle change
  refreshUser() {
    console.log("handled change")
  }

  // component.forceUpdate(callback)

  render() {
    const { profile, user } = this.state;
    // Handle conditional render code below
    if (!this.state.user.balanceHours) {
      return (
        <div>
          Loading... If stats do not render, please try refreshing.{" "}
          {profile.name} - {user.balanceHours}
        </div>
      );
    }

    return (
      <div>
        <div className="profile">
          <img
            src={profile.picture}
            className="profile-default"
            alt="profile"
          />

          <div className="details">
            <ListGroup>
              {/* <div className="userdatalist"> */}
              <div className="username">
                {/* Can fix the default profile picture sizing issue
                      by resizing the src/images/user-solid.png manually  */}
                <i className="far fa-user-circle"> {profile.name}</i>
              </div>
              {/* Changed profile.nickname to profile.name */}
              <div className="userdatalist">
                <div className="userbalance">
                  <i className="far fa-clock"> Balance: {user.balanceHours}</i>
                </div>
                <div className="userqualifier">
                  {/* <i className="far fa-heart"> */}
                  {/* <i className="far fa-bookmark"> */}
                  {/* <i className="far fa-bell"> */}
                  <i className="far fa-thumbs-up">
                    {" "}
                    {/* <button class="pulse-button"> */}
                    {/* <a class="btn-floating pulse"><i class="material-icons">menu</i></a> */}
                    Qualifier: {user.qualifierHours}
                  </i>
                  {/* </button> */}
                </div>
              </div>
              {/* </div> */}
            </ListGroup>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
