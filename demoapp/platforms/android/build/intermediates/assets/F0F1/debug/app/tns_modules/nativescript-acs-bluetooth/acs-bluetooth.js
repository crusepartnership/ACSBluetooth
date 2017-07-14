"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var acs_bluetooth_common_1 = require("./acs-bluetooth.common");
var bluetooth_gatt_errors_1 = require("./bluetooth-gatt-errors");
var rxjs_1 = require("rxjs");
var core_1 = require("@angular/core");
var utils = require("tns-core-modules/utils/utils");
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
var ACSBluetooth = (function (_super) {
    __extends(ACSBluetooth, _super);
    /**
     * init module params
     */
    function ACSBluetooth(angularZone) {
        var _this = _super.call(this) || this;
        _this.angularZone = angularZone;
        _this.BluetoothGatt = android.bluetooth.BluetoothGatt;
        _this.BluetoothProfile = android.bluetooth.BluetoothProfile;
        // ASC jar to js
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
        /**
         * Callback for scanning for new devices
         */
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
            var scanner = this.adapter.getBluetoothLeScanner();
            var scanFilters = null;
            var scanSettings = new android.bluetooth.le.ScanSettings.Builder();
            scanSettings.setReportDelay(0);
            var scanMode = android.bluetooth.le.ScanSettings.SCAN_MODE_LOW_LATENCY;
            scanSettings.setScanMode(scanMode);
            if (android.os.Build.VERSION.SDK_INT >= 23 /*android.os.Build.VERSION_CODES.M */) {
                var matchMode = android.bluetooth.le.ScanSettings.MATCH_MODE_AGGRESSIVE;
                scanSettings.setMatchMode(matchMode);
                var matchNum = android.bluetooth.le.ScanSettings.MATCH_NUM_MAX_ADVERTISEMENT;
                scanSettings.setNumOfMatches(matchNum);
                var callbackType = android.bluetooth.le.ScanSettings.CALLBACK_TYPE_ALL_MATCHES;
                scanSettings.setCallbackType(callbackType);
            }
            //console.log(this.cback);
            scanner.startScan(this.cback);
            // let scanResult =   this.adapter.startLeScan(this.scanForDevicesCallback);
            //  console.log('Scan result: '+ scanResult);
            //  console.log('result: '+ this.scanResults.getValue());
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
            /*
             reader.setOnResponseApduAvailableListener(createOnResponseApduAvailableListener());
             reader.setOnAuthenticationCompleteListener(createOnAuthenticationCompleteListener());
             reader.setOnEnableNotificationCompleteListener(createOnEnableNotificationCompleteListener());
             reader.setOnCardStatusChangeListener(createOnCardStatusChangeListener());
             reader.setOnEscapeResponseAvailableListener(createOnEscapeResponseAvailableListener());
             */
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
            // Connect to GATT server.
            this.gatt = this.device.connectGatt(utils.ad.getApplicationContext(), true, this.createBluetoothReaderGattCallback());
            return true;
        }
        catch (e) {
            console.log("ASCBluetooth: Failed connecting to device " + updatedDeviceDetails.address + " with message: " + e.message);
            return false;
        }
    };
    // remove any existing gatt connection
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
                    //self.trigger(bluetoothErrors.gattEvent(state), {});
                }
                else {
                    console.log('ASCBluetooth:  GATT Success');
                    if (newState == this.BluetoothProfile.STATE_CONNECTED) {
                        console.log('ASCBluetooth:  Bluetooth Connected');
                        //self.trigger('this.bluetoothreader.connected', {});
                        /* Detect the connected reader. */
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
                        /*
                         * Release resources occupied by Bluetooth
                         * GATT client.
                         */
                        if (gatt != null) {
                            gatt.close();
                            gatt = null;
                        }
                        //self.trigger('this.bluetoothreader.disconnected', {});
                    }
                }
            }
        });
    };
    return ACSBluetooth;
}(acs_bluetooth_common_1.Common));
exports.ACSBluetooth = ACSBluetooth;