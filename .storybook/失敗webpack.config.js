const path = require('path');

module.exports = async ({config, mode}) => {
  config.node = {fs: 'empty', module: 'empty'};
  return config;
};
