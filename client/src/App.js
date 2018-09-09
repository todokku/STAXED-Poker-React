// App.js is basically the NavBar
import React, { Component } from "react";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import "./App.css";

class App extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`);
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  render() {
    // const { isAuthenticated, userHasScopes } = this.props.auth;
    const { isAuthenticated } = this.props.auth;

    return (
      <div className="header-nav">
        <Navbar inverse fluid collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/home">Stacked App</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>

          <Navbar.Collapse>
            <Nav className="navbar-collapse" pullRight>
              <NavItem
                className="btn-margin"
                onClick={this.goTo.bind(this, "home")}
              >
                Home
              </NavItem>

              {isAuthenticated() ? (
                <NavItem
                  className="btn-margin"
                  onClick={this.goTo.bind(this, "profile")}
                >
                  Profile
                </NavItem>
              ) : (
                <NavItem
                  className="btn-margin"
                  onClick={this.goTo.bind(this, "profile")}
                >
                  Profile
                </NavItem>
              )}

              {/* {isAuthenticated() && (
                <NavItem>
                  <li
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.goTo.bind(this, "ping")}
                  >
                    Ping
                  </li>
                </NavItem>
              )}  */}

              {isAuthenticated() && ( // remove this ( after uncommenting below.
                // userHasScopes(["write:messages"]) && (
                <NavItem
                  className="btn-margin"
                  onClick={this.goTo.bind(this, "admin")}
                >
                  Admin
                </NavItem>
              )}

              {isAuthenticated() && (
                <NavItem
                  id="qsLogoutBtn"
                  className="btn-margin"
                  onClick={this.logout.bind(this)}
                >
                  Log Out
                </NavItem>
              )}
              {!isAuthenticated() && (
                <NavItem
                  id="qsLoginBtn"
                  className="btn-margin"
                  onClick={this.login.bind(this)}
                >
                  Log In
                </NavItem>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        
        <div className="footer">
          <div className="footer-content">
            2018 ©{/* <div className="icon-spacing"> */}
            {/* <i class="fab fa-twitter-square" />
            <i class="fab fa-facebook" /> */}
            {/* </div> */}
          </div>
        </div>

      </div>
    );
  }
}

export default App;
