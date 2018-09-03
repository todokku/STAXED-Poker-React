import React from 'react';
import { Link } from 'react-router-dom';

const TopNav = () => {
  return (
    <div>
      <nav className="navbar navbar-inverse bg-inverse mb-4">
        <Link to='/' className="navbar-brand">Home</Link>
        <Link to='/login' className="navbar-brand">Login</Link>
        <Link to='/users' className="navbar-brand">Users</Link>
      </nav>      
      <div className="div navbar fixed-bottom">
        {/* <Link to="/logout" className="btn btn-outline-primary w-100 p-3">Logout</Link> */}
      </div>
      
    </div>
  )
}

 
export default TopNav;




