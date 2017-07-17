"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var acs_bluetooth_common_1 = require("./acs-bluetooth.common");
var bluetooth_gatt_errors_1 = require("./bluetooth-gatt-errors");
var rxjs_1 = require("rxjs");
var core_1 = require("@angular/core");
var utils = require("tns-core-modules/utils/utils");
var core_2 = require("@angular/core");
var application = require("tns-core-modules/application");
var MyScanCallback = android.bluetooth.le.ScanCallback.extend({
    onBatchScanResults: function (results) {
        console.log("------- scanCallback.onBatchScanResults");
    },
    onScanFailed: function (errorCode) {
        console.log("------- YAY!");
        console.log("------- scanCallback.onScanFailed errorCode: " + errorCode);
        var errorMessage;
        if (errorCode == android.bluetooth.le.ScanCallback.SCAN_FAILED_ALREADY_STARTED) {
            errorMessage = "Scan already started";
        }
        else if (errorCode == android.bluetooth.le.ScanCallback.SCAN_FAILED_APPLICATION_REGISTRATION_FAILED) {
            errorMessage = "Application registration failed";
        }
        else if (errorCode == android.bluetooth.le.ScanCallback.SCAN_FAILED_FEATURE_UNSUPPORTED) {
            errorMessage = "Feature unsupported";
        }
        else if (errorCode == android.bluetooth.le.ScanCallback.SCAN_FAILED_INTERNAL_ERROR) {
            errorMessage = "Internal error";
        }
        else {
            errorMessage = "Scan failed to start";
        }
        console.log("------- scanCallback.onScanFailed errorMessage: " + errorMessage);
    },
    onScanResult: function (callbackType, result) {
        console.log("------- scanCallback.onScanResult: " + callbackType);
    }
});
var ACCESS_COARSE_LOCATION_PERMISSION_REQUEST_CODE = 222;
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
        _this.cback = new MyScanCallback();
        _this.scanForDevicesCallback = new android.bluetooth.BluetoothAdapter.LeScanCallback({
            onLeScan: function (device, rssi, data) {
                try {
                    var value_1 = _this.scanResults.getValue();
                    var filteredValues = value_1.filter(function (item) {
                        return item.getAddress() === device.getAddress();
                    });
                    if (filteredValues.length == 0) {
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
        _this.createOnConnectionStateChangeListener = function () {
            console.log('ASCBluetooth:  createOnConnectionStateChangeListener');
            var that = _this;
            return new _this.OnConnectionStateChangeListener({
                onConnectionStateChange: function (gatt, state, newState) {
                    that.readerState = newState;
                    console.log(state);
                    console.log(that.readerState);
                    if (state !== that.BluetoothGatt.GATT_SUCCESS) {
                        console.log("ASCBluetooth:  error " + that.bluetoothErrors.gattMessage(state) + " ['" + state + "'] attempting " + that.bluetoothErrors.errorMessage(newState) + ", ['" + newState + "']");
                    }
                    else {
                        console.log('ASCBluetooth:  GATT Success');
                        if (newState == that.BluetoothProfile.STATE_CONNECTED) {
                            console.log('ASCBluetooth:  Bluetooth Connected');
                            console.log(that);
                            console.log(that.readerManager);
                            if (that.readerManager != null) {
                                console.log('ASCBluetooth:  Detect Reader');
                                that.readerManager.detectReader(gatt, that.gattCallback);
                            }
                            else {
                                console.log('ASCBluetooth:  No valid readerManager');
                            }
                        }
                        else if (newState == that.BluetoothProfile.STATE_DISCONNECTED) {
                            console.log('ASCBluetooth:  Bluetooth Disconnected');
                            that.reader = null;
                            if (gatt != null) {
                                gatt.close();
                                gatt = null;
                            }
                        }
                    }
                }
            });
        };
        _this.createOnCardStatusChangeListener = function () {
            var that = _this;
            return new com.acs.bluetooth.BluetoothReader.OnCardStatusChangeListener({
                onCardStatusChange: function (reader, state) {
                    console.log('status change');
                }
            });
        };
        console.log("ASCBluetooth: init");
        _this.scanResults = new rxjs_1.BehaviorSubject([]);
        _this.scanning = new rxjs_1.BehaviorSubject(false);
        var manager = utils.ad.getApplicationContext().getSystemService(android.content.Context.BLUETOOTH_SERVICE);
        _this.adapter = manager.getAdapter();
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
    ACSBluetooth.prototype.isPermissionGranted = function () {
        var hasPermission = android.os.Build.VERSION.SDK_INT < 23;
        if (!hasPermission) {
            hasPermission = android.content.pm.PackageManager.PERMISSION_GRANTED ==
                android.support.v4.content.ContextCompat.checkSelfPermission(application.android.foregroundActivity, android.Manifest.permission.ACCESS_COARSE_LOCATION);
        }
        return hasPermission;
    };
    ACSBluetooth.prototype.requestCoarseLocationPermission = function () {
        return android.support.v4.app.ActivityCompat.requestPermissions(application.android.foregroundActivity, [android.Manifest.permission.ACCESS_COARSE_LOCATION], ACCESS_COARSE_LOCATION_PERMISSION_REQUEST_CODE);
    };
    ;
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
            console.log('gDEVICE_INFO_SYSTEM_ID' + this.reader.DEVICE_INFO_SYSTEM_ID);
        }
        else {
            console.error('ASCBluetooth:  Error detecting reader');
        }
    };
    ACSBluetooth.prototype.createBluetoothReaderGattCallback = function () {
        this.gattCallback = new this.BluetoothReaderGattCallback();
        this.gattCallback.setOnConnectionStateChangeListener(this.createOnConnectionStateChangeListener());
        return this.gattCallback;
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
    return ACSBluetooth;
}(acs_bluetooth_common_1.Common));
ACSBluetooth = __decorate([
    core_2.Injectable(),
    __metadata("design:paramtypes", [core_1.NgZone])
], ACSBluetooth);
exports.ACSBluetooth = ACSBluetooth;
//# sourceMappingURL=acs-bluetooth.android.js.map