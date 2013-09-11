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
function deleteSSLEndpoint(appName, cname, next) {
  return request
    .delete(baseEndpoint + '/apps/' + appName + 'ssl-endpoints/' + cname)
    .end(next);
}
module.exports.deleteSSLEndpoint = deleteSSLEndpoint;
/**
 * @name removeSSLEndpoint
 * @function
 * @see deleteSSLEndpoint
 */
module.exports.removeSSLEndpoint = deleteSSLEndpoint;
/**
 * @name rmSSLEndpoint
 * @function
 * @see deleteSSLEndpoint
 */
module.exports.rmSSLEndpoint = deleteSSLEndpoint;
/**
 * @name deleteSSL
 * @function
 * @see deleteSSLEndpoint
 */
module.exports.deleteSSL = deleteSSLEndpoint;
/**
 * @name removeSSL
 * @function
 * @see deleteSSLEndpoint
 */
module.exports.removeSSL = deleteSSLEndpoint;
/**
 * @name rmSSL
 * @function
 * @see deleteSSLEndpoint
 */
module.exports.rmSSL = deleteSSLEndpoint;

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
function getSSLEndpoint(appName, cname, next) {
  return request
    .get(baseEndpoint + '/apps/' + appName + '/ssl-endpoints/' + cname)
    .end(next);
}
module.exports.getSSLEndpoint = getSSLEndpoint;
/**
 * @name getSSL
 * @function
 * @see getSSLEndpoint
 */
module.exports.getSSL = getSSLEndpoint;

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
function getSSLEndpoints(appName, next) {
  return request
    .get(baseEndpoint + '/apps/' + appName + '/ssl-endpoints')
    .end(next);
}
module.exports.getSSLEndpoints = getSSLEndpoints;
/**
 * @name listSSLEndpoints
 * @function
 * @see getSSLEndpoints
 */
module.exports.listSSLEndpoints = getSSLEndpoints;
/**
 * @name getSSLs
 * @function
 * @see getSSLEndpoints
 */
module.exports.getSSLs = getSSLEndpoints;
/**
 * @name listSSLs
 * @function
 * @see getSSLEndpoints
 */
module.exports.listSSLs = getSSLEndpoints;
/**
 * @name listSSL
 * @function
 * @see getSSLEndpoints
 */
module.exports.listSSL = getSSLEndpoints;

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
function postSSLEndpoint(appName, pem, key, next) {
  return request
    .post(baseEndpoint + '/apps/' + appName + '/ssl-endpoints')
    .query({ 'key' : key, 'pem' : pem })
    .end(next);
}
module.exports.postSSLEndpoint = postSSLEndpoint;
/**
 * @name createSSLEndpoint
 * @function
 * @see postSSLEndpoint
 */
module.exports.createSSLEndpoint = postSSLEndpoint;
/**
 * @name addSSLEndpoint
 * @function
 * @see postSSLEndpoint
 */
module.exports.addSSLEndpoint = postSSLEndpoint;
/**
 * @name postSSL
 * @function
 * @see postSSLEndpoint
 */
module.exports.postSSL = postSSLEndpoint;
/**
 * @name createSSL
 * @function
 * @see postSSLEndpoint
 */
module.exports.createSSL = postSSLEndpoint;
/**
 * @name addSSL
 * @function
 * @see postSSLEndpoint
 */
module.exports.addSSL = postSSLEndpoint;

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
function postSSLEndpointRollback(appName, cname, next) {
  return request
    .post(baseEndpoint + '/apps/' + appName + '/ssl-endpoints/' + cname + '/rollback')
    .end(next);
}
module.exports.postSSLEndpointRollback = postSSLEndpointRollback;
/**
 * @name SSLRollback
 * @function
 * @see postSSLEndpointRollback
 */
module.exports.SSLRollback = postSSLEndpointRollback;
/**
 * @name rollbackSSL
 * @function
 * @see postSSLEndpointRollback
 */
module.exports.rollbackSSL = postSSLEndpointRollback;

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
function putSSLEndpoint(appName, cname, pem, key, next) {
  return request
    .post(baseEndpoint + '/apps/' + appName + '/ssl-endpoints/' + cname)
    .query({ 'key' : key, 'pem' : pem })
    .end(next);
}
module.exports.putSSLEndpoint = putSSLEndpoint;
/**
 * @name updateSSLEndpoint
 * @function
 * @see putSSLEndpoint
 */
module.exports.updateSSLEndpoint = putSSLEndpoint;
/**
 * @name putSSL
 * @function
 * @see putSSLEndpoint
 */
module.exports.putSSL = putSSLEndpoint;
/**
 * @name updateSSL
 * @function
 * @see putSSLEndpoint
 */
module.exports.updateSSL = putSSLEndpoint;
