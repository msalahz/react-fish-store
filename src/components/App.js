import React from 'react';
import PropTypes from 'prop-types';
import { Rebase } from 're-base';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import SampleFishes from '../sample-fishes';
import base from '../base';

class App extends React.Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
  };

  state = {
    fishes: {},
    order: {},
    loading: true,
  };

  componentDidMount() {
    const { params } = this.props.match;
    const orderStorage = JSON.parse(localStorage.getItem(params.storeId));
    if (orderStorage) {
      this.setState({ order: orderStorage });
    }
    this.ref = base.syncState(`${params.storeId}/fishes`, {
      context: this,
      state: 'fishes',
      then: () => this.setState({ loading: false }),
    });
  }

  componentWillUpdate() {
    const { params } = this.props.match;
    localStorage.setItem(params.storeId, JSON.stringify(this.state.order));
  }

  componentWillUnmount() {
    Rebase.removeBinding(this.ref);
  }

  loadSampleFishes = () => {
    this.setState({ fishes: SampleFishes });
  };

  addFish = fish => {
    // copy fishes
    const fishes = { ...this.state.fishes };
    // set the new fish
    fishes[`fish${Date.now()}`] = fish;
    // update state
    this.setState({ fishes });
  };

  editFish = (key, fish) => {
    // copy fishes
    const fishes = { ...this.state.fishes };
    // update fish obj
    fishes[key] = fish;
    // update state
    this.setState({ fishes });
  };

  deleteFish = key => {
    // copy fishes
    const fishes = { ...this.state.fishes };
    // update fish obj
    fishes[key] = null;
    // update state
    this.setState({ fishes });
  };

  addToOrder = fishKey => {
    // copy order state
    const order = { ...this.state.order };
    // if fishKey doesn't exist in the order set it's init as 0
    if (!(fishKey in order)) {
      order[fishKey] = 0;
    }
    // increment fish order by one
    order[fishKey] += 1;
    // update order state
    this.setState({ order });
  };

  deleteFromOrder = fishKey => {
    // copy order state
    const order = { ...this.state.order };
    // if fishKey exists in the order set as null
    if (fishKey in order) {
      order[fishKey] = null;
    }
    // update order state
    this.setState({ order });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header
            loading={this.state.loading}
            tagLine="Fresh Seafood Market"
            fishes={this.state.fishes}
            addToOrder={this.addToOrder}
          />
        </div>
        <Order
          order={this.state.order}
          fishes={this.state.fishes}
          deleteFromOrder={this.deleteFromOrder}
        />
        <Inventory
          fishes={this.state.fishes}
          storeId={this.props.match.params.storeId}
          addFish={this.addFish}
          editFish={this.editFish}
          deleteFish={this.deleteFish}
          loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    );
  }
}

export default App;
