'use strict';

var request = require('../../helpers/superagent')
  , baseEndpoint = "https://api.heroku.com";

module.exports = {};

/**
 * DELETE /features/:feature
 *
 * Remove a Heroku feature from the account or app
 *
 * @param  {string}   feature The name of the Heroku feature
 * @param  {string}   appName The name of the Heroku app
 * @param  {Function} next
 *
 * @example
 * // Remove `sumo-rankings` from the account
 * api.deleteFeature('sumo-rankings', function(err, res) {});
 * @example
 * // Remove 'user_env_compile' from an app
 * api.deleteFeature('user_env_compile', 'appName', function(err, res) {})
 */
module.exports.deleteFeature = function deleteFeature(feature, appName, next) {
  if ((typeof appName === 'function') && (! next)) {
    next = appName;
    appName = null;
  }
  var req = request.delete(baseEndpoint + '/features/' + feature);
  if (appName) req.query({ 'app' : appName });

  return req.end(next);
};

/**
 * GET /features
 * @param  {string}   appName The name of the Heorku app
 * @param  {Function} next
 *
 * @example
 * // List features on the account
 * api.getFeatures(function(err, res) {});
 * @example
 * // List features on an app
 * api.getFeatures('appName', function(err, res) {});
 */
module.exports.getFeatures = function getFeatures(appName, next) {
  if ((typeof appName === 'function') && (! next)) {
    next = appName;
    appName = null;
  }
  var req = request.get(baseEndpoint + '/features');
  if (appName) req.query({ 'app' : appName });

  return req.end(next);
};

/**
 * GET /features/:feature
 *
 * Get information on a specific feature
 *
 * @param  {string}   feature The name of the Heroku feature
 * @param  {string}   appName The name of the Heroku app
 * @param  {Function} next
 *
 * @example
 * api.getFeature('sumo-rankings', function(err, res) {});
 * @example
 * api.getFeature('user_env_compile', 'appName', function(err, res){});
 */
module.exports.getFeature = function getFeature(feature, appName, next) {
  if ((typeof appName === 'function') && (! next)) {
    next = appName;
    appName = null;
  }
  var req = request.get(baseEndpoint + '/features/' + feature);
  if (appName) req.query({ 'app' : appName });

  return req.end(next);
};

/**
 * POST /features/:feature
 *
 * Add a feature to an account or app
 *
 * @param  {string}   feature The name of the Heroku feature
 * @param  {string}   appName The name of the Heroku app
 * @param  {Function} next
 *
 * @example
 * // add Heroku Pipelines to the account
 * api.postFeature('sumo-rankings', function(err, res) {});
 * @example
 * // add 'user_env_compile' to an app
 * api.postFeature('user_env_compile', 'appName', function(err, res) {});
 */
module.exports.postFeature = function postFeature(feature, appName, next) {
  if ((typeof appName === 'function') && (! next)) {
    next = appName;
    appName = null;
  }
  var req = request.post(baseEndpoint + '/features/' + feature);
  if (appName) req.query({ 'app' : appName });

  return req.end(next);
};
