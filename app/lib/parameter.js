
'use strict';

/**
 * Module dependencies.
 */

var validate = require('parameter');

module.exports = function (app) {
  app.context.verifyParams = function(rules, params) {
    if (!rules) return;
    if (!params) {
      params = Object.keys(this.request.body).length
        ? this.request.body
        : this.query;
      params = merge(params);
      params = merge(this.params, params);
    }
    var errors = validate(rules, params);
    if (!errors) {
      return;
    }
    var err = new Error('Validation Failed');
    err.code = 'INVALID_PARAM';
    err.errors = errors;
    err.params = params;
    throw err;
  };

  return function* verifyParam(next) {
    try {
      yield* next;
    } catch (err) {
      if (err.code === 'INVALID_PARAM') {
        this.status = 422;
        this.body = {
          message: err.message,
          errors: err.errors,
          params: err.params
        };
        return;
      }
      throw err;
    }
  };
};


function merge(source, target) {
  target = target || {};
  for (var key in source) {
    target[key] = source[key];
  }
  return target;
}
