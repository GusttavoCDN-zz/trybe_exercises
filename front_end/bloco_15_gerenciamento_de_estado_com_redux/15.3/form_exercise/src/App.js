import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import PersonalForm from './pages/PersonalForm';
import ProfessionalForm from './pages/ProfessionalForm';
import FormDataDisplay from './pages/FormDataDisplay';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <Link to="/">Home</Link>
          <Link to="/professionalform">Form Profissional</Link>
          <Link to="/formdisplay">Form Display</Link>
        </header>
        <Switch>
          <Route exact path="/" component={ PersonalForm } />
          <Route path="/professionalform" component={ ProfessionalForm } />
          <Route path="/formdisplay" component={ FormDataDisplay } />
        </Switch>
      </div>
    );
  }
}

export default App;
