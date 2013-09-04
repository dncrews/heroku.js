Heroku.js
==========

# Work in Progress (WIP)

I'm building this library to extract off the Heroku API to a node library. Does virtually nothing... yet


* Functional
  * Pretty much nothing, because I want to make it different
* Todo
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
  * Logs
    * GET logs - GET /apps/:app/logs
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
  * Version?
     * just say what version of this api it is



# Eventual README.md

## Installation

1 Install via npm

```bash
npm install https://github.com/dncrews/heroku.js.git
```

### Examples
#### Instantiate HerokuAPI with an API key

```js
var HerokuAPI = require('heroku.js');
var api = new HerokuAPI(apiKey);
```

#### Create an application on the cedar stack

```js
var api = new HerokuAPI(apiKey);
var app = api.createApp({
  "stack" : "Cedar",
  "name" : "MyApp"
});
```

#### List applications

```js
var api = new HerokuAPI(apiKey);
var apps = api.listApps();
for (var i=0; l=apps.length; i<l; i++) {
  console.log(app.name);
}
```

#### Add Config

```js
var api = new HerokuAPI(apiKey);
api.addConfig("myExistingApp", { "SOME_KEY" : "SOMEVALUE" });
```

#### Get Config

```js
var api = new HerokuAPI(apiKey);
var config = api.listConfig("myExistingApp");
console.log(config);
```

#### Remove Config

```js
var api = new HerokuAPI(apiKey);
var config = api.removeConfig("myExistingApp", "SOME_KEY");
```

## Building Locally

1 Clone the repository

```bash
git clone https://github.com/dncrews/heroku.js.git
```

2 Run the testing suite

```bash
npm test
```
