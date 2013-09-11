'use strict';

var request = require('../../helpers/superagent')
  , baseEndpoint = process.env.HEROKU_API_ENDPOINT || "https://api.heroku.com";

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
function postLogin(username, password, next) {
  return request
    .post(baseEndpoint + '/login')
    .query({
      "username" : username,
      "password" : password
    })
    .end(next);
}
module.exports.postLogin = postLogin;
/**
 * @name doLogin
 * @function
 * @see postLogin
 */
module.exports.doLogin = postLogin;
/**
 * @name login
 * @function
 * @see postLogin
 */
module.exports.login = postLogin;
