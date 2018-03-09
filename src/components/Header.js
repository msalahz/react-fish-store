import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import SingleFishItem from './SingleFishItem';

const Header = props => (
  <Fragment>
    <header className="top">
      <h1>
        Catch
        <span className="ofThe">
          <span className="of">Of</span>
          <span className="the">The</span>
        </span>
        Day
      </h1>
      <h3>
        <span className="tagline"> {props.tagLine}</span>
      </h3>
    </header>
    <ul className="list-of-fishes">
      {Object.keys(props.fishes).map(key => <SingleFishItem key={key} fish={props.fishes[key]} />)}
    </ul>
  </Fragment>
);

Header.propTypes = {
  tagLine: PropTypes.string.isRequired,
  fishes: PropTypes.array.isRequired,
};

export default Header;
