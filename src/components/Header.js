import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import SingleFishItem from './SingleFishItem';
import Loading from './Loading';

const Header = props => (
  <Fragment>
    <header className="top">
      <h1>
        Fish
        <span className="ofThe">
          <span className="of" />
          <span className="the" />
        </span>
        Store
      </h1>
      <h3>
        <span className="tagline"> {props.tagLine}</span>
      </h3>
    </header>
    <ul className="list-of-fishes">
      <Loading isLoading={props.loading}>
        {Object.keys(props.fishes).map(key => (
          <SingleFishItem
            key={key}
            fid={key}
            fish={props.fishes[key]}
            addToOrder={props.addToOrder}
          />
        ))}
      </Loading>
    </ul>
  </Fragment>
);

Header.propTypes = {
  loading: PropTypes.bool.isRequired,
  fishes: PropTypes.object.isRequired,
  tagLine: PropTypes.string.isRequired,
  addToOrder: PropTypes.func.isRequired,
};

export default Header;
