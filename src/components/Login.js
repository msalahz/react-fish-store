import React from 'react';
import PropTypes from 'prop-types';

const Login = props => (
  <div className="login">
    <h2>Inventory Login</h2>
    <p>Sign in to manage your store's inventory.</p>
    <button className="github" onClick={() => props.auth('Github')}>
      Log In with GitHub
    </button>
    <button className="twitter" onClick={() => props.auth('Twitter')}>
      Log In with Twitter
    </button>
    <button className="facebook" onClick={() => props.auth('Facebook')}>
      Log In with Facebook
    </button>
  </div>
);

Login.propTypes = {
  auth: PropTypes.func.isRequired,
};

export default Login;
