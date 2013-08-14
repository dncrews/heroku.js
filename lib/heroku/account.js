var request = require('../helpers/superagent');

var baseEndpoint = "https://api.heroku.com";

module.exports = {
  "get" : getAccount,
  "patch" : patchAccount,
  "password" : changePassword
}

/**
 * Get the user's account information
 * @param  {function} next The callback method
 * @return {Object}        Returns the user's account object
 */
function getAccount(next) {
  request
    .get(baseEndpoint + '/account')
    .end(function(err, res) {
      if (err) next(err);

      next(res.body);
    });
}

/**
 * Update the account `allow_tracking` or `email` address
 * @param  {Object}   params This should be a key-value pairing with allow_tracking : boolean, or email : string
 * @param  {function} next   Callback method
 * @return {boolean}         Calls `next` with a boolean of whether it worked or not
 */
function patchAccount(params, next) {
  var data = {};
  if (typeof params !== 'object') {
    return next(new Error('patching requires an object'));
  }

  if (undefined !== allow_tracking) {
    data.allow_tracking = allow_tracking;
  }
  if (undefined !== email) {
    data.email = email;
  }

  if (isEmpty(data)) {
    return next(new Error('Account patching was called without parameters'));
  }

  request
    .patch(baseEndpoint + '/account')
    .send(data)
    .end(function(err, res) {
      if (res.statusCode === 200) {
        return next(true);
      }
      return next(false);
    });

}

/**
 * This will change the user's password. I'm pretty sure it also changes the user's API key, so this is breaking.
 * @param  {string}   oldPassword Current password
 * @param  {string}   newPassword New Password
 * @param  {Function} next        Callback method
 * @return {boolean}              Returns true if successful or error if not
 */
function changePassword(oldPassword, newPassword, next) {
  if ((typeof(oldPassword) !== 'string') || (typeof(newPassword) !== 'string')) {
    return next(new Error('Passwords must be in string format.'));
  }

  request
    .put(baseEndpoint + '/account/password')
    .send({
      "current_password" : oldPassword,
      "password" : newPassword
    })
    .end(function(err, res) {
      console.log(arguments);
      switch (res.statusCode) {
        case 200:
          return next(true);
          break;
        case 401:
          return next(new Error('Current Password was incorrect'));
          break;
        default:
          // Something else happened
          return next(false);
          break;
      }
    })
}

/**
 * Just using this to check for empty objects
 * @param  {object}  obj The object to check against
 * @return {Boolean}     Whether the object has values or not
 */
function isEmpty(obj) {
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) return false;
  }
  return true;
}
