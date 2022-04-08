import { Component } from "react";

class Pokemon extends Component {
  render() {

    const {name, type, averageWeight: {value, measurementUnit}, image} = this.props.pokemon;

    return (
    <>
      <p className='poke-name'>{name.toUpperCase()}</p>
      <p className='poke-type'>TYPE: {type.toUpperCase()}</p>
      <p className='poke-weight'>AVERAGE WEIGHT: {value} {measurementUnit} </p>
      <img width='150px' src={image} alt={`${name} Imagem`} />
    </>
    );
  }
}

export default Pokemon
