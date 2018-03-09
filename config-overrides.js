const rewireEslint = require('react-app-rewire-eslint');

module.exports = function override(config, env) {
  return rewireEslint(config, env);
};
