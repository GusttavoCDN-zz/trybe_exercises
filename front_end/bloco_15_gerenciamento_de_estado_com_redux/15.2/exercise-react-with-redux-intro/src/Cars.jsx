import React from 'react';
import {connect} from 'react-redux';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';
import { bindActionCreators } from 'redux';
import * as Actions from './redux/actions';

function Cars({redCar, blueCar, yellowCar, moveCar}) {
  return (
    <div>
      <div>
        <img className={redCar ? 'car-right' : 'car-left'} src={carRed} alt="red car" />
        <button type="button" onClick={() => moveCar('red', !redCar)}>Move</button>
      </div>
      <div>
        <img
          className={blueCar ? 'car-right' : 'car-left'}
          src={carBlue}
          alt="blue car"
        />
        <button type="button" onClick={() => moveCar('blue', !blueCar)}>Move</button>
      </div>
      <div>
        <img
          className={yellowCar ? 'car-right' : 'car-left'}
          src={carYellow}
          alt="yellow car"
        />
        <button type="button" onClick={() => moveCar('yellow', !yellowCar)}>Move</button>
      </div>
    </div>
  );
}

const mapStateToProps = (globalState) => ({
  redCar: globalState.carsReducer.cars.red,
  blueCar: globalState.carsReducer.cars.blue,
  yellowCar: globalState.carsReducer.cars.yellow,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(Actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cars);
