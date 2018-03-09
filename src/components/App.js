import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import SampleFishes from '../sample-fishes';

class App extends React.Component {
  state = {
    fishes: {},
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

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagLine="Fresh Seafood Market" fishes={this.state.fishes} />
        </div>
        <Order />
        <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes} />
      </div>
    );
  }
}

export default App;
