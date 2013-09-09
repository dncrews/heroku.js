'use strict';

var request = require('../../helpers/superagent')
  , baseEndpoint = process.env.HEROKU_API_ENDPOINT || "https://api.heroku.com";

module.exports = {};

/**
 * GET /user
 *
 * Get the info on the 'current' Heroku user
 *
 * @param  {Function} next
 *
 * @example
 * api.getUser(function(err, res) {});
 */
function getUser(next) {
  return request
    .get(baseEndpoint + '/user')
    .end(next);
}
module.exports.getUser = getUser;
