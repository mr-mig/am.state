'use strict';
var angular = require('angular-cjs');
var stateFactory = require('./index');

// register the state object in angular DI container
module.exports = function () {
  var args = Array.prototype.slice.call(arguments, 0);
  var result = stateFactory.apply(null, args);

  // try to get the module first
  // this is the case when state is created for a structure entity like element
  try{
    angular.module(result.moduleName);
  } catch(e) {
    angular.module(result.moduleName, result.moduleDependencies);
  }

  return angular.module(result.moduleName)
    .factory(result.entityName, result.factoryFn);
};

