import React from 'react';
import PropTypes from 'prop-types';
import Firebase from 'firebase';
import AddFishForm from './AddFishForm';
import EditFishForm from './EditFishForm';
import Login from './Login';
import base from '../base';
import Loading from './Loading';

class Inventory extends React.Component {
  state = {
    uid: null,
    owner: null,
    loading: true,
  };

  componentDidMount() {
    Firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.handleAuth({ user });
      }
      this.setState({ loading: !!user });
    });
  }

  handleAuth = async ({ user }) => {
    // get current store from firebase
    const store = await base.fetch(this.props.storeId, { context: this });
    // if store doesn't have owner claim it
    if (!store.owner) {
      await base.post(`${this.props.storeId}/owner`, { data: user.uid });
    }
    // set state to reflect current user
    this.setState({
      uid: user.uid,
      owner: store.owner || user.uid,
      loading: false,
    });
  };

  auth = providerName => {
    const provider = new Firebase.auth[`${providerName}AuthProvider`]();
    Firebase.auth()
      .signInWithPopup(provider)
      .then(this.handleAuth);
  };

  logout = async () => {
    await Firebase.auth().signOut();
    this.setState({ uid: null });
  };

  render() {
    const logout = <button onClick={this.logout}>Log Out!</button>;
    if (this.state.loading) {
      return <Loading />;
    }

    if (this.state.uid === null) {
      return <Login auth={this.auth} />;
    }

    if (this.state.uid !== this.state.owner) {
      return (
        <div>
          <p>Sorry you are not the owner!</p>
          {logout}
        </div>
      );
    }

    return (
      <div className="inventory">
        <h2>Inventory</h2>
        {logout}
        {Object.keys(this.props.fishes).map(key => (
          <EditFishForm
            key={key}
            fid={key}
            fish={this.props.fishes[key]}
            editFish={this.props.editFish}
            deleteFish={this.props.deleteFish}
          />
        ))}
        <AddFishForm addFish={this.props.addFish} />
        <button onClick={this.props.loadSampleFishes}>
          Load Sample Fishes
        </button>
      </div>
    );
  }
}

Inventory.propTypes = {
  fishes: PropTypes.object.isRequired,
  storeId: PropTypes.string.isRequired,
  addFish: PropTypes.func.isRequired,
  editFish: PropTypes.func.isRequired,
  deleteFish: PropTypes.func.isRequired,
  loadSampleFishes: PropTypes.func.isRequired,
};

export default Inventory;
