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
    const allPokemons = pokemons;

    const newPokemons = {
      pokemons: allPokemons,
      currentPokemon: 0,
    };

    this.setState(newPokemons);
  }

  fireType() {
    const firePokemons = pokemons.filter(({ type }) => type === "Fire");

    const newPokemons = {
      pokemons: firePokemons,
      currentPokemon: 0,
    };

    this.setState(newPokemons);
  }

  pyschType() {
    const psychPokemons = pokemons.filter(({ type }) => type === "Psychic");
    console.log(psychPokemons);

    const newPokemons = {
      pokemons: psychPokemons,
      currentPokemon: 0,
    };

    this.setState(newPokemons);
  }

  eletricType() {
    const eletricPokemons = pokemons.filter(({ type }) => type === "Electric");
    const newPokemons = {
      pokemons: eletricPokemons,
      currentPokemon: 0,
    };

    this.setState(newPokemons);
  }

  normalType() {
    const normalPokemons = pokemons.filter(({ type }) => type === "Normal");
    const newPokemons = {
      pokemons: normalPokemons,
      currentPokemon: 0,
    };

    this.setState(newPokemons);
  }

  poisonType() {
    const poisonPokemons = pokemons.filter(({ type }) => type === "Poison");
    const newPokemons = {
      pokemons: poisonPokemons,
      currentPokemon: 0,
    };

    this.setState(newPokemons);
  }

  bugType() {
    const bugPokemons = pokemons.filter(({ type }) => type === "Bug");
    const newPokemons = {
      pokemons: bugPokemons,
      currentPokemon: 0,
    };

    this.setState(newPokemons);
  }

  dragonType() {
    const dragonPokemons = pokemons.filter(({ type }) => type === "Dragon");
    const newPokemons = {
      pokemons: dragonPokemons,
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
          <button
            onClick={this.allType.bind(this)}
            className="button_all button"
          >
            ALL
          </button>
          <button
            onClick={this.fireType.bind(this)}
            className="button_fire button"
          >
            FIRE
          </button>
          <button
            onClick={this.pyschType.bind(this)}
            className="button_pyschic button"
          >
            PSYCHIC
          </button>
          <button
            onClick={this.eletricType.bind(this)}
            className="button_eletric button"
          >
            ELETRIC
          </button>
          <button
            onClick={this.bugType.bind(this)}
            className="button_bug button"
          >
            BUG
          </button>
          <button
            onClick={this.poisonType.bind(this)}
            className="button_poison button"
          >
            POISON
          </button>
          <button
            onClick={this.normalType.bind(this)}
            className="button_normal button"
          >
            NORMAL
          </button>
          <button
            onClick={this.dragonType.bind(this)}
            className="button_dragon button"
          >
            DRAGON
          </button>
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
