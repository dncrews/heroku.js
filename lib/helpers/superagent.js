'use strict';

var defaults = require('superagent-defaults');

var email = process.env.HEROKU_EMAIL
  , apiToken = process.env.HEROKU_API_TOKEN
  , authHeader = new Buffer('' + email + ':' + apiToken).toString('base64');



var superagent = module.exports = defaults()
  .on('request', function(req) {
    req
      .set('Authorization', 'Basic ' + authHeader)
      // .set('Accept', "application/vnd.heroku+json; version=3")
      .set('Accept', "application/json")
      .on('error', function errorHandler(err) {
        console.log("HANDLING ERROR:");
        console.log(err);
      });
  });
