import React from "react";
import "../App.css";

const ListUsers = ({ children }) => {
  return (
    <div>
      <ul className="list-group">{children}</ul>
    </div>
  );
};

export default ListUsers;
