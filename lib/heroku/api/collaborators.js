'use strict';

var request = require('../../helpers/superagent')
  , baseEndpoint = process.env.HEROKU_API_ENDPOINT || "https://api.heroku.com";

module.exports = {};

/**
 * DELETE /apps/:app/collaborators/:email
 *
 * Remove a collaborator from an app
 *
 * @param  {string}   appName The name of the Heroku app
 * @param  {string}   email   Email address of the collaborator
 * @param  {Function} next
 *
 * @example
 * api.deleteCollaborator('appName', 'email@example.com', function(err, res) {});
 */
function deleteCollaborator(appName, email, next) {
  return request
    .delete(baseEndpoint + '/apps/' + appName + '/collaborators/' + email)
    .end(next);
}
module.exports.deleteCollaborator = deleteCollaborator;
/**
 * @name removeCollaborator
 * @function
 * @see deleteCollaborator
 */
module.exports.removeCollaborator = deleteCollaborator;
/**
 * @name rmCollaborator
 * @function
 * @see deleteCollaborator
 */
module.exports.rmCollaborator = deleteCollaborator;

/**
 * GET /apps/:app/collaborators
 *
 * Get a list of all of the collaborators of an app
 *
 * @param  {string}   appName The name of the Heroku app
 * @param  {Function} next
 *
 * @example
 * api.getCollaborators('appName', function(err, res) {});
 */
function getCollaborators(appName, next) {
  return request
    .get(baseEndpoint + '/apps/' + appName + '/collaborators')
    .end(next);
}
module.exports.getCollaborators = getCollaborators;
/**
 * @name listCollaborators
 * @function
 * @see getCollaborators
 */
module.exports.listCollaborators = getCollaborators;

/**
 * POST /apps/:app/collaborators
 *
 * Add a new collaborator to an app
 *
 * @param  {string}   appName The name of the Heroku app
 * @param  {string}   email   The Heroku email address of the new collaborator
 * @param  {Function} next
 *
 * @example
 * api.postCollaborator('appName', 'email@example.com', function(err, res) {});
 */
function postCollaborator(appName, email, next) {
  return request
    .get(baseEndpoint + '/apps/' + appName + '/collaborators')
    .query({ 'collaborators[email]' : email })
    .end(next);
}
module.exports.postCollaborator = postCollaborator;
/**
 * @name addCollaborator
 * @function
 * @see postCollaborator
 */
module.exports.addCollaborator = postCollaborator;
/**
 * @name createCollaborator
 * @function
 * @see postCollaborator
 */
module.exports.createCollaborator = postCollaborator;
