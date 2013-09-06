'use strict';

var functions = module.exports = {};

var errorTypes = [
  'Unauthorized',
  'VerificationRequired',
  'Forbidden',
  'NotFound',
  'Timeout',
  'Locked',
  'RateLimitExceeded',
  'RequestFailed',
  'NilApp'
];
var _rel, i, l;
for (i=0, l=errorTypes.length; i<l; i++) {
  _rel = errorTypes[i];
  functions[_rel] = createError(_rel);
}

function createError(name) {
  // This is pretty bad mojo, but I really wanted errors of different types
  // all also typeof Error. Can't think of a better way to do this without
  // writing them all out. Maybe that's the right way, after all
  var functionCreator = "function " + name + "(message) { this.name = name; this.message = message; } " + name + ".prototype = Error.prototype; return " + name + ";";
  console.log(functionCreator);
  eval(functionCreator);
  // return newFunction;
}

// function ErrorWithResponse(message, response) {
//   this.message = message;
//   this.response = response;
//   return this;
// }
// ErrorWithResponse.prototype = Error.prototype;
// ErrorWithResponse.prototype.constructor = ErrorWithResponse;
// function Unauthorized() {}
// function VerificationRequired() {}
// function Forbidden() {}
// function NotFound() {}
// function Timeout() {}
// function Locked() {}
// function RateLimitExceeded() {}
// function RequestFailed() {}
// function NilApp() {}

// Unauthorized.prototype = ErrorWithResponse.prototype;
// VerificationRequired.prototype = ErrorWithResponse.prototype;
// Forbidden.prototype = ErrorWithResponse.prototype;
// NotFound.prototype = ErrorWithResponse.prototype;
// Timeout.prototype = ErrorWithResponse.prototype;
// Locked.prototype = ErrorWithResponse.prototype;
// RateLimitExceeded.prototype =ErrorWithResponse.prototype;
// RequestFailed.prototype = ErrorWithResponse.prototype;
// NilApp.prototype = ErrorWithResponse.prototype;

// Unauthorized.prototype.constructor = ErrorWithResponse;
// VerificationRequired.prototype.constructor = ErrorWithResponse;
// Forbidden.prototype.constructor = ErrorWithResponse;
// NotFound.prototype.constructor = ErrorWithResponse;
// Timeout.prototype.constructor = ErrorWithResponse;
// Locked.prototype.constructor = ErrorWithResponse;
// RateLimitExceeded.prototype.constructor =ErrorWithResponse;
// RequestFailed.prototype.constructor = ErrorWithResponse;
// NilApp.prototype.constructor = ErrorWithResponse;

// module.exports = {
//   Unauthorized : Unauthorized,
//   VerificationRequired: VerificationRequired,
//   Forbidden: Forbidden,
//   NotFound: NotFound,
//   Timeout: Timeout,
//   Locked: Locked,
//   RateLimitExceeded: RateLimitExceeded,
//   RequestFailed: RequestFailed,
//   NilApp: NilApp
// };
