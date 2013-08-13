'use strict';

if (! process.env.HEROKU_EMAIL) {
  throw new Error("HEROKU_EMAIL must be set");
}
if (! process.env.HEROKU_API_TOKEN) {
  throw new Error("HEROKU_API_TOKEN must be set");
}

module.exports = {
  "account" : require('./lib/heroku/account')
}
