import React, { Component } from 'react';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import StrictAcess from './components/StrictAcess';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

class App extends Component {
  greet(id) {
    return `Parabens ${id}, você esta entendendo como funciona o React Router`;
  }

  render() {
    return (
      <BrowserRouter>
      <Link to="/" className="home_link">
            Home
          </Link>
          <Link to="/about">About</Link>
          <Link to="/users">Users</Link>
          <Link to="/strictacess">Strict Acess</Link>

        <Switch>
          <Route path="/about" component={About} />
          <Route
            path="/users/:id"
            render={(props) => <Users {...props} greetingsMessage={this.greet} />}
          />
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/strictacess"
            render={() => <StrictAcess user={{ name: 'João', password: '1231' }} />}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
