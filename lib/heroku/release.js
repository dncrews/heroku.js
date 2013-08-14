var request = require('../helpers/superagent');

var baseEndpoint = "https://api.heroku.com";

module.exports = Release;

function Release() {
  return {
    "getAll" : getReleases.bind(this),
    "get" : getRelease.bind(this),
    "post" : postRelease.bind(this)
  }
}

function getReleases(appName, next) {
  request
    .post(baseEndpoint + '/apps/' + this.name + '/releases')
    .end(function(err, res) {
      if (res.statusCode === 200) {
        return next(res.body);
      }
      return next(new Error('something went wrong'));
    });
}


var request = require('../helpers/superagent');

var baseEndpoint = "https://api.heroku.com";

module.exports = Process;

function restartApp(next) {
  request
    .post(baseEndpoint + '/apps/' + this.name + '/ps/restart')
    .end(function(err, res) {
      if (res.statusCode === 200) {
        return next(true);
      }
      return next(false);
    });
}

function Process() {
  return {
    "restart" : restartApp.bind(this)
  }
}
