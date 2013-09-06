'use strict';

var request = require('../../helpers/superagent')
  , baseEndpoint = "https://api.heroku.com";

module.exports = {};

/**
 * DELETE /apps/:app/domains/:domain
 *
 * Remove a domain from an app
 *
 * @param  {string}   appName The name of the Heroku app
 * @param  {string}   domain  The domain name
 * @param  {Function} next
 *
 * @example
 * api.deleteDomain('appName', 'example.com', function(err, res) {});
 */
module.exports.deleteDomain = function deleteDomain(appName, domain, next) {
  return request
    .delete(baseEndpoint + '/apps/' + appName + '/domains/' + domain)
    .end(next);
}

/**
 * DELETE /apps/:app/domains
 *
 * Remove all domains from an app
 *
 * @param  {string}   appName The name of the Heroku app
 * @param  {Function} next
 *
 * @example
 * api.deleteDomains('appName', function(err, res) {});
 */
module.exports.deleteDomains = function deleteDomains(appName, next) {
  return request
    .delete(baseEndpoint + '/apps/' + appName + '/domains')
    .end(next);
}

/**
 * GET /apps/:app/domains
 *
 * Get a list of the domains of an app
 *
 * @param  {string}   appName The name of the Heorku app
 * @param  {Function} next
 *
 * @example
 * api.getDomains('appName', function(err, res) {});
 */
module.exports.getDomains = function getDomains(appName, next) {
  return request
    .get(baseEndpoint + '/apps/' + appName + '/domains')
    .end(next);
}

/**
 * POST /apps/:app/domains
 *
 * Add a domain to an app
 *
 * @param  {string}   appName The name of the Heroku app
 * @param  {string}   domain  The domain name to add
 * @param  {Function} next
 *
 * @example
 * api.postDomain('appName', 'example.com', function(err, res) {});
 */
module.exports.postDomain = function postDomain(appName, domain, next) {
  return request
    .post(baseEndpoint + '/apps/' + appName + '/domains')
    .query({ 'domain_name[domain]' : domain })
    .end(next);
}
