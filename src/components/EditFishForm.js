import React from 'react';
import PropTypes from 'prop-types';

class EditFishForm extends React.Component {
  static propTypes = {
    fid: PropTypes.string.isRequired,
    fish: PropTypes.object.isRequired,
    editFish: PropTypes.func.isRequired,
    deleteFish: PropTypes.func.isRequired,
  };

  onFishChange = e => {
    e.preventDefault();
    // get form el ref
    const form = e.currentTarget;
    // form updated fish object
    const updated = { ...this.props.fish, [`${form.name}`]: form.value };
    // edit fish state
    this.props.editFish(this.props.fid, updated);
  };

  deleteFish = e => {
    e.preventDefault();
    this.props.deleteFish(this.props.fid);
  };

  render() {
    return (
      <form className="fish-edit" onSubmit={this.deleteFish}>
        <input
          name="name"
          type="text"
          placeholder="Fish Name"
          value={this.props.fish.name}
          onChange={this.onFishChange}
        />
        <input
          name="price"
          type="number"
          placeholder="Fish Price"
          value={this.props.fish.price}
          onChange={this.onFishChange}
        />
        <select
          name="status"
          value={this.props.fish.status}
          onChange={this.onFishChange}
        >
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea
          name="desc"
          type="text"
          placeholder="Fish Description"
          value={this.props.fish.desc}
          onChange={this.onFishChange}
        />
        <input
          name="image"
          type="text"
          placeholder="Fish Image"
          value={this.props.fish.image}
          onChange={this.onFishChange}
        />
        <button type="submit">Remove Fish</button>
      </form>
    );
  }
}

export default EditFishForm;
