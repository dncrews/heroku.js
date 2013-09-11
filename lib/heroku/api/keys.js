'use strict';

var request = require('../../helpers/superagent')
  , baseEndpoint = process.env.HEROKU_API_ENDPOINT || "https://api.heroku.com";

module.exports = {};

/**
 * DELETE /keys/:key
 *
 * Remove an SSH key from the account
 *
 * @param  {string}   key  The name of the SSH Key
 * @param  {Function} next
 *
 * @example
 * api.deleteKey('user@computer.local', function(err, res) {});
 */
function deleteKey(key, next) {
  return request
    .delete(baseEndpoint + '/keys/' + key)
    .end(next);
}
module.exports.deleteKey = deleteKey;
/**
 * @name removeKey
 * @function
 * @see deleteKey
 */
module.exports.removeKey = deleteKey;
/**
 * @name rmKey
 * @function
 * @see deleteKey
 */
module.exports.rmKey = deleteKey;

/**
 * DELETE /keys
 *
 * Remove all SSH keys from the account
 *
 * @param  {Function} next
 *
 * @example
 * api.deleteKeys(function(err, res) {});
 */
function deleteKeys(next) {
  return request
    .delete(baseEndpoint + '/keys')
    .end(next);
}
module.exports.deleteKeys = deleteKeys;
/**
 * @name removeKeys
 * @function
 * @see deleteKeys
 */
module.exports.removeKeys = deleteKeys;
/**
 * @name rmKeys
 * @function
 * @see deleteKeys
 */
module.exports.rmKeys = deleteKeys;

/**
 * GET /keys
 *
 * Get a list of all SSH keys on the account
 *
 * @param  {Function} next
 *
 * @example
 * api.getKeys(function(err, res) {});
 */
function getKeys(next) {
  return request
    .get(baseEndpoint + '/keys')
    .end(next);
}
module.exports.getKeys = getKeys;
/**
 * @name listKeys
 * @function
 * @see getKeys
 */
module.exports.listKeys = getKeys;

/**
 * POST /keys
 *
 * Add an SSH key to the account
 *
 * @param  {string} key The fully value of the SSH key
 * @param  {Function} next
 *
 * @example
 * api.postKey('ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCz29znMi/UJX/nvkRSO5FFugKhU9DkkI53E0vXUnP8zeLFxMgyUqmXryPVjWtGzz2LRWqjm14SbqHAmM44pGHVfBIp6wCKBWSUYGv/FxOulwYgtWzz4moxWLZrFyWWgJAnehcVUifHNgzKwT2ovWm2ns52681Z8yFK3K8/uLStDjLIaPePEOaxaTvgIxZNsfyEoXoHcyTPwdR1GtQuDTuDYqYmjmPCoKybYnXrTQ1QFuQxDneBkswQYSl0H2aLf3uBK4F01hr+azXQuSe39eSV4I/TqzmNJlanpILT9Jz3/J1i4r6brpF3AxLnFnb9ufIbzQAIa/VZIulfrZkcBsUl user@computer.local', function(err, res) {});
 */
function postKey(key, next) {
  request
    .post(baseEndpoint + '/keys')
    .send(key)
    .end(next);
}
module.exports.postKey = postKey;
/**
 * @name createKey
 * @function
 * @see postKey
 */
module.exports.createKey = postKey;
/**
 * @name addKey
 * @function
 * @see postKey
 */
module.exports.addKey = postKey;
