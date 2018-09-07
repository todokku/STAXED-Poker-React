import React, { Component } from 'react';
import axios from 'axios';
import UserCard from './UserCard';

class SingleItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      user: {} // {...user}
    };
  }

  componentWillMount() {
    const id = this.props.match.params.id;
    axios.get(`/api/user/${id}`).then((res) => {
      this.setState({
        loading: false,
        user: res.data
      });
    });
  }

  render() {
    if (this.state.loading) {
      return (
        <h3>Loading...</h3>
      );
    }
    return (
      <UserCard email={this.state.user.email} access={this.state.user.access}
      balanceHours={this.state.user.balanceHours} qualifierHours={this.state.user.qualifierHours} id={this.state.user.id} phone={this.state.user.phone} checkedIn={this.state.user.checkedIn}/>
    );
  }
}

export default SingleItem;