function require(moduleName) {
  var wrapperStart = '(function(exports, module, require) {\n';
  var wrapperEnd = '\n})(mod.exports, mod, require)';
  var fileName = moduleName + '.js';
  var mod = require.modules[fileName];

  if(!mod) {
    mod = {};
    mod.exports = {};

    return new Promise(function(resolve){
      var xhr = new XMLHttpRequest();
      xhr.open('GET', fileName);
      xhr.send();

      xhr.onload = function() {
        eval(wrapperStart + xhr.response + wrapperEnd);
        resolve(mod.exports);
      };
    });
  }
}

require.modules = {};
