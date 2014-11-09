'use strict';
var conv = require('am.convention');

module.exports = stateFactory;

function stateFactory(componentType, definition, obj) {
  definition.ngDeps = definition.ngDeps || [];
  var moduleName = conv.names.ngModule(componentType, definition.name);
  var stateName = conv.names.state(definition.name);

  return {
    moduleName: moduleName,
    entityName: stateName,
    moduleDependencies: definition.ngDeps,
    factoryFn: function(){
      return function stateConstructor() {
        // create an instance using the obj as a schema
        return Object.create(obj);
      };
    }
  };
}
