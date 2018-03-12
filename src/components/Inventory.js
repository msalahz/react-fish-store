import React from 'react';
import PropTypes from 'prop-types';
import AddFishForm from './AddFishForm';
import EditFishForm from './EditFishForm';

const Inventory = props => (
  <div className="inventory">
    <h2>Inventory</h2>
    {Object.keys(props.fishes).map(key => (
      <EditFishForm
        key={key}
        fid={key}
        fish={props.fishes[key]}
        editFish={props.editFish}
        deleteFish={props.deleteFish}
      />
    ))}
    <AddFishForm addFish={props.addFish} />
    <button onClick={props.loadSampleFishes}>Load Sample Fishes</button>
  </div>
);

Inventory.propTypes = {
  fishes: PropTypes.object.isRequired,
  addFish: PropTypes.func.isRequired,
  editFish: PropTypes.func.isRequired,
  deleteFish: PropTypes.func.isRequired,
  loadSampleFishes: PropTypes.func.isRequired,
};

export default Inventory;
