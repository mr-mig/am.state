'use strict';
var angular = require('angular-cjs');
var stateFactory = require('./index');

// register the state object in angular DI container
module.exports = function () {
  var args = Array.prototype.slice.call(arguments, 0);
  var result = stateFactory.apply(null, args);

  return angular.module(result.moduleName)
    .factory(result.entityName, result.factoryFn);
};

