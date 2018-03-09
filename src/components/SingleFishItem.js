import React from 'react';
import PropTypes from 'prop-types';
import { formatPrice } from '../helpers';

const SingleFishItem = props => (
  <li className="menu-fish">
    <img src={props.fish.image} alt={props.fish.name} />
    <h3 className="fish-name">
      {props.fish.name}
      <span className="price">{formatPrice(props.fish.price)}</span>
    </h3>
    <p>{props.fish.desc}</p>
    <button>Add To Order</button>
  </li>
);

SingleFishItem.propTypes = {
  fish: PropTypes.object.isRequired,
};

export default SingleFishItem;
