'use strict';

var extend = require('node.extend')

  , superagent = require('../helpers/superagent')

  , addons = require('./api/addons')
  , apps = require('./api/apps')
  , login = require('./api/login')
  , releases = require('./api/releases')
  , processes = require('./api/processes');

function HerokuAPI(options, next) {
  var apiKey, username, password;
  if (typeof options !== 'object') options = {};

  apiKey = options.apiKey || process.env.HEROKU_API_KEY;
  if (! apiKey) {
    if (options.email && options.apiToken) {
      apiKey = '' + options.email + ':' + options.apiToken;
    } else if (options.username && options.password) {
      if (! next) {
        throw new Error('Creation with username and password is async and requires a callback');
      }
      return login.postLogin(options.username, options.password, function(err, res) {
        if(err) throw err;

        parseAPIKey.apply(this, [res.body['api_key']]);
      });
    }
    return parseAPIKey.apply(this, [apiKey]);
  }

  function parseAPIKey(key) {
    if (! key) throw new Error('No api token provided');
    var apiKey = new Buffer('' + key).toString('base64');

    superagent.setAPIKey(apiKey);
    // Return via callback if async-driven
    if (next) return next(this);

    return this;
  }
}

extend(HerokuAPI.prototype, addons, apps, releases, processes);

module.exports = HerokuAPI;
