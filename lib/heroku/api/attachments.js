'use strict';

var request = require('../../helpers/superagent')
  , baseEndpoint = "https://api.heroku.com";

module.exports = {};

/**
 * GET /apps/:app/attachments
 *
 * Get a list of app attachments?
 *
 * @param  {string}   appName The name of the Heroku app
 * @param  {Function} next
 *
 * @example
 * api.getAttachments('appName', function(err, res) {});
 */
module.exports.getAttachments = function getAttachments(appName, next) {
  return request
    .get(baseEndpoint + '/apps/' + appName + '/attachments')
    .end(next);
};
