import React, {Component} from 'react';
import Navbar from "./Navbar";

class Dashboard extends Component {
  render() {
    return (
      <div id="dashboard">
        <Navbar/>
        <div className="container">
          <h1>Welcome to Dashboard!</h1>
        </div>
      </div>
    );
  }
}

export default Dashboard;