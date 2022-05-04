// App.js
import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
    };
  }

  fetchCharacters = async () => {
    const request = await fetch('https://rickandmortyapi.com/api/character');
    const data = await request.json();

    this.setState({ characters: data.results });
  };

  componentDidMount() {
    this.fetchCharacters();
  }

  render() {
    const { characters } = this.state;
    console.log('render');
    return (
      <div className="App">
        <h1>Ricky and Morty Characters:</h1>
        <div>
          {characters.map(({ name, image }) => {
            return (
              <div key={name}>
                <h3>{name}</h3>
                <img src={image} alt={name}></img>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
