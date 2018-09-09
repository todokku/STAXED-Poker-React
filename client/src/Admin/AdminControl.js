import React, { Component } from 'react';
import axios from 'axios';
import { API_URL } from "./../constants";
// import _ from 'lodash';

class AdminControl extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: {},
      loading: true
    }
  }

  getUsers() {
    axios
    .get(`${API_URL}/admin/users`)
    .then(response => {
      console.log(response)
      this.setState({ users: response.data})
    })
  }

  render() {
    return (
      <div>
        <h1>Admin Control Center</h1>
        <h6>{this.props.testProps}</h6>
      </div>
    )
  }
}

export default AdminControl;