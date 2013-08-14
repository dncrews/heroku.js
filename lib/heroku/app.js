var request = require('../helpers/superagent')
  , process = require('./process');

var baseEndpoint = "https://api.heroku.com";

module.exports = App;

function App(appName) {
  var tmpObj;
  // Asking for a new app from an App object
  if (typeof(appName) === 'object') {
    tmpObj = new App();
    for (var key in appName) {
      tmpObj[key] = appName[key];
    }
  } else {
    tmpObj = this;
  }
  if (typeof(appName) === 'string') {
    tmpObj.name = appName;
  }

  return tmpObj;
}

App.prototype.process = process;
// App.prototype = require('./process');
// App.prototype.restart = require('./process').restart;
// App.prototype.get = getApp;

App.getApps = function(next) {
  request
    .get(baseEndpoint + '/apps')
    .end(function(err, res) {
      var i, l, _rel, apps;
      if (res.statusCode === 200) {
        apps = res.body;
        for (i=0, l=apps.length; i<l; i++) {
          _rel = apps[i];
          apps[i] = new App(_rel);
        }
      }
      next(apps);
    });
}

function getApp(next) {
  // Do something to fill the app up via request to API
  return this;
}

function createApp(options, next) {
  var i, l, _rel
    , data;
  if (typeof(options) !== "object") {
    return next(new Error('Options must be a key-value paired object'));
  }
  if (options.name && typeof(options.name) === 'string') {
    data.name = options.name;
  }
  if (options.stack && typeof(options.stack) === 'string') {
    data.stack = options.stack;
  }
  if ((options.regionId && typeof(options.regionId) === 'string') || (options.regionName && typeof(options.regionName) === 'string')) {
    data.region = {};
    if (options.regionId && typeof(options.regionId === 'string')) {
      data.region.id = options.regionId;
    }
    if (options.regionName && typeof(options.regionName === 'string')) {
      data.region.name = options.regionName;
    }
  }
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
