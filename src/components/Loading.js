import React from 'react';
import PropTypes from 'prop-types';

const Loading = props => {
  if (props.isLoading) {
    return <div className="loading">Loading...</div>;
  }

  return props.children;
};

Loading.propTypes = {
  isLoading: PropTypes.bool,
  children: PropTypes.array,
};

Loading.defaultProps = {
  isLoading: true,
  children: null,
};

export default Loading;
