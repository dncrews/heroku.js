'use strict';

var request = require('../../helpers/superagent')
  , baseEndpoint = "https://api.heroku.com";

module.exports = {};

/**
 * POST /login
 *
 * Performs an `login` action to obtain the API key
 *
 * @param  {string}   username User username
 * @param  {string}   password User password
 * @param  {Function} next
 */
module.exports.postLogin = function postLogin(username, password, next) {
  return request
    .post(baseEndpoint + '/login')
    .query({
      "username" : username,
      "password" : password
    })
    .end(next);
}
