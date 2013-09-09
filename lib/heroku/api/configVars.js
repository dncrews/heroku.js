'use strict';

var request = require('../../helpers/superagent')
  , baseEndpoint = process.env.HEROKU_API_ENDPOINT || "https://api.heroku.com";

module.exports = {};

/**
 * DELETE /apps/:app/config_vars/:key
 *
 * Removes a configuration variable from an app
 *
 * @param  {string}   appName The name of the Heroku app
 * @param  {string}   key     The name of the configuration variable
 * @param  {Function} next
 *
 * @example
 * api.deleteConfigVar('appName', 'NODE_ENV', function(err, res) {});
 */
function deleteConfigVar(appName, key, next) {
  return request
    .delete(baseEndpoint + '/apps/' + appName + '/config_vars/' + key)
    .end(next);
}
module.exports.deleteConfigVar = deleteConfigVar;
module.exports.removeConfigVar = deleteConfigVar;
module.exports.rmConfigVar = deleteConfigVar;
module.exports.deleteConfig = deleteConfigVar;
module.exports.removeConfig = deleteConfigVar;
module.exports.rmConfig = deleteConfigVar;

/**
 * GET /apps/:app/config_vars
 *
 * Get the list of configuration variables
 *
 * @param  {string}   appName The name of the Heroku app
 * @param  {Function} next
 *
 * @example
 * api.getConfigVars('appName', function(err, res) {});
 */
function getConfigVars(appName, next) {
  return request
    .get(baseEndpoint + '/apps/' + appName + '/config_vars')
    .end(next);
}
module.exports.getConfigVars = getConfigVars;
module.exports.listConfigVars = getConfigVars;
module.exports.getConfig = getConfigVars;
module.exports.listConfig = getConfigVars;

/**
 * PUT /apps/:app/config_vars
 *
 * Add or replace configuration variables. It does not overwrite all vars,
 * it simply adds the ones listed to the existing list, overwriting any
 * that already exist.
 *
 * @param  {string}   appName The name of the Heroku app
 * @param  {object}   vars    Key : value of the configs adding/replacing
 * @param  {Function} next
 *
 * @example
 * api.putConfigVars('appName', { "KEY" : "value" }, function(err, res) {});
 */
function putConfigVars(appName, vars, next) {
  if (typeof vars !== 'object') vars = {};
  return request
    .put(baseEndpoint + '/apps/' + appName + '/config_vars')
    .send(vars)
    .end(next);
}
module.exports.putConfigVars = putConfigVars;
module.exports.updateConfigVars = putConfigVars;
module.exports.addConfigVars = putConfigVars;
module.exports.putConfig = putConfigVars;
module.exports.updateConfig = putConfigVars;
module.exports.addConfig = putConfigVars;
