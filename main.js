"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var utils = require("utils/utils");
var core_1 = require("@angular/core");
var bluetooth_gatt_errors_1 = require("./lib/bluetooth-gatt-errors");
var rxjs_1 = require("rxjs");
var core_2 = require("@angular/core");
var ACSBluetooth = (function () {
    /**
     * init module params
     */
    function ACSBluetooth(angularZone) {
        var _this = this;
        this.angularZone = angularZone;
        // Android java to js
        this.BluetoothGatt = android.bluetooth.BluetoothGatt;
        this.BluetoothProfile = android.bluetooth.BluetoothProfile;
        this.LeScanCallbackConstructor = android.bluetooth.BluetoothAdapter.LeScanCallback;
        // ASC jar to js
        this.BluetoothReader = com.acs.bluetooth.BluetoothReader;
        this.BluetoothReaderGattCallback = com.acs.bluetooth.BluetoothReaderGattCallback;
        this.BluetoothReaderManager = com.acs.bluetooth.BluetoothReaderManager;
        this.OnReaderDetectionListener = com.acs.bluetooth.BluetoothReaderManager.OnReaderDetectionListener;
        this.OnConnectionStateChangeListener = com.acs.bluetooth.BluetoothReaderGattCallback.OnConnectionStateChangeListener;
        this.readerState = this.BluetoothReader.STATE_DISCONNECTED;
        this.bluetoothErrors = new bluetooth_gatt_errors_1.BluetoothGattErrors();
        this.gattCallback = null;
        this.reader = null;
        this.device = null;
        this.gatt = null;
        this.adapter = null;
        /**
         * Callback for scanning for new devices
         */
        this.scanForDevicesCallback = new this.LeScanCallbackConstructor({
            onLeScan: function (device, rssi, data) {
                try {
                    console.log("ASCBluetooth: scanResults " + _this);
                    var value_1 = _this.scanResults.getValue();
                    if (value_1.filter(function (item) {
                        return item.getAddress() === device.getAddress();
                    }).length < 1) {
                        console.log("ASCBluetooth: Scanning discovered new Bluetooth device " + device.getName() + " : " + device.getAddress() + " [" + device.hashCode() + "]");
                        value_1.push(device);
                        console.log("ASCBluetooth: NgZone.isInAngularZone() : " + core_2.NgZone.isInAngularZone());
                        _this.angularZone.run(function () {
                            _this.scanResults.next(value_1);
                            console.log("ASCBluetooth: angularZone.isInAngularZone() : " + core_2.NgZone.isInAngularZone());
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
        this.scanResults = new rxjs_1.BehaviorSubject([]);
        this.scanning = new rxjs_1.BehaviorSubject(false);
        var manager = utils.ad.getApplicationContext().getSystemService(android.content.Context.BLUETOOTH_SERVICE);
        this.adapter = manager.getAdapter();
        this.readerManager = new this.BluetoothReaderManager();
        this.readerManager.setOnReaderDetectionListener(new this.OnReaderDetectionListener({
            onReaderDetection: this.onReaderDetection
        }));
        console.log("ASCBluetooth: init done");
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
    };
    ACSBluetooth.prototype.getGattCallback = function () {
        return this.gattCallback;
    };
    ACSBluetooth.prototype.connect = function (updatedDeviceDetails) {
        console.log('ASCBluetooth:  Connecting Reader');
        try {
            if (!updatedDeviceDetails.address) {
                console.log("ASCBluetooth: No device address was supplied");
                return;
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
            console.log("ASCBluetooth: Disconnecting from device " + this.gatt.device.getAddress());
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
                    }
                }
            }
        });
    };
    return ACSBluetooth;
}());
ACSBluetooth = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [core_2.NgZone])
], ACSBluetooth);
exports.ACSBluetooth = ACSBluetooth;
