import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import PokemonDetails from './PokemonDetails';
import About from './About';
import NotFound from './NotFound';

function App() {
  return (
    <BrowserRouter>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Switch>
        <Route
          exact
          path="/pokemons/:id"
          render={(props) => <PokemonDetails {...props} pokemons={pokemons} />}
        />
        <Route exact path="/about" render={() => <About />} />
        <Route exact path="/" render={() => <Pokedex pokemons={pokemons} />} />
        <Route path="*" component={ NotFound } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
