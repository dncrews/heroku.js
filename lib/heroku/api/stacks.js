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
function getStack(appName, next) {
  return request
    .get(baseEndpoint + '/apps/' + appName + '/stack')
    .end(next);
}
module.exports.getStack = getStack;
module.exports.listStack = getStack;

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
function putStack(appName, stack, next) {
  return request
    .put(baseEndpoint + '/apps/' + appName + '/stack')
    .send(stack)
    .end(next);
}
module.exports.putStack = putStack;
module.exports.updateStack = putStack;
module.exports.setStack = putStack;
