import React, {Component} from 'react';
import CarsContext from './CarsContext';
import PropTypes from 'prop-types';

export default class Provider extends Component {
  constructor() {
    super();
    this.state = {
      cars: {
        red: false,
        blue: false,
        yellow: false,
      },
    };
    this.moveCar = this.moveCar.bind(this);
  }

  moveCar(car, side) {
    this.setState({
      cars: {
        ...this.state.cars,
        [car]: side,
      },
    });
  }
  render() {
    const context = {
      ...this.state,
      moveCar: this.moveCar,
    };

    return (
      <CarsContext.Provider value={context}>{this.props.children}</CarsContext.Provider>
    );
  }
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
