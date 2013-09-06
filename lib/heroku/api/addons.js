'use strict';

var request = require('../../helpers/superagent')
  , baseEndpoint = "https://api.heroku.com";

module.exports = {};

/**
 * DELETE /apps/:app/addons/:addon
 *
 * Remove an addon from a specified app
 *
 * @param  {string}   appName The name of the Heroku app
 * @param  {string}   addon   The name of the addon
 * @param  {Function} next
 *
 * @example
 * // Removes custom domains
 * api.deleteAddon('appName', 'custom_domains:basic', function(err, res) {});
 */
module.exports.deleteAddon = function deleteAddon(appName, addon, next) {
  return request
    .delete(baseEndpoint + '/apps/' + appName + '/addons/' + addon)
    .end(next);
};

/**
 * GET /addons
 * GET /apps/:app/addons
 *
 * Get a list of addons used either in the whole account, or on an app
 *
 * @param  {string}   appName The name of the Heroku app
 * @param  {Function} next
 *
 * @example
 * // Get a list of all addons on an account (I think)
 * api.getAddons(null, function(err, res) {});
 * // Get a list of all addons on an app
 * api.getAddons('appName', function(err, res) {});
 */
module.exports.getAddons = function getAddons(appName, next) {
  var url = '';
  if (appName) url = '/apps/' + appName;
  return request
    .get(baseEndpoint + url + '/addons')
    .end(next);
};

/**
 * POST /apps/:app/addons/:addon
 *
 * Add an addon to an app
 *
 * @param  {string}   appName The name of the Heroku app
 * @param  {string}   addon   The name:level of the addon
 * @param  {object}   config  Key : value of addon configuration
 * @param  {Function} next
 *
 * @example
 * // Add pgbackups addon to the app
 * api.postAddon('appName', 'pgbackups:basic', {}, function(err, res) {});
 * @example
 * // Add http deploy hooks to the app with configuration
 * api.postAddon('appName', 'deployhooks:http', { 'url' : 'http://example.com' }, function(err, res) {});
 */
module.exports.postAddon = function postAddon(appName, addon, config, next) {
  if (typeof config !== 'object') config = {};

  return request
    .post(baseEndpoint + '/apps/' + appName + '/addons/' + addon)
    .query(config)
    .end(next);
};

/**
 * PUT /apps/:app/addons/:addon
 *
 * Change addon levels
 *
 * @param  {string}   appName The name of the Heroku app
 * @param  {string}   addon   The name:level of the addon
 * @param  {object}   config  Key : value of the addon configuration
 * @param  {Function} next
 *
 * @example
 * // Update pgbackups: addon to pgbackups:plus
 * api.putAddon('appName', 'pgbackups:plus', {}, function(err, res) {});
 */
module.exports.putAddon = function putAddon(appName, addon, config, next) {
  if (typeof config !== 'object') config = {};

  return request
    .put(baseEndpoint + '/apps/' + appName + '/addons/' + addon)
    .query(config)
    .end(next);
};
