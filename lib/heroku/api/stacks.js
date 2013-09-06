'use strict';

var request = require('../../helpers/superagent')
  , baseEndpoint = process.env.HEROKU_API_ENDPOINT || "https://api.heroku.com";

module.exports = {};

/**
 * GET /apps/:app/stack
 *
 * Get a list of the possible stacks for the app
 *
 * @param  {string}   appName The name of the Heroku app
 * @param  {Function} next
 *
 * @example
 * api.getStack('appName', function(err, res) {});
 */
module.exports.getStack = function getStack(appName, next) {
  return request
    .get(baseEndpoint + '/apps/' + appName + '/stack')
    .end(next);
};

/**
 * PUT /apps/:app/stack
 *
 * Update the stack an app sits upon
 *
 * @param  {string}   appName The name of the Heroku app
 * @param  {string}   stack   String name of the stack
 * @param  {Function} next
 *
 * @example
 * api.putStack('appName', 'bamboo-ree-1.8.7', function(err, res) {});
 */
module.exports.putStack = function putStack(appName, stack, next) {
  return request
    .put(baseEndpoint + '/apps/' + appName + '/stack')
    .send(stack)
    .end(next);
};
