import React from 'react';
import PropTypes from 'prop-types';
import { formatPrice } from '../helpers';

class OrderItem extends React.Component {
  deleteFromOrder = () => this.props.deleteFromOrder(this.props.fid);
  render() {
    if (!this.props.count) {
      return null;
    }

    if (this.props.fish.status === 'unavailable') {
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
            <span>{this.props.count}</span>
            {this.props.fish.name}
          </span>
          <button onClick={this.deleteFromOrder}>×</button>
        </span>
        <span className="price">{formatPrice(this.props.fish.price)}</span>
      </li>
    );
  }
}

OrderItem.propTypes = {
  fid: PropTypes.string.isRequired,
  fish: PropTypes.object.isRequired,
  count: PropTypes.number,
  deleteFromOrder: PropTypes.func.isRequired,
};

OrderItem.defaultProps = {
  count: 0,
};

export default OrderItem;
