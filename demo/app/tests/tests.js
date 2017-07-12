var ACSBluetooth = require("nativescript-acs-bluetooth").ACSBluetooth;
var acsBluetooth = new ACSBluetooth();

describe("greet function", function() {
    it("exists", function() {
        expect(acsBluetooth.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(acsBluetooth.greet()).toEqual("Hello, NS");
    });
});