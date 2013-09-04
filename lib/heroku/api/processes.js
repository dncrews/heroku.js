'use strict';

var request = require('../../helpers/superagent')
  , extend = require('node.extend')
  , baseEndpoint = "https://api.heroku.com";

module.exports = {};

/**
 * GET /apps/:app/ps
 *
 * Gets a list of the processes of a specific app
 *
 * @param  {string}   appName The name of the Heroku app
 * @param  {Function} next
 *
 * @example
 * // returns a list of the processes
 * api.getPs('appName', function(err, res){});
 */
module.exports.getPs = function getPs(appName, next) {
  return request
    .get(baseEndpoint + '/apps/' + appName + '/ps')
    .end(next);
}

/**
 * POST /apps/:app/ps
 *
 * Post a command to all processes (I think?)
 *
 * @param  {string}   appName The name of the Heroku app
 * @param  {string}   command The command you want to pass to the ps
 * @param  {object}   options Object of options to pass
 * @param  {Function} next
 *
 * @example
 * // passes `pwd` to each of the processes
 * api.postPs('appName', 'pwd', null, function(err, res) {});
 * @example
 * // uses attach, whatever that is
 * api.postPs('appName', 'pwd', { 'attach' : true}, function(err, res) {});
 */
module.exports.postPs = function postPs(appName, command, options, next) {
  if (typeof options !== 'object') options = {};
  options = extend({ 'command' : command }, options);

  return request
    .post(baseEndpoint + '/apps/' + appName + '/ps')
    .query(options)
    .end(next);
}

/**
 * POST /apps/:app/ps/restart
 *
 * Request a restart of all or some of the processes of an app
 *
 * @param  {string}   appName The name of the Heroku app
 * @param  {object}   options Object of options to pass
 * @param  {Function} next
 *
 * @example
 * // restarts all processes
 * api.postPsRestart('appName', {}, function(err, res) {});
 * @example
 * // restarts a single process
 * api.postPsRestart('appName', {'ps' : 'web.1'}, function(err, res) {});
 * @example
 * // restarts all web processes
 * api.postPsRestart('appName', {'type' : 'web'}, function(err, res) {});
 */
module.exports.postPsRestart = function postPsRestart(appName, options, next) {
  if (typeof options !== 'object') options = {};

  return request
    .post(baseEndpoint + '/apps/' + appName + '/ps/restart')
    .query(options)
    .end(next);
}

/**
 * POST /apps/:app/ps/scale
 *
 * Scale processes of a certain type to a specified number
 *
 * @param  {string}   appName  The name of the Heroku app
 * @param  {string}   type     Process type to scale
 * @param  {int}      quantity Number of processes to scale to
 * @param  {Function} next
 *
 * @example
 * // scale web processes to 2
 * api.postPsScale('appName', 'web', 2, function(err, res) {});
 * // scale worker processes to 1
 * api.postPsScale('appName', 'worker', 1, function(err, res) {});
 */
module.exports.postPsScale = function postPsScale(appName, type, quantity, next) {
  return request
    .post(baseEndpoint + '/apps/' + appName + '/ps/scale')
    .query({
      'type' : type,
      'qty' : quantity
    })
    .end(next);
}

/**
 * POST /apps/:app/ps/stop
 *
 * Stop a process or processes of a type
 *
 * @param  {string}   appName The name of the Heroku app
 * @param  {object}   options Key value of process list or types
 * @param  {Function} next
 *
 * @example
 * // Stop a particular process
 * api.postPsStop('appName', {'ps' : 'web.1'}, function(err, res) {})
 * @example
 * // Stop all worker processes
 * api.postPsStop('appName', {'type' : 'worker'}, function(err, res) {})
 */
module.exports.postPsStop = function postPsStop(appName, options, next) {
  if (typeof options !== 'object') options = {};
  return request
    .post(baseEndpoint + '/apps/' + appName + '/ps/stop')
    .query(options)
    .end(next);
}

/**
 * PUT /apps/:app/dynos
 *
 * The old (bamboo) way of scaling dynos. Not compatible with Cedar stack
 *
 * @param  {string}   appName The name of the Heroku app
 * @param  {integer}  dynos   Number of dynos to scale to
 * @param  {Function} next
 *
 * @example
 * // Scale Bamboo app to 2 dynos
 * api.putDynos('appName', 2, function(err, res) {});
 */
module.exports.putDynos = function putDynos(appName, dynos, next) {
  return request
    .put(baseEndpoint + '/apps/' + appName + '/dynos')
    .query({
      'dynos' : dynos
    })
    .end(next);
}

/**
 * PUT /apps/:app/workers
 *
 * The old (bamboo) way of scaling workers. Not compatible with Cedar stack
 *
 * @param  {string}   appName The name of the Heroku app
 * @param  {integer}   workers Number of workers to scale to
 * @param  {Function} next
 *
 * @example
 * // Scale Bamboo app to 2 workers
 * api.putWorkers('appName', 2, function(err, res) {});
 */
module.exports.putWorkers = function putWorkers(appName, workers, next) {
  return request
    .put(baseEndpoint + '/apps/' + appName + '/workers')
    .query({
      'workers' : workers
    })
    .end(next);
}

/**
 * PUT /apps/:app/formation
 *
 * Set the dyno size for all dynos in an app
 *
 * @param  {string}   appName The name of the Heroku app
 * @param  {object}   options Key value of type : size
 * @param  {Function} next
 *
 * @example
 * // Set dyno size to 2x for all web dynos
 * api.putFormation('appName', {'web': '2X'}, function(err, res) {});
 */
module.exports.putFormation = function putFormation(appName, options, next) {
  if (typeof options !== 'object') options = {};
  return request
    .put(baseEndpoint + '/apps/' + appName + '/formation')
    .send(options)
    .end(next);
}

/**
 * GET /apps/:app/dyno-types
 *
 * Get the dyno types for the Heroku app
 *
 * @param  {string}   appName The Heroku app name
 * @param  {Function} next
 *
 * @example
 * // Get the list of dyno types
 * api.getDynoTypes('appName', function(err, res) {});
 */
module.exports.getDynoTypes = function getDynoTypes(appName, next) {
  return request
    .put(baseEndpoint + '/apps/' + appName + '/dyno-types')
    .end(next);
}
