'use strict';

const app = require('../server');
const constants = require('../../common/utils/constants');

const db = app.dataSources.ticket;

function Migration() { }
Migration.migrate = (callback) => {
  db.automigrate(constants.tables, function(err, success) {
    if (err) throw err;
    return callback();
  });
};

module.exports = Migration;
