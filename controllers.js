var fs = require('fs'),
    path = require('path');

fs.readdirSync(__dirname + '/controllers').forEach(function(filename) {
  var name = path.basename(filename, '.js');
  function load() { return require('./controllers/' + name); }
  exports.__defineGetter__(name, load);
});
