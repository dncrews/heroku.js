'use strict';

var request = require('../../helpers/superagent')
  , baseEndpoint = process.env.HEROKU_API_ENDPOINT || "https://api.heroku.com";

module.exports = {};

/**
 * GET /apps/:app/logs
 *
 * Get the logs from the app
 *
 * @param  {string}   appName The name of the Heroku app
 * @param  {object}   options Key : value of the log options
 * @param  {Function} next
 *
 * @example
 * api.getLogs('appName', function(err, res) {});
 * @example
 * api.getLogs('appName', { 'logplex' : 'true' }, function(err, res) {});
 */
function getLogs(appName, options, next) {
  if ((typeof options === 'function') && (! next)) {
    next = options;
    options = {};
  }
  if (typeof options !== 'object') options = {};
  options.logplex = typeof options.logplex !== 'undefined' ? options.logplex : true;

  return request
    .get(baseEndpoint + '/apps/' + appName + 'logs')
    .query(options)
    .end(next);
}
module.exports.getLogs = getLogs;
module.exports.listLogs = getLogs;
module.exports.fetchLogs = getLogs;
