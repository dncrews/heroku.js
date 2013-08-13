var request = require('../helpers/superagent');

var endpoint = "https://api.heroku.com/account";

module.exports = {
  "get" : function(next) {
    request
      .get(endpoint)
      .end(function(req, res) {
        console.log(arguments);
        next('hello');
      });
  }
}
