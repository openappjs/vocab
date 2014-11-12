var clone = require('clone');
var debug = require('debug')('vocab');

module.exports = Vocab;

function Vocab(schema, options) {
  // call new constructor if not already
  if (!(this instanceof Vocab)) {
    return new Vocab(schema, options);
  }
  debug("constructor", schema, options);

  // save schema
  this.schema = clone(schema);

  // save options
  // with default of empty object
  this.options = clone(options || {});
  // default plugins to empty array
  this.options.plugins = this.options.plugins || [];

  // use plugins
  this.options.plugins.forEach(function (plugin) {
    this.use(plugin);
  }.bind(this));
}

// prototype function to handle plugin functions
Vocab.prototype.use = function _Vocab_use (plugin) {
  debug("use", plugin);

  plugin.call(this, this);
}
