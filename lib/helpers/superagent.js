'use strict';

var defaults = require('superagent-defaults');

var email = process.env.HEROKU_EMAIL
  , apiToken = process.env.HEROKU_API_TOKEN
  , authHeader = new Buffer('' + email + ':' + apiToken).toString('base64');

module.exports = function() {
  var superagent = defaults()
    .on('request', function(req) {
      req
        .set('Authorization', 'Basic ' + authHeader)
        .set('Accept', "application/vnd.heroku+json; version=3")
        .on('error', function errorHandler(err) {
          console.log("HANDLING ERROR:");
          console.log(err);
        });
    });
}
