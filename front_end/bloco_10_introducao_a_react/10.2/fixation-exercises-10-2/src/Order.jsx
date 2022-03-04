import React from 'react';
import PropTypes from 'prop-types';

class Order extends React.Component {
  render() {
    const { user, product, price } = this.props.order;

    return (
      <div className="order">
        <p> {user} bought {product} for {price.value} {price.currency} </p>
      </div>
    );
  }
}

Order.propTypes = {
  id: PropTypes.number.isRequired,
  user: PropTypes.string.isRequired,
  price: PropTypes.shape({
    value: PropTypes.number,
    currency: PropTypes.string.isRequired
  })
}

export default Order;