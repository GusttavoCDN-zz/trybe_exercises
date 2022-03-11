import { Component } from "react";
import pokemons from "./data";
import Pokemon from "./Pokemon";

class Pokedex extends Component {
  constructor() {
    super();
    this.changePokemon = this.changePokemon.bind(this);
    this.state = {
      pokemons: pokemons,
      currentPokemon: 0,
    };
  }

  changePokemon() {
    const { pokemons, currentPokemon } = this.state;

    if (pokemons[currentPokemon + 1]) {
      this.setState((state) => ({
        currentPokemon: state.currentPokemon + 1,
      }));

      return;
    }

    this.setState((state) => ({
      currentPokemon: 0,
    }));
  }

  allType() {
    const firePokemons = this.state.pokemons.filter(
      ({ type }) => type === "Fire"
    );
    const newPokemons = {
      pokemons: firePokemons,
      currentPokemon: 0,
    };

    this.setState(newPokemons);
  }

  fireType() {
    const firePokemons = this.state.pokemons.filter(
      ({ type }) => type === "Fire"
    );
    const newPokemons = {
      pokemons: firePokemons,
      currentPokemon: 0,
    };

    this.setState(newPokemons);
  }

  pyschType() {
    const firePokemons = this.state.pokemons.filter(
      ({ type }) => type === "Fire"
    );
    const newPokemons = {
      pokemons: firePokemons,
      currentPokemon: 0,
    };

    this.setState(newPokemons);
  }

  eletricType() {
    const firePokemons = this.state.pokemons.filter(
      ({ type }) => type === "Fire"
    );
    const newPokemons = {
      pokemons: firePokemons,
      currentPokemon: 0,
    };

    this.setState(newPokemons);
  }

  normalType() {
    const firePokemons = this.state.pokemons.filter(
      ({ type }) => type === "Fire"
    );
    const newPokemons = {
      pokemons: firePokemons,
      currentPokemon: 0,
    };

    this.setState(newPokemons);
  }

  poisonType() {
    const firePokemons = this.state.pokemons.filter(
      ({ type }) => type === "Fire"
    );
    const newPokemons = {
      pokemons: firePokemons,
      currentPokemon: 0,
    };

    this.setState(newPokemons);
  }

  bugType() {
    const firePokemons = this.state.pokemons.filter(
      ({ type }) => type === "Fire"
    );
    const newPokemons = {
      pokemons: firePokemons,
      currentPokemon: 0,
    };

    this.setState(newPokemons);
  }

  dragonType() {
    const firePokemons = this.state.pokemons.filter(
      ({ type }) => type === "Fire"
    );
    const newPokemons = {
      pokemons: firePokemons,
      currentPokemon: 0,
    };

    this.setState(newPokemons);
  }

  render() {
    const { pokemons, currentPokemon } = this.state;
    //console.log(pokemons[currentPokemon]);
    return (
      <main>
        <div className="poke-card">
          <Pokemon pokemon={pokemons[currentPokemon]} />
        </div>
        <div className="poke_buttons">
        <button className="button_all button">ALL</button>
          <button
            onClick={this.fireType.bind(this)}
            className="button_fire button"
          >
            FIRE
          </button>
          <button className="button_pyschic button">PSYCHIC</button>
          <button className="button_eletric button">ELETRIC</button>
          <button className="button_bug button">BUG</button>
          <button className="button_poison button">POISON</button>
          <button className="button_normal button">NORMAL</button>
          <button className="button_dragon button">DRAGON</button>
        </div>
        <button
          onClick={this.changePokemon}
          className="poke_next_button button"
        >
          Next Pokemon
        </button>
      </main>
    );
  }
}

export default Pokedex;
