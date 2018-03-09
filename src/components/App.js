import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import SampleFishes from '../sample-fishes';

class App extends React.Component {
  state = {
    fishes: {},
    order: {},
  };

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
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    );
  }
}

export default App;
