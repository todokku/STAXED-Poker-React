// Main: the routing headquarters for future "Admin Control Mode"
import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import TopNav from './TopNav';
import ItemsBody from './ItemsBody';
import SingleItem from './SingleItem';
import CreateUser from './CreateUser';

class Main extends Component {
  render(props) {
    return (
      <div>
        {/* <BrowserRouter>
          <div>
            <h1>Main Component Renders Yay</h1>
            <TopNav />
          </div>
          <div className="container">
            <Switch>
              <Route path='/' exact component={ItemsBody} />
              <Route path='/user/:id' component={SingleItem} />
              <Route path='/user/new' component={CreateUser} />
            </Switch>
          </div>
        </BrowserRouter> */}
      </div>
    )
  }
}

export default Main;