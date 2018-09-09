import React, { Component } from 'react';
import ListUsers from './ListUsers';
import ListUser from './ListUser';
import { API_URL } from "../constants";
import axios from 'axios';
import _ from 'lodash';
// import { Button } from "react-bootstrap";

class AdminControl extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: {},
      loading: true
    }
  }

// _isMounted = false;

renderUsers() {
  return _.map(this.state.users, user => {
    return (
      <ListUser
        key={user.id}
        id={user.id}
        access={user.access}
        email={user.email}
        phone={user.phone}
        balanceHours={user.balanceHours}
        qualifierHours={user.qualifierHours}
      />
    );
    });
  }

handleButtonClick = async () => {
  const response = await axios.get(`${API_URL}/admin/users`)
  if(this._isMounted) {
    console.log("component is mounted, so users being fetched and stored")
    this.setState({ user: response.data, loading: false })
  }
}

componentWillMount() {
  
    axios.get(`${API_URL}/admin/users`)
    .then(response => {
      console.log(response)
        this.setState({
          loading:false,
          users: response.data
        }) 
    })
  
}
  
componentDidMount() {
  this._isMounted = true
}
  
componentWillUnmount() {
  this._isMounted = false
}
          
  render() {
    // if(this.state.loading)
    // return <div>Component Loading...</div>

    return (
      <div>
        <div>All Users List</div>
        <ListUsers>
          {this.renderUsers()}
        </ListUsers>
      </div>
    )
  }
}

export default AdminControl;
