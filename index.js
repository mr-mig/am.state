'use strict';
var conv = require('am.convention');

module.exports = stateFactory;

function stateFactory(componentType, definition, obj) {
  var prefix = conv.prefix(definition.project);
  var moduleName = conv.ngModuleName(prefix.lower, componentType, definition.name);
  var stateName = conv.composedName(prefix.upper, definition.name, conv.behaviourComponents.state);

  return {
    moduleName: moduleName,
    entityName: stateName,
    factoryFn: function () {
      return obj;
    }
  };
}
