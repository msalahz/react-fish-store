import React from 'react';
import PropTypes from 'prop-types';
import { formatPrice } from '../helpers';
import OrderItem from './OrderItem';

const Order = ({ fishes, order, deleteFromOrder }) => (
  <div className="order">
    <h2>Order</h2>
    <ul className="order">
      {Object.keys(order).map(key => (
        <OrderItem
          key={key}
          fid={key}
          order={order}
          fishes={fishes}
          deleteFromOrder={deleteFromOrder}
        />
      ))}

      <li className="total">
        <strong>Total:</strong>
        {formatPrice(
          Object.keys(order)
            .filter(key => fishes[key] && fishes[key].status === 'available')
            .reduce(
              (acc, key) => fishes[key] && acc + fishes[key].price * order[key],
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
