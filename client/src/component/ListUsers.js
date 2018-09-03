import React from 'react';

const ListUsers = ({ children }) => {
  return (
    <ul className="list-group">
      {children}
    </ul>
  )
};

export default ListUsers;