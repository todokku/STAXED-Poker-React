import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { API_URL } from "./../constants";
import axios from "axios";
import "../Admin/Admin.css";

class Admin extends Component {
  componentWillMount() {
    this.setState({ message: "", admins: {} });
  }

  adminPing() {
    const { getAccessToken } = this.props.auth;
    const headers = { Authorization: `Bearer ${getAccessToken()}` };
    axios
      .post(`${API_URL}/admin`, {}, { headers })
      .then(response => this.setState({ message: response.data.message }))
      .catch(error => this.setState({ message: error.message }));
  }

  getAdmins() {
    axios.get(`${API_URL}/admin`).then(response => {
      console.log(response);
      this.setState({ admins: response.data });
    });
  }

  getUsers() {}

  render() {
    const { message } = this.state;
    return (
      <div>
        {/* <body> */}
        <div className="jumbotron vertical-center container-fluid">
          <div className="container text-center">
            <div className="container">
              <h2>You are an Admin!</h2>
              <p>
                Only users who have a <code>scope</code> of{" "}
                <code>write:messages</code> in their <code>access_token</code>{" "}
                can see this area. Eventually, read:users, update:users
              </p>
              <hr />

              <h3>Call an Admin endpoint</h3>
              <Button
                className="btn btn-primary"
                bsSize="small"
                onClick={this.adminPing.bind(this)}
              >
                Post a Message. Or User
              </Button>
              <Button
                className="btn btn-secondary"
                onClick={this.getAdmins.bind(this)}
              >
                Get Admins
              </Button>

              <h2>{message}</h2>
            </div>
          </div>
        </div>
        {/* </body> */}
      </div>
    );
  }
}

export default Admin;
