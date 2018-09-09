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
<<<<<<< HEAD
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
    console.log("component did finally mount");
  }
=======
    // this.matchEmail = this.matchEmail.bind(this);
  }  
>>>>>>> ce6dee5d73368e79ce1c9888e1d9c29743e564ad

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
<<<<<<< HEAD
          this.matchEmail(this.state.emailString);
          // console.log(this.state);
        }
        // google signins return usernames as "profile.nickname" (keolazy1).
=======
          // this.matchEmail(this.state.emailString)
          // console.log(this.state);
        } 
>>>>>>> ce6dee5d73368e79ce1c9888e1d9c29743e564ad
        else if (this.checkGrav(profile.picture) === false) {
          console.log("This must be a gmail account... ");
          this.setState({ profile, emailString: profile.nickname });
<<<<<<< HEAD
          this.matchEmail(this.state.emailString);
          console.log(this.state);
=======
          this.matchEmail(this.state.emailString)
          // Now I need userId to make another fetch.
          this.getUser(this.state.userId) 
>>>>>>> ce6dee5d73368e79ce1c9888e1d9c29743e564ad
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
<<<<<<< HEAD
      });
      console.log(this.state.emailString);
      this.matchEmail(this.state.emailString);
      console.log(this.state); // users{3} is populated. emailString filled.
      // this.matchEmail(this.state.emailString);
    });
=======
      })
      this.matchEmail(this.state.emailString);
      console.log(this.state);
      // Consider doing another fetch here.
    })

>>>>>>> ce6dee5d73368e79ce1c9888e1d9c29743e564ad
  }

  componentDidMount() {
    // axios.get(`${API_URL}/user/${this.state.userId}`)
    //   .then((response) => {
    //     if(!response) {
    //       throw Error("Network Request Failed")
    //     }
    //     return response.data
    //   })
    //   .then(data => data.json())
    //   .then(data => {
    //     this.setState({
    //       user: data
    //     })
    //   })
  }

  checkGrav(str) {
    let containsGrav = /grav/.test(str);
    // console.log(containsGrav);
    return containsGrav;
  }
<<<<<<< HEAD

  // string is going to be this.state.emailString.
  // will see if test passes the match with input.
  matchEmail(string) {
    console.log(string);
    const usersArray = this.state.users;
    console.log(usersArray); // Array(3)
    for (let i = 0; i < usersArray.length; i++) {
=======
  
  matchEmail(string) {
    console.log(string);
    const usersArray = this.state.users;
    for(let i = 0; i < usersArray.length; i++) {
>>>>>>> ce6dee5d73368e79ce1c9888e1d9c29743e564ad
      let userEmail = usersArray[i].email;
      let re = new RegExp(string, "gi");
      // console.log(userEmail.match(re));
<<<<<<< HEAD
      if (userEmail.match(re)) {
        console.log("YAY! found an email match with " + usersArray[i].email);
        this.setState({ userId: usersArray[i].id });
      } else {
        console.log("Sorry, no matches");
=======
      if(userEmail.match(re)) {
        console.log('Found emailString match with ' + usersArray[i].email)
        this.setState({ userId: usersArray[i].id})
>>>>>>> ce6dee5d73368e79ce1c9888e1d9c29743e564ad
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
      <body>
        <div className="profile">
          <img src={profile.picture} className="profile-default" />

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
<<<<<<< HEAD
                    Balance: {profile.balanceHours}
=======
                    Balance {user.balanceHours}
>>>>>>> ce6dee5d73368e79ce1c9888e1d9c29743e564ad
                  </i>
                </div>
                <div className="userqualifier">
<<<<<<< HEAD
                  {/* <i class="far fa-heart"> */}
                  {/* <i class="far fa-bookmark"> */}
                  {/* <i class="far fa-bell"> */}
                  <i class="far fa-thumbs-up">
                    {" "}
                    {/* <button class="pulse-button"> */}
                    {/* <a class="btn-floating pulse"><i class="material-icons">menu</i></a> */}
                    Qualifier: {profile.qualifierHours}
                  </i>
                  {/* </button> */}
=======
                  {/* <a class="btn-floating pulse"><i class="material-icons">menu</i></a> */}
                  Qualifier {user.qualifierHours}
>>>>>>> ce6dee5d73368e79ce1c9888e1d9c29743e564ad
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
