import React, { Component } from 'react';
import ListUsers from './ListUsers';
import ListUser from './ListUser';
import axios from 'axios';
import _ from 'lodash';


class ItemsBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      users: {}
    }
  };

  componentWillMount() {
    axios.get('/api/user')
      .then((response) => {
      console.log(response);
      this.setState(
        { loading: false,
          users: response.data 
        }
      )
    });
  }

  renderUsers() {
    return _.map(this.state.users, (user) => {
      return ( 
        <ListUser key={user.id} access={user.access} email={user.email} balanceHours={user.balanceHours} qualifierHours={user.qualifierHours}  />
      );
    });
  }

  render() {
    if (this.state.loading)
      return (<div>Loading...</div>);

    return (
      <ListUsers>
        {this.renderUsers()}
      </ListUsers>
    );
  }
}

export default ItemsBody;


