import { Component } from "react";

class Pokemon extends Component {
  render() {

    const {name, type, averageWeight: {value, measurementUnit}, image} = this.props.pokemon;
    console.log(this.props.pokemon);

    return (
    <>
      <p className='poke-name'>{name}</p>
      <p className='poke-type'>Type: {type}</p>
      <p className='poke-weight'>Average Weight: {value} {measurementUnit} </p>
      <img width='150px' src={image} alt={`${name} Imagem`} />
    </>
    );
  }
}

export default Pokemon
