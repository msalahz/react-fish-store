import React from 'react';
import PropTypes from 'prop-types';

class AddFishForm extends React.Component {
  static propTypes = {
    addFish: PropTypes.func.isRequired,
  };

  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

  AddFish = e => {
    e.preventDefault();
    this.props.addFish({
      name: this.nameRef.value.value,
      price: this.priceRef.value.value,
      status: this.statusRef.value.value,
      desc: this.descRef.value.value,
      image: this.imageRef.value.value,
    });
    e.currentTarget.reset();
  };

  render() {
    return (
      <form className="fish-edit" onSubmit={this.AddFish}>
        <input name="name" ref={this.nameRef} type="text" placeholder="Fish Name" />
        <input name="price" ref={this.priceRef} type="number" placeholder="Fish Price" />
        <select name="status" ref={this.statusRef}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea name="desc" ref={this.descRef} type="text" placeholder="Fish Description" />
        <input name="image" ref={this.imageRef} type="text" placeholder="Fish Image" />
        <button type="submit">+ Add Fish</button>
      </form>
    );
  }
}

export default AddFishForm;
