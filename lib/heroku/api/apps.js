'use strict';

var request = require('../../helpers/superagent')
  , baseEndpoint = process.env.HEROKU_API_ENDPOINT || "https://api.heroku.com";

module.exports = {};

/**
 * DELETE /apps/:app
 *
 * Delete an app
 *
 * @param  {string}   appName The name of the Heroku app
 * @param  {Function} next
 *
 * @example
 * api.deleteApp('appName', function(err, res) {});
 */
function deleteApp(appName, next) {
  return request
    .delete(baseEndpoint + '/apps/' + appName)
    .end(next);
}
module.exports.deleteApp = deleteApp;
module.exports.removeApp = deleteApp;
module.exports.rmApp = deleteApp;

/**
 * GET /apps
 *
 * Get a list of all of your apps
 *
 * @param  {Function} next
 *
 * @example
 * api.getApps(function(err, res) {});
 */
function getApps(next) {
  return request
    .get(baseEndpoint + '/apps')
    .end(next);
}
module.exports.getApps = getApps;
module.exports.listApps = getApps;

/**
 * GET /apps/:app
 *
 * Get information on a specific app
 *
 * @param  {string}   appName The name of the Heroku app
 * @param  {Function} next
 *
 * @example
 * api.getApp('appName', function(err, res) {});
 */
function getApp(appName, next) {
  return request
    .get(baseEndpoint + '/apps/' + appName)
    .end(next);
}
module.exports.getApp = getApp;

/**
 * GET /apps/:app/server/maintenance
 *
 * Check to see if your app is in maintenance mode
 *
 * @param  {string}   appName The name of the Heroku app
 * @param  {Function} next
 *
 * @example
 * api.getAppMaintenance('appName', function(err, res) {});
 */
function getAppMaintenance(appName, next) {
  return request
    .get(baseEndpoint + '/apps/' + appName + '/server/maintenance')
    .end(next);
}
module.exports.getAppMaintenance = getAppMaintenance;

/**
 * POST /apps
 *
 * Create a new app
 *
 * @param  {object}   params Key : value of the new app parameters
 * @param  {Function} next
 *
 * @example
 * // Create a new app with all default values, including random generated name
 * api.postApp({}, function(err, res) {});
 * @example
 * // Create an app named 'awesome-app'
 * api.postApp({ 'name' : 'awesome-app' }, function(err, res) {});
 * @example
 * // Create an app on the Cedar stack
 * api.postApp({ 'stack' : 'cedar' }, function(err, res) {});
 */
function postApp(params, next) {
  if (typeof params !== 'object') params = {};

  return request
    .post(baseEndpoint + '/apps')
    .query(params)
    .end(next);
}
module.exports.postApp = postApp;
module.exports.addApp = postApp;
module.exports.createApp = postApp;

/**
 * POST /apps/:app/server/maintenance
 *
 * Put an app into or out of Maintenance Mode
 *
 * @param  {string}   appName       The name of the Heroku app
 * @param  {boolean}  inMaintenance True if app should be in Maintenance Mode
 * @param  {Function} next
 *
 * @example
 * // Put your app into maintenance mode
 * api.postAppMaintenance('appName', true, function(err, res) {});
 * @example
 * // Put your app out of maintenance mode
 * api.postAppMaintenance('appName', false, function(err, res) {});
 */
function postAppMaintenance(appName, inMaintenance, next) {
  inMaintenance = (inMaintenance === true || inMaintenance === 'true');

  return request
    .post(baseEndpoint + '/apps/' + appName + '/server/maintenance')
    .query({ "maintenance_mode" : inMaintenance })
    .end(next);
}
module.exports.postAppMaintenance = postAppMaintenance;
module.exports.setAppMaintenance = postAppMaintenance;

/**
 * PUT /apps/:app
 *
 * Update name, region (?), stack (?), or owner of an app
 *
 * @param  {string}   appName The name of the Heroku app
 * @param  {object}   params  Key : value parameters of what to change on the app
 * @param  {Function} next
 *
 * @example
 * // Change the name of your Heroku app to 'super-app'
 * api.putApp('appName', { 'name' : 'super-app' }, function(err, res) {});
 * @example
 * // Transfer ownership of your app to the user 'email@example.com'
 * api.putApp('appName', { 'transfer_owner' : 'email@example.com' }, function(err, res) {});
 */
function putApp(appName, params, next) {
  return request
    .put(baseEndpoint + '/apps/' + appName)
    .query(params)
    .end(next);
}
module.exports.putApp = putApp;
module.exports.updateApp = putApp;
