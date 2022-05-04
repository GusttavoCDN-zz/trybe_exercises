import React from 'react';

class PokemonDetails extends React.Component {
  constructor(props) {
    super(props);
    const {
      match: {
        params: { id },
      },
      pokemons,
    } = this.props;
    this.state = {
      pokemons: pokemons,
      id: Number(id),
    };

    this.verifyPokemon = this.verifyPokemon.bind(this);
  }

  verifyPokemon() {
    const pokemon = this.state.pokemons.find(({ id }) => {
      return id === this.state.id;
    });
    return pokemon;
  }

  render() {
    const pokemon = this.verifyPokemon();
    return (
      <div>
        <p>{pokemon.name}</p>
        <p>{pokemon.type}</p>
        <p>{pokemon.averageWeight.value}</p>
        <p>{pokemon.summary}</p>
      </div>
    );
  }
}

export default PokemonDetails;
