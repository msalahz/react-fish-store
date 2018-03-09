import React from 'react';
import PropTypes from 'prop-types';
import { formatPrice } from '../helpers';
import OrderItem from './OrderItem';

const Order = props => (
  <div className="order">
    <h2>Order</h2>
    <ul className="order">
      {Object.keys(props.order).map(key => (
        <OrderItem
          key={key}
          fid={key}
          count={props.order[key]}
          fish={props.fishes[key]}
          deleteFromOrder={props.deleteFromOrder}
        />
      ))}
      <li className="total">
        <strong>Total:</strong>
        {formatPrice(
          Object.keys(props.order)
            .filter(key => props.fishes[key].status === 'available')
            .reduce(
              (acc, key) => acc + props.fishes[key].price * props.order[key],
              0
            )
        )}
      </li>
    </ul>
  </div>
);

Order.propTypes = {
  order: PropTypes.object.isRequired,
  fishes: PropTypes.object.isRequired,
  deleteFromOrder: PropTypes.func.isRequired,
};

export default Order;
