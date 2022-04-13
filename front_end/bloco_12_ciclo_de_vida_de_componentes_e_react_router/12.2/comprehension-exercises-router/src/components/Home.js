import React, { Component } from 'react';
import About from './About';
import Users from './Users';
import { Route } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <h2>Home</h2>
        <p> My awesome Home component </p>
        <Route exact path="/about" component={About} />
        <Route exact path="/users" component={Users} />
      </div>
    );
  }
}

export default Home;
