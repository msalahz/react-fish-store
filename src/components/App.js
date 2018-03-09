import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

class App extends React.Component {
  constructor() {
    super();
    this.setState({ fishes: [] });
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagLine="Fresh Seafood Market" fishes={this.state.fishes} />
        </div>
        <Order />
        <Inventory />
      </div>
    );
  }
}

export default App;
