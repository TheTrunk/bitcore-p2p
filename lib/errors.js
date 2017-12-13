'use strict';

var spec = {
  name: 'P2P',
  message: 'Internal Error on bitcore-p2p-hush Module {0}'
};

module.exports = require('bitcore-lib-hush').errors.extend(spec);
