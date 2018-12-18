module.exports = function(root) {
  root = root ? root : global;
  root.expect = root.chai.expect;
  global.OpenAPISampler = require('../../src/openapi-sampler');
  beforeEach(function() {
    // Using these globally-available Sinon features is preferrable, as they're
    // automatically restored for you in the subsequent `afterEach`
    root.sandbox = root.sinon.createSandbox();
    root.stub = root.sandbox.stub.bind(root.sandbox);
    root.spy = root.sandbox.spy.bind(root.sandbox);
    root.mock = root.sandbox.mock.bind(root.sandbox);
    root.useFakeTimers = root.sandbox.useFakeTimers.bind(root.sandbox);
    root.useFakeXMLHttpRequest = root.sandbox.useFakeXMLHttpRequest.bind(root.sandbox);
    root.useFakeServer = root.sandbox.useFakeServer.bind(root.sandbox);
    root.OpenAPISampler = OpenAPISampler;
  });

  afterEach(function() {
    delete root.stub;
    delete root.spy;
    root.sandbox.restore();
  });
};
