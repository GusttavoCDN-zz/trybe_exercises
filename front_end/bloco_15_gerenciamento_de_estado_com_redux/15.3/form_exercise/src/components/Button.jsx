import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { label, onClick, cannotSubmit } = this.props;
    return (
      <button type="button" onClick={ onClick } disabled={ cannotSubmit }>
        {label}
      </button>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  cannotSubmit: PropTypes.bool.isRequired,
};

export default Button;
