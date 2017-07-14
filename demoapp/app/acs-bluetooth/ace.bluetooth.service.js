"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
//todo consider removeing this service
var ACSBluetoothService = (function () {
    function ACSBluetoothService() {
        this.connected = false;
        console.log("ACS Bluetooth Service: starting up");
    }
    ACSBluetoothService.prototype.selectDevice = function (event) {
        console.log("ACS Bluetooth Service: selectDevice " + JSON.stringify(event));
        this.bluetoothDevice = { address: '20:91:48:5B:62:2E' };
    };
    /**
     * Check if bluetooth deivce has been connected
     * @returns {boolean}
     */
    ACSBluetoothService.prototype.isConnected = function () {
        return this.connected;
    };
    /**
     * Disconnect a bluetooth device
     */
    ACSBluetoothService.prototype.disconnectBluetoothScanner = function () {
        this.connected = false;
    };
    /**
     * Connect to a device
     * @param address
     */
    ACSBluetoothService.prototype.connectBluetoothScanner = function (address) {
        this.bluetoothDevice = {
            address: address
        };
        //this.acsBluetooth.connect(this.bluetoothDevice);
        this.connected = true;
    };
    ACSBluetoothService.prototype.getConnectToDevice = function () {
        return this.bluetoothDevice;
    };
    ACSBluetoothService.prototype.toggleScan = function () {
        // if (this.acsBluetooth.isScanning().getValue() !== false) {
        //     this.acsBluetooth.stopScanningForDevices();
        // } else {
        //     this.acsBluetooth.startScanningForDevices();
        // }
    };
    ACSBluetoothService.prototype.startScan = function () {
        // this.acsBluetooth.startScanningForDevices();
    };
    ACSBluetoothService.prototype.stopScan = function () {
        // this.acsBluetooth.stopScanningForDevices();
    };
    ACSBluetoothService.prototype.isScanning = function () {
        // return this.acsBluetooth.isScanning();
    };
    return ACSBluetoothService;
}());
ACSBluetoothService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], ACSBluetoothService);
exports.ACSBluetoothService = ACSBluetoothService;
