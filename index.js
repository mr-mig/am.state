'use strict';
var conv = require('am.convention');

module.exports = stateFactory;

function stateFactory(componentType, definition, obj) {
  var moduleName = conv.names.ngModule(componentType, definition.name);
  var stateName = conv.names.state(definition.name);

  return {
    moduleName: moduleName,
    entityName: stateName,
    factoryFn: function(){
      return function stateConstructor() {
        return obj;
      };
    }
  };
}
