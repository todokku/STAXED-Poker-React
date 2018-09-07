// Equivalent to Index.js or Main.js
import React from "react";
import { Redirect, Route, Router } from "react-router-dom";
import App from "./App";
import Home from "./Home/Home";
import Profile from "./Profile/Profile";
import Ping from "./Ping/Ping";
import Admin from "./Admin/Admin";
import Callback from "./Callback/Callback";
import Auth from "./Auth/Auth";
import history from "./history";
// import { API_URL } from "./constants";
// import Main from "./component/Main";
// import axios from "axios";

const auth = new Auth();

// Test if payload can arrive here so we can pass it down to <Main /> in '/test'

const handleAuthentication = ({ location }) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
};

// Functional Based Component. Can I squeeze some props from 'api/user' in here???
export const makeMainRoutes = () => {
  return (
    <div>
      <Router history={history}>
        <div>
          <Route path="/" render={props => <App auth={auth} {...props} />} />

          <Route
            path="/home"
            render={props => <Home auth={auth} {...props} />}
          />

          {/* <Route
            path="/test"
            render={props => <Main auth={auth} {...props} />}
          /> */}

          <Route
            path="/profile"
            render={props =>
              !auth.isAuthenticated() ? (
                <Redirect to="/home" />
              ) : (
                <Profile auth={auth} {...props} />
              )
            }
          />

          <Route
            path="/ping"
            render={props =>
              !auth.isAuthenticated() ? (
                <Redirect to="/home" />
              ) : (
                <Ping auth={auth} {...props} />
              )
            }
          />

          <Route
            path="/admin"
            render={props =>
              !auth.isAuthenticated() ||
              !auth.userHasScopes(["write:messages"]) ? (
                <Redirect to="/home" />
              ) : (
                <Admin auth={auth} {...props} />
              )
            }
          />

          <Route
            path="/callback"
            render={props => {
              handleAuthentication(props);
              return <Callback {...props} />;
            }}
          />
        </div>
      </Router>
    </div>
  );
};
