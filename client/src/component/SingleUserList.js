// Create Edit Todo
import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

// Incorporate checkedIn attribute for users.
const SingleUserList = ({ id, email, balanceHours, access, qualifierHours }) => {
  return (
    <div className={`card ${access == 'admin' ? 'bg-primary' : 'bg-secondary'} text-white`}>
      <div className="card-block">
        <div className="card-title">
          <h4>{email}</h4>
        </div>
        <div className="card-text">
          {access == 'admin' ? 'User is an Admin' : 'User is a member'}
        </div>
        <div className="d-flex justify-content-between align-items-end mt-5">
          <button className="btn btn-link text-white" onClick={() => {
            axios.delete(`/api/user/${id}`).then(() => {
              history.push('/');
            });
          }}>Delete User
          </button>
          <button className="btn btn-link text-white" onClick={onEdit}>Edit User</button>
        </div>
      </div>
    </div>
  );
};

export default withRouter(SingleUserList);