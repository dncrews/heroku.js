'use strict';

var request = require('../../helpers/superagent')
  , baseEndpoint = process.env.HEROKU_API_ENDPOINT || "https://api.heroku.com";

module.exports = {};

/**
 * DELETE /apps/:app/ssl-endpoints/:cname
 *
 * Remove an SSL endpoint from the app
 *
 * @param  {string}   appName The name of the Heroku app
 * @param  {string}   cname   The cname to remove the endpoint from
 * @param  {Function} next
 *
 * @example
 * api.deleteSSLEndpoint('appName', 'example.herokussl.com', function(err, res) {});
 */
module.exports.deleteSSLEndpoint = function deleteSSLEndpoint(appName, cname, next) {
  return request
    .delete(baseEndpoint + '/apps/' + appName + 'ssl-endpoints/' + cname)
    .end(next);
};

/**
 * GET /apps/:app/ssl-endpoints/:cname
 *
 * Get info on an SSL endpoint
 *
 * @param  {string}   appName The name of the Heroku app
 * @param  {string}   cname   The cname to get SSL info for
 * @param  {Function} next
 *
 * @example
 * api.getSSLEndpoint('appName', 'example.herokussl.com', function(err, res) {});
 */
module.exports.getSSLEndpoint = function getSSLEndpoint(appName, cname, next) {
  return request
    .get(baseEndpoint + '/apps/' + appName + '/ssl-endpoints/' + cname)
    .end(next);
};

/**
 * GET /apps/:app/ssl-endpoints
 *
 * Get a list of all of the SSL endpoints for an app
 *
 * @param  {string}   appName The name of the Heroku app
 * @param  {Function} next
 *
 * @example
 * api.getSSLEndpoints('appName', function(err, res) {});
 */
module.exports.getSSLEndpoints = function getSSLEndpoints(appName, next) {
  return request
    .get(baseEndpoint + '/apps/' + appName + '/ssl-endpoints')
    .end(next);
};

/**
 * POST /apps/:app/ssl-endpoints
 *
 * Create an SSL Endpoint for an app
 *
 * @param  {string}   appName The name of the Heroku app
 * @param  {string}   pem     The string content of the pem file for the certificate
 * @param  {string}   key     The string content of the private key of the certificate
 * @param  {Function} next
 *
 * @example
 * api.postSSLEndpoint('appName', fs.readFileSync('cert.pem'), fs.readFileSync('cert.key'), function(err, res) {});
 */
module.exports.postSSLEndpoint = function postSSLEndpoint(appName, pem, key, next) {
  return request
    .post(baseEndpoint + '/apps/' + appName + '/ssl-endpoints')
    .query({ 'key' : key, 'pem' : pem })
    .end(next);
};

/**
 * POST /apps/:ssl-endpoints/:cname/rollback
 *
 * Roll back to a previous ssl endpoint
 *
 * @param  {string}   appName The name of the Heroku app
 * @param  {string}   cname   The cname to roll back
 * @param  {Function} next
 *
 * @example
 * api.postSSLEndpointRollback('appName', 'example.herokussl.com', function(err, res) {});
 */
module.exports.postSSLEndpointRollback = function postSSLEndpointRollback(appName, cname, next) {
  return request
    .post(baseEndpoint + '/apps/' + appName + '/ssl-endpoints/' + cname + '/rollback')
    .end(next);
};

/**
 * PUT /apps/:app/ssl-endpoints/:cname
 *
 * Update the contents of the SSL endpoint's certificate
 *
 * @param  {string}   appName The name of the Heroku app
 * @param  {string}   cname   The cname of the SSL endpoint to update
 * @param  {string}   pem     The string content of the pem file for the certificate
 * @param  {string}   key     The string content of the private key of the certificate
 * @param  {Function} next
 *
 * @example
 * api.putSSLEndpoint('appName', 'example.herokussl.com', fs.readFileSync('cert.pem'), fs.readFileSync('cert.key'), function(err, res) {});
 */
module.exports.putSSLEndpoint = function putSSLEndpoint(appName, cname, pem, key, next) {
  return request
    .post(baseEndpoint + '/apps/' + appName + '/ssl-endpoints/' + cname)
    .query({ 'key' : key, 'pem' : pem })
    .end(next);
};
