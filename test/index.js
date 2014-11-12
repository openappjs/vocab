var test = require('tape');

var validatePlugin = require('vocab-validate/plugin');

var Vocab;

test("require module", function (t) {
  Vocab = require('../');
  t.equal(typeof Vocab, "function");
  t.end();
});

test("simple vocab with validate plugin", function (t) {
  var schema = {
    id: "Person",
    type: "object",
    properties: {
      name: {
        type: "string",
      },
    },
  };
  var vocab = Vocab(schema, {
    plugins: [validatePlugin()],
  });

  t.equal(typeof vocab, "object");
  t.equal(typeof vocab.schema, "object");
  t.equal(typeof vocab.options, "object");
  t.equal(typeof vocab.validate, "function");
  t.equal(vocab.validate({
    name: "Taylor",
  }), null)
  t.end();
});
