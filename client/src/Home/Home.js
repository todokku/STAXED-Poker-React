import React, { Component } from 'react';
import ItemsBody from '../component/ItemsBody';
class Home extends Component {
  render() {
    const { isAuthenticated, login } = this.props.auth;
    return (
      <div>
        <ItemsBody />
        <div className="container">
          {
            isAuthenticated() && (
              
                <h4>
                  You are logged in!
                </h4>
          
              )
          }
          {
            !isAuthenticated() && (
              <div>
                <h4>
                  You are not logged in! Please{' '}
                  <a style={{cursor:'pointer'}}
                    onClick={login.bind(this)}
                  >
                    Log In
                  </a>
                  {' '}to continue.
                </h4>
              </div>
              )
          }
        </div>
      </div>
    );
  }
}

export default Home;
