import React from 'react';
import PropTypes from 'prop-types';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  static propTypes = {
    history: PropTypes.func.isRequired,
  };

  // create an input property reference
  myInput = React.createRef();

  goToStore = event => {
    // prevent for submit default
    event.preventDefault();
    // get input value
    const storeName = this.myInput.value.value;
    // redirect to store route
    // history here is passed to the component from its Router parent component
    this.props.history.push(`/store/${storeName}`);
  };

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h1>Please Enter a Store</h1>
        <input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={this.myInput} />
        <button type="submit">Visit Store -></button>
      </form>
    );
  }
}

export default StorePicker;
