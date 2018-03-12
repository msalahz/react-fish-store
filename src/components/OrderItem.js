import React from 'react';
import PropTypes from 'prop-types';
import { formatPrice } from '../helpers';

class OrderItem extends React.Component {
  deleteFromOrder = () => this.props.deleteFromOrder(this.props.fid);
  render() {
    const { fid, fishes, order } = this.props;
    const fish = fishes && fishes[fid];
    const orderItem = order && order[fid];

    if (!orderItem || !fish) {
      return null;
    }

    if (fish.status === 'unavailable') {
      return (
        <li>
          <span>Fish is not available anymore</span>
        </li>
      );
    }

    return (
      <li>
        <span>
          <span className="count">
            <span>{orderItem.count}</span>
            {fish.name}
          </span>
          <button onClick={this.deleteFromOrder}>×</button>
        </span>
        <span className="price">{formatPrice(fish.price)}</span>
      </li>
    );
  }
}

OrderItem.propTypes = {
  fid: PropTypes.string.isRequired,
  fishes: PropTypes.object.isRequired,
  order: PropTypes.object.isRequired,
  deleteFromOrder: PropTypes.func.isRequired,
};

export default OrderItem;
