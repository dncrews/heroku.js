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
/**
 * @name removeConfigVar
 * @function
 * @see deleteConfigVar
 */
module.exports.removeConfigVar = deleteConfigVar;
/**
 * @name rmConfigVar
 * @function
 * @see deleteConfigVar
 */
module.exports.rmConfigVar = deleteConfigVar;
/**
 * @name deleteConfig
 * @function
 * @see deleteConfigVar
 */
module.exports.deleteConfig = deleteConfigVar;
/**
 * @name removeConfig
 * @function
 * @see deleteConfigVar
 */
module.exports.removeConfig = deleteConfigVar;
/**
 * @name rmConfig
 * @function
 * @see deleteConfigVar
 */
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
/**
 * @name listConfigVars
 * @function
 * @see getConfigVars
 */
module.exports.listConfigVars = getConfigVars;
/**
 * @name getConfig
 * @function
 * @see getConfigVars
 */
module.exports.getConfig = getConfigVars;
/**
 * @name listConfig
 * @function
 * @see getConfigVars
 */
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
/**
 * @name updateConfigVars
 * @function
 * @see putConfigVars
 */
module.exports.updateConfigVars = putConfigVars;
/**
 * @name addConfigVars
 * @function
 * @see putConfigVars
 */
module.exports.addConfigVars = putConfigVars;
/**
 * @name putConfig
 * @function
 * @see putConfigVars
 */
module.exports.putConfig = putConfigVars;
/**
 * @name updateConfig
 * @function
 * @see putConfigVars
 */
module.exports.updateConfig = putConfigVars;
/**
 * @name addConfig
 * @function
 * @see putConfigVars
 */
module.exports.addConfig = putConfigVars;
