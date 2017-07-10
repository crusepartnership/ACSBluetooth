var ACSBluetooth = require("acs-bluetooth").ACSBluetooth;
var acsBluetooth = new ACSBluetooth();

// TODO replace 'functionname' with an acual function name of your plugin class and run with 'npm test <platform>'
describe("functionname", function() {
  it("exists", function() {
    expect(acsBluetooth.functionname).toBeDefined();
  });

  it("returns a promise", function() {
    expect(acsBluetooth.functionname()).toEqual(jasmine.any(Promise));
  });
});
