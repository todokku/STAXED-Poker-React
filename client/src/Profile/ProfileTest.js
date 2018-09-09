// Works with ProfileUser.js
import React, { Component } from "react";
import { ListGroup } from "react-bootstrap";
import "./Profile.css";
import axios from "axios";
import { API_URL } from "../constants";
// import logo from "../images/user-solid.png";
import ProfileUser from './ProfileUser';


class Profile extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     profile: {},
  //     users: {},
  //     user: {},
  //     emailString: "",
  //     userId: undefined,
  //     loading: true,
  //     _isMounted: false
  //   };
    // this.checkGrav = this.checkGrav.bind(this);
    // this.matchUserId = this.matchUserId.bind(this);
  // }


  // moved initial setState to constructor above.
  componentWillMount() {
    this.setState({profile: {}, users: {} , emailString: '',  loading: true })

    const { userProfile, getProfile } = this.props.auth;
    console.log(this.props.auth);

    if (!userProfile) {
      getProfile((err, profile, matchEmail) => {
        // if (this.checkGrav(profile.picture) === true) {
          // profile.picture = defaultPicture;
          // this.setState({ profile, emailString: profile.name });
          this.setState({ profile, emailString: profile.nickname });
          this.matchEmail(this.state.emailString)
          this.getUser(this.state.userId)
          console.log(this.state);
      });
    } else {
      this.setState({ profile: userProfile });
    }
    

    axios.get(`${API_URL}/user`)
    .then(response => {
      console.log('fetch to /user worked' + response);
      this.setState({
        loading: false,
        users: response.data
      });
      console.log(this.state);
    })
    .catch(error => console.log(error))
  }

  // checkGrav(str) {
  //   let containsGrav = /grav/.test(str);
  //   // console.log(containsGrav);
  //   return containsGrav;
  // }

  matchEmail(string) {
    console.log('Attempting to match ' + string);
    const usersArray = this.state.users;
    console.log(usersArray)
      for (let i = 0; i < usersArray.length; i++) {
        let userEmail = usersArray[i].email;
        let re = new RegExp(string, "gi");
        if (userEmail.match(re)) {
          console.log("YAY! found an email match with " + usersArray[i].email);
          this.setState({ userId: usersArray[i].id });
        } 
      }
  }


  getUser(input) {
    console.log('getUser being called')
    const id = input;
    axios
      .get(`${API_URL}/user/${id}`)
      .then(response => {
        console.log(response.data);
        this.setState({ user: response.data });
      })
      .catch(error => console.log(error));
  }

  render() {
    const { profile, users, emailString, userId, user } = this.state;
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
                <i className="far fa-user-circle"> {profile.name} - {emailString}</i>
              </div>
              {/* Changed profile.nickname to profile.name */}
              <div className="userdatalist">
                <div className="userbalance">
                  {/* <i className="far fa-clock"> Balance: {user.balanceHours}</i> */}
                </div>
                <div className="userqualifier">
                  <i className="far fa-thumbs-up">
                    {/* Qualifier: {user.qualifierHours} */}
                  </i>
                  {/* </button> */}
                </div>
              </div>
              {/* </div> */}
            </ListGroup>
          </div>
        </div>
        
        <div className="d-flex justify-content-center align-items-center">
        <ProfileUser profile={profile} users={users} username={emailString} userId={userId} user={user}/>
        </div>

      </div>
    );
  }
}

export default Profile;
