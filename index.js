'use strict';
var angular = require('angular');

module.exports = stateFactory;

function stateFactory(moduleName, elementName, obj){
	// 'someName' -> 'SomeNameState'
	var conventionName =
			elementName.charAt(0).toUpperCase() +
			elementName.substr(1) +
			'State';

	return angular.module(moduleName)
		.factory(conventionName, function(){ return obj; });
}
