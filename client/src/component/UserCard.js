import React, { Component } from 'react';
import SingleUserList from './SingleUserList';
import CreateEditUser from './CreateEditUser';

class UserCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      id: props.id,
      access: props.access,
      balanceHours: props.balanceHours,
      qualifierHours: props.qualifierHours,
    };
    this.onEdit = this.onEdit.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  onEdit() {
    this.setState({
      editing: !this.state.editing
    });
  }

  updateState(email, access, balanceHours, qualifierHours) {
    this.setState({
      email: email,
      access: access,
      balanceHours: balanceHours,
      qualifierHours: qualifierHours,
    });
  }

  render() {
    const { email, access } = this.state;
    if (this.state.editing) {
      return (
        <CreateEditUser email={email} access={access} toggleEdit={this.onEdit} id={this.props.id}
                        updateState={this.updateState}/>
      );
    }

    return (
      <SingleUserList email={email} access={access} onEdit={this.onEdit} id={this.props.id}/>
    );
  }
}

export default UserCard;