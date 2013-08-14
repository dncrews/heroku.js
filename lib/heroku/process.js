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
