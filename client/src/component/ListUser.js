import React from 'react';
import { Link } from 'react-router-dom';

const ListUser = ({ id, access, email, balanceHours }) => {
  return (
    <Link to={`/${id}`} className={`list-group-item ${access === 'admin' ? 'bg-success' : 'bg-danger'}
     text-white mb-3 d-flex justify-content-center align-items-center`}>
      <h2>Email: {email} </h2>
      <h3>Balance Hours: {balanceHours}</h3>
    </Link>
  );
};

export default ListUser;


