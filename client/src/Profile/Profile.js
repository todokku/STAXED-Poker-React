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
    this.state = {
      profile: {},
      users: {},
      user: {},
      emailString: "",
      userId: undefined,
      loading: true,
      isMounted: ''
    };
    this.checkGrav = this.checkGrav.bind(this);
    // this.matchUserId = this.matchUserId.bind(this);
  }


  // Try version where helper functions return values to be stored variables
  // and setState isn't called till the very end.
  componentWillMount() {
    const { userProfile, getProfile } = this.props.auth;
    // Imported from line 6
    console.log(this.props.auth);
    const defaultPicture = logo;

    // Async fetch. if/else logic should only run after this.
    axios.get(`${API_URL}/user`)
      .then(response => {
      console.log(response);
      this.setState({
        loading: false,
        users: response.data
      }
      , this.matchUsernameForId(this.state.emailString));
     })
    

    // pass callback in setState to ensure proper reconciliation OR componentDidUpdate
    if (!userProfile) {
      getProfile((err, profile) => {
        if (this.checkGrav(profile.picture) === true) {
          profile.picture = defaultPicture;
          console.log(profile)
          // this.setState({ profile, emailString: profile.name }, this.matchUsernameForId(this.state.emailString));
          // this.matchEmail(this.state.emailString);
          // this.getUser(this.state.userId)
          axios.get(`${API_URL}/user`).then(response => {
            console.log(response);
            this.setState({
              loading: false,
              profile,
              emailString: profile.name,
              users: response.data
            }, this.matchUsernameForId(this.state.emailString));
          });
        }
        // google signins return usernames as "profile.nickname" (keolazy1).
        else if (this.checkGrav(profile.picture) === false) {
          console.log("This must be a gmail account... ");
          // this.setState({ profile, emailString: profile.nickname }, this.matchUsernameForId(this.state.emailString));
          // this.matchEmail(this.state.emailString);
          // this.getUser(this.state.userId);
          axios.get(`${API_URL}/user`).then(response => {
            console.log(response);
            this.setState({
              loading: false,
              profile,
              emailString: profile.nickname,
              users: response.data
            }, this.matchUsernameForId(this.state.emailString));
          });
        } else {
          console.log("if and else if, didn't happen....");
          this.setState({ profile });
        }
      });
    } else {
      this.setState({ profile: userProfile });
    }
  // End of componentWillUnount()
  }

  // componentDidUpdate() {
  //   console.log('component did update');
  //   console.log(this.state);
  // }

  // componentDidMount() {
  //   console.log(this.state + 'Mounted')
  // }

  checkGrav(str) {
    let containsGrav = /grav/.test(str);
    // console.log(containsGrav);
    return containsGrav;
  }

  userFetch(id) {
    axios
    .get(`${API_URL}/user/${id}`)
    .then(response => { 
      this.setState( { userId: id, user: response.data}, () => console.log(this.state))
    })
    .catch(error => console.log(error))
  }

  // Function for gmail usernames: combine matchEmail() with getUser
  matchUsernameForId(string) {
    console.log(string);
    let uniqueId = -1;
    const usersArray = this.state.users;
    for (let i = 0; i < usersArray.length; i++) {
      let userEmail = usersArray[i].email;
      let re = new RegExp(string, "gi");
      // console.log(userEmail.match(re));
      if (userEmail.match(re).length < 25) {
        console.log("YAY! found an email match with " + usersArray[i].email);
        uniqueId = usersArray[i].id
        console.log(uniqueId)
        this.userFetch(uniqueId)
      } else {
        uniqueId = usersArray[i].id;
        console.log(uniqueId);
        console.log("Sorry, username didn't match");
      }
    }
  
  }


  render() {
    const { profile, user } = this.state;
    // Handle conditional render code below
    if(!this.state.user.balanceHours) {
      return (
        <div>Loading... If stats do not render, please try refreshing. {profile.name} - {user.balanceHours}</div>
      )
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