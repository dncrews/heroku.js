'use strict';

var request = require('../../helpers/superagent')
  , baseEndpoint = "https://api.heroku.com";

module.exports = {};

/**
 * GET /apps/:app/releases
 *
 * Get a list of all releases
 *
 * @param  {string}   appName The name of the Heroku app
 * @param  {Function} next
 *
 * @example
 * // Gets the full list of app releases
 * api.getReleases('appName', function(err, res) {});
 */
module.exports.getReleases = function getReleases(appName, next) {
  return request
    .get(baseEndpoint + '/apps/' + appName + '/releases')
    .end(next);
}

/**
 * GET /apps/:app/release
 *
 * Get the information of a specific release
 *
 * @param  {string}   appName The name of the Heroku app
 * @param  {string}   release The release id or version
 * @param  {Function} next
 *
 * @example
 * // Get information for release id 01234567-89ab-cdef-0123-456789abcdef
 * api.getRelease('appName', '01234567-89ab-cdef-0123-456789abcdef', function(err, res) {});
 * @example
 * // Get information for release version 456
 * api.getRelease('appName', '456', function(err, res) {});
 */
module.exports.getRelease = function getRelease(appName, release, next) {
  return request
    .get(baseEndpoint + '/apps/' + appName + '/releases/' + release)
    .end(next);
}

/**
 * POST /apps/:app/release
 *
 * Post a release. This is how you perform a rollback.
 *
 * @param  {string}   appName The name of the Heroku app
 * @param  {string}   release The release id or version
 * @param  {Function} next
 *
 * @example
 * // Roll back to id 01234567-89ab-cdef-0123-456789abcdef
 * api.postRelease('appName', '01234567-89ab-cdef-0123-456789abcdef', function(err, res) {});
 * @example
 * // Roll back to version 456
 * api.postRelease('appName', '456', function(err, res) {});
 */
module.exports.postRelease = function postRelease(appName, release, next) {
  if (! release) next(new Error('No release given'));

  return request
    .post(baseEndpoint + '/apps/' + appName + '/releases')
    .query({ 'rollback' : release })
    .end(next);
}