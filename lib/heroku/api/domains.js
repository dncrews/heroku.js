'use strict';

var request = require('../../helpers/superagent')
  , baseEndpoint = process.env.HEROKU_API_ENDPOINT || "https://api.heroku.com";

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
function deleteDomain(appName, domain, next) {
  return request
    .delete(baseEndpoint + '/apps/' + appName + '/domains/' + domain)
    .end(next);
}
module.exports.deleteDomain = deleteDomain;
/**
 * @name removeDomain
 * @function
 * @see deleteDomain
 */
module.exports.removeDomain = deleteDomain;
/**
 * @name rmDomain
 * @function
 * @see deleteDomain
 */
module.exports.rmDomain = deleteDomain;

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
function deleteDomains(appName, next) {
  return request
    .delete(baseEndpoint + '/apps/' + appName + '/domains')
    .end(next);
}
module.exports.deleteDomains = deleteDomains;
/**
 * @name removeDomains
 * @function
 * @see deleteDomains
 */
module.exports.removeDomains = deleteDomains;
/**
 * @name rmDomains
 * @function
 * @see deleteDomains
 */
module.exports.rmDomains = deleteDomains;

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
function getDomains(appName, next) {
  return request
    .get(baseEndpoint + '/apps/' + appName + '/domains')
    .end(next);
}
module.exports.getDomains = getDomains;
/**
 * @name listDomains
 * @function
 * @see getDomains
 */
module.exports.listDomains = getDomains;

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
function postDomain(appName, domain, next) {
  return request
    .post(baseEndpoint + '/apps/' + appName + '/domains')
    .query({ 'domain_name[domain]' : domain })
    .end(next);
}
module.exports.postDomain = postDomain;
/**
 * @name updateDomain
 * @function
 * @see postDomain
 */
module.exports.updateDomain = postDomain;
