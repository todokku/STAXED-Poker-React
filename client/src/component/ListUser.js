import React from 'react';
import { Link } from 'react-router-dom';

const ListUser = ( { id, access, email, balanceHours, qualifierHours } ) => {
  return (
    <Link to={`/${id}`} className={`list-group-item ${access === 'admin' ? 'bg-primary' : 'bg-secondary'}
     text-white mb-3 d-flex justify-content-center align-items-center`}>
      <h3>Email: {email}</h3>
      <h3>Access: {access}</h3>
      <h3>Balance Hours: {balanceHours}</h3>
      <h3>Qualifier Hours: {qualifierHours}</h3>
    </Link>
  );
};

export default ListUser;


