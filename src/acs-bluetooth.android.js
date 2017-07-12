"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var acs_bluetooth_common_1 = require("./acs-bluetooth.common");
var bluetooth_gatt_errors_1 = require("./bluetooth-gatt-errors");
var rxjs_1 = require("rxjs");
var core_1 = require("@angular/core");
var utils = require("tns-core-modules/utils/utils");
var core_2 = require("@angular/core");
var ACSBluetooth = (function (_super) {
    __extends(ACSBluetooth, _super);
    function ACSBluetooth(angularZone) {
        var _this = _super.call(this) || this;
        _this.angularZone = angularZone;
        _this.BluetoothGatt = android.bluetooth.BluetoothGatt;
        _this.BluetoothProfile = android.bluetooth.BluetoothProfile;
        _this.BluetoothReader = com.acs.bluetooth.BluetoothReader;
        _this.BluetoothReaderGattCallback = com.acs.bluetooth.BluetoothReaderGattCallback;
        _this.BluetoothReaderManager = com.acs.bluetooth.BluetoothReaderManager;
        _this.OnReaderDetectionListener = com.acs.bluetooth.BluetoothReaderManager.OnReaderDetectionListener;
        _this.OnConnectionStateChangeListener = com.acs.bluetooth.BluetoothReaderGattCallback.OnConnectionStateChangeListener;
        _this.readerState = _this.BluetoothReader.STATE_DISCONNECTED;
        _this.bluetoothErrors = new bluetooth_gatt_errors_1.BluetoothGattErrors();
        _this.gattCallback = null;
        _this.reader = null;
        _this.device = null;
        _this.gatt = null;
        _this.adapter = null;
        _this.scanForDevicesCallback = new android.bluetooth.BluetoothAdapter.LeScanCallback({
            onLeScan: function (device, rssi, data) {
                try {
                    console.log("ASCBluetooth: scanResults " + _this);
                    var value_1 = _this.scanResults.getValue();
                    var filteredValues = value_1.filter(function (item) {
                        return item.getAddress() === device.getAddress();
                    });
                    if (filteredValues.length > 1) {
                        console.log("ASCBluetooth: Scanning discovered new Bluetooth device " + device.getName() + " : " + device.getAddress() + " [" + device.hashCode() + "]");
                        value_1.push(device);
                        console.log("ASCBluetooth: NgZone.isInAngularZone() : " + core_1.NgZone.isInAngularZone());
                        _this.angularZone.run(function () {
                            _this.scanResults.next(value_1);
                            console.log("ASCBluetooth: angularZone.isInAngularZone() : " + core_1.NgZone.isInAngularZone());
                        });
                        console.log("ASCBluetooth: " + _this.scanResults.getValue().length + " devices found");
                    }
                }
                catch (e) {
                    console.log("ASCBluetooth: error updateFoundDevices with message: " + e.message);
                }
            }
        });
        console.log("ASCBluetooth: init");
        _this.scanResults = new rxjs_1.BehaviorSubject([]);
        _this.scanning = new rxjs_1.BehaviorSubject(false);
        _this.readerManager = new _this.BluetoothReaderManager();
        _this.readerManager.setOnReaderDetectionListener(new _this.OnReaderDetectionListener({
            onReaderDetection: _this.onReaderDetection
        }));
        console.log("ASCBluetooth: init done");
        return _this;
    }
    ACSBluetooth.prototype.startScanningForDevices = function () {
        this.scanning.next(true);
        this.scanResults.next([]);
        console.log('Starting scan for Bluetooth devices');
        try {
            this.adapter.startLeScan(this.scanForDevicesCallback);
        }
        catch (e) {
            console.log("ASCBluetooth: unable to start scanning for bluetooth devices with message: " + e.message);
            this.stopScanningForDevices();
        }
    };
    ACSBluetooth.prototype.stopScanningForDevices = function () {
        this.scanning.next(false);
        console.log('Stopping scan for Bluetooth devices');
        try {
            this.adapter.stopLeScan(this.scanForDevicesCallback);
        }
        catch (e) {
            console.log("ASCBluetooth: Error when attempting to stop scanning for bluetooth devices with message: " + e.message);
        }
    };
    ACSBluetooth.prototype.scanningObservable = function () {
        return this.scanning.asObservable();
    };
    ACSBluetooth.prototype.isScanning = function () {
        return this.scanning;
    };
    ACSBluetooth.prototype.scanResultsObservable = function () {
        return this.scanResults.asObservable();
    };
    ACSBluetooth.prototype.onReaderDetection = function (detectedReader) {
        console.log("ASCBluetooth : inti onReaderDetect");
        if (detectedReader !== null) {
            console.log('ASCBluetooth:  Reader detected');
            this.reader = detectedReader;
            if (!this.reader.enableNotification(true)) {
                console.error('ASCBluetooth:  Unable to enable to notifications');
            }
        }
        else {
            console.error('ASCBluetooth:  Error detecting reader');
        }
    };
    ACSBluetooth.prototype.createBluetoothReaderGattCallback = function () {
        this.gattCallback = new this.BluetoothReaderGattCallback();
        this.gattCallback.setOnConnectionStateChangeListener(this.createOnConnectionStateChangeListener());
        return this.gattCallback();
    };
    ACSBluetooth.prototype.getGattCallback = function () {
        return this.gattCallback;
    };
    ACSBluetooth.prototype.connect = function (updatedDeviceDetails) {
        console.log('ASCBluetooth:  Connecting Reader');
        try {
            if (!updatedDeviceDetails.address) {
                console.log("ASCBluetooth: No device address was supplied");
                return false;
            }
            this.disconnect();
            console.log('ASCBluetooth:  Locating Device');
            this.device = this.adapter.getRemoteDevice(updatedDeviceDetails.address);
            if (this.device === null) {
                console.error('ASCBluetooth:  Unable to find Device');
                return false;
            }
            console.log('ASCBluetooth:  Connecting to GATT server');
            this.gatt = this.device.connectGatt(utils.ad.getApplicationContext(), true, this.createBluetoothReaderGattCallback());
            return true;
        }
        catch (e) {
            console.log("ASCBluetooth: Failed connecting to device " + updatedDeviceDetails.address + " with message: " + e.message);
            return false;
        }
    };
    ACSBluetooth.prototype.disconnect = function () {
        if (this.gatt !== null) {
            this.gatt.disconnect();
            this.gatt.close();
            this.gatt = null;
        }
    };
    ACSBluetooth.prototype.createOnConnectionStateChangeListener = function () {
        console.log('ASCBluetooth:  createOnConnectionStateChangeListener');
        return new this.OnConnectionStateChangeListener({
            onConnectionStateChange: function (gatt, state, newState) {
                this.readerState = newState;
                if (state !== this.BluetoothGatt.GATT_SUCCESS) {
                    console.log("ASCBluetooth:  error " + this.bluetoothErrors.gattMessage(state) + " ['" + state + "'] attempting " + this.bluetoothErrors.errorMessage(newState) + ", ['" + newState + "']");
                }
                else {
                    console.log('ASCBluetooth:  GATT Success');
                    if (newState == this.BluetoothProfile.STATE_CONNECTED) {
                        console.log('ASCBluetooth:  Bluetooth Connected');
                        if (this.readerManager != null) {
                            console.log('ASCBluetooth:  Detect Reader');
                            this.readerManager.detectReader(gatt, this.gattCallback);
                        }
                        else {
                            console.log('ASCBluetooth:  No valid readerManager');
                        }
                    }
                    else if (newState == this.BluetoothProfile.STATE_DISCONNECTED) {
                        console.log('ASCBluetooth:  Bluetooth Disconnected');
                        this.reader = null;
                        if (gatt != null) {
                            gatt.close();
                            gatt = null;
                        }
                    }
                }
            }
        });
    };
    return ACSBluetooth;
}(acs_bluetooth_common_1.Common));
ACSBluetooth = __decorate([
    core_2.Injectable(),
    __metadata("design:paramtypes", [core_1.NgZone])
], ACSBluetooth);
exports.ACSBluetooth = ACSBluetooth;
//# sourceMappingURL=acs-bluetooth.android.js.map