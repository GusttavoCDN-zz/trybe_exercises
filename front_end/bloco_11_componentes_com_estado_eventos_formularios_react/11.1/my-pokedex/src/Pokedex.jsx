import { Component } from 'react';
import pokemons from './fetchPokemon.js';
import localPokemons from './data.js'
import Pokemon from './Pokemon';

class Pokedex extends Component {
  constructor() {
    super();
    this.changePokemon = this.changePokemon.bind(this);
    this.changeTypeFilter = this.changeTypeFilter.bind(this);
    this.state = {
      pokemons: localPokemons,
      currentPokemon: 0,
      pokemonsType: [...new Set([...localPokemons.map(({ type }) => type)])],
    };
  }

  componentDidMount() {
    setTimeout(()=> {
      this.setState({
        pokemons: pokemons,
        pokemonsType:  [...new Set([...pokemons.map(({ type }) => type)])]
      });

    }, 1000)
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

  changeTypeFilter(type) {
    const allPokemons = type ? pokemons.filter((poke) => poke.type === type) : pokemons;

    const newPokemons = {
      pokemons: allPokemons,
      currentPokemon: 0,
    };

    this.setState(newPokemons);
  }

  render() {
    const { pokemons, currentPokemon, pokemonsType } = this.state;
    console.log(pokemons);

    const typeButtons = pokemonsType.map((type, index) => {
      return (
        <button
          key={index}
          className={`button_${type.toLowerCase()} button`}
          onClick={() => this.changeTypeFilter(type)}
        >
          {type}
        </button>
      );
    });

    return (
      <main>
        <div className="poke-card">
          <Pokemon pokemon={pokemons[currentPokemon]} />
        </div>
        <div className="poke_buttons">
          <button
            onClick={() => this.changeTypeFilter()}
            className="button_all button"
          >
            ALL
          </button>
          {typeButtons}
        </div>
        <button onClick={this.changePokemon} className="poke_next_button button">
          Next Pokemon
        </button>
      </main>
    );
  }
}

export default Pokedex;
