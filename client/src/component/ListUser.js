import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const ListUser = ({
  id,
  access,
  phone,
  email,
  balanceHours,
  qualifierHours,
  checkedIn
}) => {
  return (
    <div>
      <Link
        to={`/admin/${id}`}
        className={`list-group-item ${
          access === "admin" ? "bg-primary" : "bg-secondary"
        }
     text-black mb-3 d-flex justify-content-center align-items-center`}
      >
        <h3>id: {id}</h3>
        <h3>Email: {email}</h3>
        <h3>CheckIn Status: {checkedIn}</h3>
      </Link>
    </div>
  );
};

export default ListUser;
