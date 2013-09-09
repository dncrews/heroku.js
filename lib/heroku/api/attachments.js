'use strict';

var request = require('../../helpers/superagent')
  , baseEndpoint = process.env.HEROKU_API_ENDPOINT || "https://api.heroku.com";

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
function getAttachments(appName, next) {
  return request
    .get(baseEndpoint + '/apps/' + appName + '/attachments')
    .end(next);
}
module.exports.getAttachments = getAttachments;
module.exports.listAttachments = getAttachments;
