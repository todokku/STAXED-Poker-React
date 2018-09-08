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
      emailString: '',
      userId: undefined,
      loading: true
    }
    this.checkGrav = this.checkGrav.bind(this);
    // this.matchUserId = this.matchUserId.bind(this);
  }

  // By the time componentDidMount is called, the component has been rendered once.
  // Consider logic from SingleItem. match email instead of :id?

  // 1) get userProfile Object - then user.email - from this.props.auth
  //    done for me already and stored in this.state.profile object.
  // 2) From profile object, set user.email/googleNickname in state. 
  // 3) using the userEmail in state, Match "users" item that regex matches the userEmail or googleUserName with database entries.

  // 4) set Matched "users"-item.id to userId in state.
  // 5) Use userId to make a /user/:id request.
  // 6) set response.data to user: {} in state. 
  componentDidMount() {
    console.log('component did finally mount');
  }

  // moved initial setState to constructor above.
  componentWillMount() {
    const { userProfile, getProfile } = this.props.auth;
    // Imported from line 6
    console.log(this.props.auth)
    const defaultPicture = logo;

    if (!userProfile) {
      getProfile((err, profile) => {
        console.log(profile);
        // normal signins
        if (this.checkGrav(profile.picture) === true) {
          profile.picture = defaultPicture;
          this.setState({ profile, emailString: profile.name });
          this.matchEmail(this.state.emailString)
          // console.log(this.state);
        } 
        // google signins return usernames as "profile.nickname" (keolazy1).
        else if (this.checkGrav(profile.picture) === false) {
          console.log("No grav... ");
          this.setState({ profile, emailString: profile.nickname });
          this.matchEmail(this.state.emailString)
          console.log(this.state);
        } else {
          console.log("if and else if, didn't happen....");
          this.setState({ profile });
        }
      });
    } else {
      this.setState({ profile: userProfile });
    }

    axios.get(`${API_URL}/user`)
    .then((response) => {
      console.log(response)
      this.setState({
        loading: false,
        users: response.data
      })
      console.log(this.state.emailString)
      this.matchEmail(this.state.emailString);
      console.log(this.state) // users{3} is populated. emailString filled.
      // this.matchEmail(this.state.emailString);
    })

  }

  // checks to see if profile.picture contains a bad stock photo.
  checkGrav(str) {
    let containsGrav = /grav/.test(str);
    // console.log(containsGrav);
    return containsGrav;
  }
 
  // string is going to be this.state.emailString.
  // will see if test passes the match with input. 
  matchEmail(string) {
    console.log(string);
    const usersArray = this.state.users;
    console.log(usersArray) // Array(3)
    for(let i = 0; i < usersArray.length; i++) {
      let userEmail = usersArray[i].email;
      let re = new RegExp(string, 'gi');
      // console.log(userEmail.match(re));
      if(userEmail.match(re)) {
        console.log('YAY! found an email match with ' + usersArray[i].email)
        this.setState({ userId: usersArray[i].id})
      }
      else {
        console.log("Sorry, no matches");
      }
    }
  }

  render() {
    const { profile } = this.state;
    return (
      <body>
        <div className="profile">
          <img src={profile.picture} alt="please" className="img-responsive" />

          <div className="details">
            <ListGroup>
              {/* <div className="userdatalist"> */}
              <div className="username">
                <i className="far fa-user-circle"> {profile.name}</i>
              </div>
              {/* changed profile.nickname to profile.name */}
              <div className="userdatalist">
                <div className="userbalance">
                  <i className="far fa-clock">
                    {" "}
                    Balance {profile.balanceHours}
                  </i>
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

