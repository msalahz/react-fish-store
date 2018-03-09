import React from 'react';
import PropTypes from 'prop-types';
import { formatPrice } from '../helpers';

class SingleFishItem extends React.Component {
  addToOrder = () => {
    this.props.addToOrder(this.props.fid);
  };

  render() {
    const { image, name, price, desc } = this.props.fish;
    return (
      <li className="menu-fish">
        <img src={image} alt={name} />
        <h3 className="fish-name">
          {name}
          <span className="price">{formatPrice(price)}</span>
        </h3>
        <p>{desc}</p>
        <button onClick={this.addToOrder}>Add To Order</button>
      </li>
    );
  }
}

SingleFishItem.propTypes = {
  fid: PropTypes.string.isRequired,
  fish: PropTypes.object.isRequired,
  addToOrder: PropTypes.func.isRequired,
};

export default SingleFishItem;
