import { Component } from "react";
import pokemons from "./data";
import Pokemon from "./Pokemon";

class Pokedex extends Component {
  render() {
    return (
      <main>
        {pokemons.map((pokemon) => (
          <div className='poke-card' key={pokemon.name}>
            <Pokemon pokemon={pokemon} />
          </div>
        ))}
      </main>
    );
  }
}

export default Pokedex;
