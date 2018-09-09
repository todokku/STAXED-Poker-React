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
      loading: true
    };
    this.checkGrav = this.checkGrav.bind(this);
    // this.matchUserId = this.matchUserId.bind(this);
  }


  // moved initial setState to constructor above.
  componentWillMount() {
    const { userProfile, getProfile } = this.props.auth;
    // Imported from line 6
    console.log(this.props.auth);
    const defaultPicture = logo;

    if (!userProfile) {
      getProfile((err, profile) => {
        if (this.checkGrav(profile.picture) === true) {
          profile.picture = defaultPicture;
          this.setState({ profile, emailString: profile.name });
          // this.matchEmail(this.state.emailString)
          // console.log(this.state);
        } 
        else if (this.checkGrav(profile.picture) === false) {
          console.log("This must be a gmail account... ");
          this.setState({ profile, emailString: profile.nickname });
          this.matchEmail(this.state.emailString)
          // Now I need userId to make another fetch.
          this.getUser(this.state.userId) 
        } else {
          console.log("if and else if, didn't happen....");
          this.setState({ profile });
        }
      });
    } else {
      this.setState({ profile: userProfile });
    }

    axios.get(`${API_URL}/user`).then(response => {
      console.log(response);
      this.setState({
        loading: false,
        users: response.data
      });
      console.log(this.state.emailString);
      this.matchEmail(this.state.emailString);
      console.log(this.state); // users{3} is populated. emailString filled.
      // this.matchEmail(this.state.emailString);
    });
  }

  checkGrav(str) {
    let containsGrav = /grav/.test(str);
    // console.log(containsGrav);
    return containsGrav;
  }
  
  matchEmail(string) {
    console.log(string);
    const usersArray = this.state.users;
    for(let i = 0; i < usersArray.length; i++) {
      let userEmail = usersArray[i].email;
      let re = new RegExp(string, "gi");
      // console.log(userEmail.match(re));
      if(userEmail.match(re)) {
        console.log('Found emailString match with ' + usersArray[i].email)
        this.setState({ userId: usersArray[i].id})
      }
    }
  }

  getUser(input) {
    console.log('getUser being called')
    const id = input 
    axios.get(`${API_URL}/user/${id}`)
    .then((response) => {
      console.log(response.data); // returns (1) user object that matches auth.
      this.setState( { user: response.data})
    })
    .catch(error => console.log(error))
  }

  render() {
    const { profile, user } = this.state;
    return (
      <div>
        <div className="profile">
          <img src={profile.picture} className="profile-default" alt="profile"/>

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
                  <i className="far fa-clock">
                    {" "}
                    Balance {user.balanceHours}
                  </i>
                </div>
                <div className="userqualifier">
                  {/* <i class="far fa-heart"> */}
                  {/* <i class="far fa-bookmark"> */}
                  {/* <i class="far fa-bell"> */}
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
