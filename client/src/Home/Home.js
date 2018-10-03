import React, { Component } from "react";
// import { textPath } from "react-bootstrap";
import "../Profile/Profile.css";

import ReactDom from "react-dom";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import posed, { PoseGroup } from "react-pose";
// (4) Sub components for Animations
import PokerNews from "./PokerNews";
import Contact from "./Contact";
import Calendar from "./Calendar";
import ClubInfo from "./ClubInfo";

const RouteContainer = posed.div({
  enter: { opacity: 1, delay: 300, beforeChildren: true },
  exit: { opacity: 0 }
});

class Home extends Component {
  // const Home = () => {
  // <Route
  render(props) {
    return (
      <div id="container">
        <div id="content-container">
          <div className="button-top">
            <button type="button" className="block">
              Poker News - <Link to="/pokernews">Poker News</Link>
            </button>
          </div>

          <div className="container-center">
            <h3>San Antonio's Coolest Private Club</h3>
            <h1>RIVER CITY</h1>
            <br />
            <h2>CARD ROOM</h2>
            <h5>Open 7 days a week for good times!</h5>
            <h4>Poker • Arcade & Console Games • Chess</h4>
          </div>

          <div className="rotate-left">
            <div className="button-left">
              <button type="button" className="block">
                Club Information <Link to="/clubinfo">Club Info</Link>
              </button>
            </div>
          </div>

          <div className="rotate-right">
            <div className="button-right">
              <button type="button" className="block">
                Contact - <Link to="/contact">Contact</Link>
              </button>
            </div>
          </div>

          <div className="button-bottom">
            <button type="button" className="block">
              Club Calendar - <Link to="/calendar">Calendar</Link>
            </button>
          </div>

          {/* Rendering of (4)SubComponents Happens Below. If props.location passed correctly  */}
          <PoseGroup>
            <RouteContainer key={this.props.location.key}>
              <Switch location={this.props.location}>
                <Route
                  exact
                  path="/contact"
                  component={Contact}
                  key="contact"
                />
                <Route
                  exact
                  path="/calendar"
                  component={Calendar}
                  key="calendar"
                />
                <Route
                  exact
                  path="/pokernews"
                  component={PokerNews}
                  key="pokernews"
                />
              </Switch>
            </RouteContainer>
          </PoseGroup>
        </div>
      </div>
    );
  }
}
// />
// return closing
// render closing
// component closing

export default Home;
