Heroku.js
==========

### Work in Progress (WIP)

The Node.js implementation of the Heroku API. Initially a port of
[Heroku.rb](https://github.com/heroku/heroku.rb), [Heroku.jar](https://github.com/heroku/heroku.jar)
and [Heroku.py](https://github.com/heroku/heroku.py), but with some Javascript-isms and some
aliases added for convention and convenience.

## Installation

1 Install via npm

```bash
npm install heroku.js
```

### Usage

Begin by instantiating with credentials. You can use an application API Key, 
a user email address and API Token, or a username and password. The latter will
fetch an API Key first, so it is an asynchronous request. It will require a callback.
If you pass nothing, it will attempt to read `process.env['HEROKU_API_KEY']`

```js
// Instantiate with the API Key in the environment
var api = new HerokuAPI();

// Instantiate with API Key
var api = new HerokuAPI({"apiKey" : apiKey});

// Instantiate with email and API Token
var api = new HerokuAPI({"email" : email, "apiToken" : apiToken});

// Instantiate with username and password **Async reminder**
new HerokuAPI({ "username" : username, "password" : password }, function(api) {
  // Use the `api` here
});
```

#### Create an application on the cedar stack

```js
var api = new HerokuAPI(apiKey);
var app = api.postApp({
  "stack" : "Cedar",
  "name" : "MyApp"
});
```

#### List applications

```js
var api = new HerokuAPI(apiKey);
var apps = api.getApps();
for (var i=0; l=apps.length; i < l; i++) {
  console.log(app.name);
}
```

#### Add Config

```js
var api = new HerokuAPI(apiKey);
api.putConfigVars("myExistingApp", { "SOME_KEY" : "SOMEVALUE" });
```

#### Get Config

```js
var api = new HerokuAPI(apiKey);
var config = api.getConfigVars("myExistingApp");
console.log(config);
```

#### Remove Config

```js
var api = new HerokuAPI(apiKey);
api.deleteConfigVar("myExistingApp", "SOME_KEY");
```

## Building Locally

1 Clone the repository

```bash
git clone https://github.com/dncrews/heroku.js.git
```

2 Run the testing suite (eventual - This is currently non-functional).

```bash
npm test
```


* Should be fully functional
  * Addons
      * DELETE Addon - DELETE /apps/:app/addons/:addon
      * GET Addon - GET /addons && GET /apps/:app/addons
      * POST Addon - POST /apps/:app/addons/:addon
      * PUT Addon - PUT /apps/:app/addons/:addon
  * Apps
      * DELETE app - DELETE /apps/:app
      * GET apps - GET /apps
      * GET app - GET /apps/:app
      * GET app_maintenance - GET /apps/:app/server/maintenance
      * POST app - POST /apps
      * POST app_maintenance - POST /apps/:app/server/maintenance
      * PUT app - PUT /apps/:app
  * Attachments ???
      * GET attachments - GET /apps/:app/attachments
  * Collaborators
      * DELETE collaborator - DELETE /apps/:app/collaborators/:email
      * GET collaborators - GET /apps/:app/collaborators
      * POST collaborator - POST /apps/:app/collaborators
  * Config_vars
      * DELETE config_var - DELETE /apps/:app/config_vars/:key
      * GET config_vars - GET /apps/:app/config_vars
      * PUT config_vars - PUT /apps/:app/config_vars
  * Domains
      * DELETE domain - DELETE /apps/:app/domains/:domain
      * DELETE domains - DELETE /apps/:app/domains
      * GET domains - GET /apps/:app/domains
      * POST domain - POST /apps/:app/domains
  * Features
      * DELETE feature - DELETE /features/:feature
      * GET features - GET /features
      * GET feature - GET /features/:feature
      * POST feature - POST /features/:feature
  * Keys
      * DELETE key - DELETE /user/keys/:key
      * DELETE keys - DELETE /user/keys
      * GET keys - GET /user/keys
      * POST key - POST /user/keys
  * Login
      * POST login - POST /login
  * Processes
      * GET ps - GET /apps/:app/ps
      * POST ps - POST /apps/:app/ps
      * POST ps restart - POST /apps/:app/ps/restart
      * POST ps scale - POST /apps/:app/ps/scale
      * POST ps stop - POST /apps/:app/ps/stop
      * PUT dynos - PUT /apps/:app/dynos
      * PUT workers - PUT /apps/:app/workers
      * PUT formation - PUT /apps/:app/formation
      * GET dyno types - GET /apps/:app/dyno-types
  * Releases
      * GET releases - GET /apps/:app/releases
      * GET release - GET /apps/:app/releases/:release
      * PUT release - POST /apps/:app/releases/:release
  * Version?
      * just say what version of this api it is
* Todo
  * Logs
      * GET logs - GET /apps/:app/logs
  * Ssl_endpoints
      * DELETE ssl endpoint - DELETE /apps/:app/ssl-endpoint/:cname
      * GET ssl endpoint - GET /apps/:app/ssl-endpoint/:cname
      * GET ssl endpoints - GET /apps/:app/ssl-endpoints
      * POST ssl endpoint - POST /apps/:app/ssl-endpoints
      * POST ssl endpoint rollback - POST /apps/:app/ssl-endpoints/:cname/rollback
      * PUT ssl endpoint - PUT /apps/:app/ssl-endpoints/:cname
  * Stacks
      * GET stack - GET /apps/:app/stack
      * PUT stack - PUT /apps/:app/stack
  * User
      * GET /user
  * Different Error Handling
      * Unauthorized
      * Verification Required
      * Forbidden
      * Not Found
      * Timeout
      * Locked
      * Rate Limit Exceeded
      * Request Failed
      * Nil App
  * Mock API
      * This one is HUGE. It's to make my tests actually work
