import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class SingleUserEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.id || '',
      email: props.email || '',
      access: props.access || '',
      balanceHours: props.balanceHours || '',
      qualifierHours: props.qualifierHours || '',
      phone: props.phone || ''
    };

    this.onChangeItem = this.onChangeItem.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChangeItem(event) {
    const target = event.target;
    const name = target.name;

    this.setState({
      [name]: target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { email, balanceHours, access, qualifierHours } = this.state;
    const { id, history } = this.props;
    //We're editing
    if (id) {
      axios.put(`/api/user/${id}`, {
          id: props.id,
          email: props.email,
          access: props.access,
          balanceHours: props.balanceHours,
          qualifierHours: props.qualifierHours
      }).then(() => {
        this.props.updateState(title, access); // access was formerly is_done and evaluted to string 'true'
        this.props.toggleEdit();
      });
    } else {
      //we're not
      axios.post('/api/user', { email:: email, balanceHours: balanceHours, access: access, qualifierHours: qualifierHours, phone: phone }).then(() => {
        history.push('/')
      });
    }
  }

  render() {
    const { access, email, access, balanceHours, qualifierHours } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Username Here</label>
          <input name="title" type="text" className="form-control" id="title" value={title}
                 onChange={this.onChangeItem}/>
        </div>
        <div className="form-group">
          <label htmlFor="access">User CheckedIn?</label>
          <select name="access" className="form-control" id="is-done" value={access}
                  onChange={this.onChangeItem}>
            <option value="admin">Admin?</option>
            <option value="member">Member?</option>
          </select>
          <div className="d-flex justify-content-between align-items-center mt-3">
            <button type="submit" className="btn btn-primary">Submit New User</button>
            <button type="buttom" className="btn btn-danger" onClick={this.props.toggleEdit}>Cancel</button>
          </div>
        </div>
      </form>
    );
  }
}

export default withRouter(SingleUserEdit);