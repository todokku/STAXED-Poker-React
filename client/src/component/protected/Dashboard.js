import React, { Component } from 'react';

class Dashboard extends Component {
  render() {
    return (
      <div>
        Dashboard. This is protected route. You Can only see this if you're authed.
      </div>
    )
  }
}

export default Dashboard;