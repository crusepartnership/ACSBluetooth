"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var acs_bluetooth_common_1 = require("./acs-bluetooth.common");
var bluetooth_gatt_errors_1 = require("./bluetooth-gatt-errors");
var rxjs_1 = require("rxjs");
var core_1 = require("@angular/core");
var utils = require("tns-core-modules/utils/utils");
var core_2 = require("@angular/core");
var application = require("tns-core-modules/application");
var ACCESS_COARSE_LOCATION_PERMISSION_REQUEST_CODE = 222;
var COMMANDS = {
    AUTO_POLLING_START: 'E0 00 00 40 01',
    AUTO_POLLING_STOP: 'E0 00 00 40 00',
    APDU_COMMAND_UID: 'FF CA 00 00 00',
    APDU_COMMAND_ATS: 'FF CA 01 00 00',
    SLEEP_COMMAND_DISABLE: 'E0 00 00 48 04',
    COMMAND_LONG_BEEP: 'E0 00 00 28 01 50',
    COMMAND_DISABLE_BUZZER: 'E0 00 00 21 01 30',
    LONGER_TRANSMISSION: 'E0 00 00 49 03',
    NO_SLEEP: 'E0 00 00 48 04'
};
var MASTER_KEY = '41 43 52 31 32 35 35 55 2D 4A 31 20 41 75 74 68';
var CARD_READ = {
    ABSENT: '1111',
    FAULTY: '2222'
};
var ACSBluetooth = (function (_super) {
    __extends(ACSBluetooth, _super);
    function ACSBluetooth(angularZone) {
        var _this_1 = _super.call(this) || this;
        _this_1.angularZone = angularZone;
        _this_1.BluetoothGatt = android.bluetooth.BluetoothGatt;
        _this_1.BluetoothProfile = android.bluetooth.BluetoothProfile;
        _this_1.BluetoothReader = com.acs.bluetooth.BluetoothReader;
        _this_1.BluetoothReaderGattCallback = com.acs.bluetooth.BluetoothReaderGattCallback;
        _this_1.BluetoothReaderManager = com.acs.bluetooth.BluetoothReaderManager;
        _this_1.OnReaderDetectionListener = com.acs.bluetooth.BluetoothReaderManager.OnReaderDetectionListener;
        _this_1.OnConnectionStateChangeListener = com.acs.bluetooth.BluetoothReaderGattCallback.OnConnectionStateChangeListener;
        _this_1.readerState = _this_1.BluetoothReader.STATE_DISCONNECTED;
        _this_1.bluetoothErrors = new bluetooth_gatt_errors_1.BluetoothGattErrors();
        _this_1.gattCallback = null;
        _this_1.reader = null;
        _this_1.device = null;
        _this_1.gatt = null;
        _this_1.adapter = null;
        _this_1.scanForDevicesCallback = new android.bluetooth.BluetoothAdapter.LeScanCallback({
            onLeScan: function (device, rssi, data) {
                try {
                    var value_1 = _this_1.scanResults.getValue();
                    var filteredValues = value_1.filter(function (item) {
                        return item.getAddress() === device.getAddress();
                    });
                    if (filteredValues.length == 0 && device.getName()) {
                        console.log("ASCBluetooth: Scanning discovered new Bluetooth device " + device.getName() + " : " + device.getAddress() + " [" + device.hashCode() + "]");
                        value_1.push(device);
                        console.log("ASCBluetooth: NgZone.isInAngularZone() : " + core_1.NgZone.isInAngularZone());
                        _this_1.angularZone.run(function () {
                            _this_1.scanResults.next(value_1);
                            console.log("ASCBluetooth: angularZone.isInAngularZone() : " + core_1.NgZone.isInAngularZone());
                        });
                        console.log("ASCBluetooth: " + _this_1.scanResults.getValue().length + " devices found");
                    }
                }
                catch (e) {
                    console.log("ASCBluetooth: error updateFoundDevices with message: " + e.message);
                }
            }
        });
        _this_1.createOnConnectionStateChangeListener = function () {
            console.log('ASCBluetooth:  createOnConnectionStateChangeListener');
            var that = _this_1;
            return new _this_1.OnConnectionStateChangeListener({
                onConnectionStateChange: function (gatt, state, newState) {
                    that.readerState = newState;
                    if (state !== that.BluetoothGatt.GATT_SUCCESS) {
                        console.log("ASCBluetooth:  error " + that.bluetoothErrors.gattMessage(state) + " ['" + state + "'] attempting " + that.bluetoothErrors.errorMessage(newState) + ", ['" + newState + "']");
                        that.angularZone.run(function () {
                            that.readerConnected.next(false);
                        });
                    }
                    else {
                        console.log('ASCBluetooth:  GATT Success');
                        if (newState == that.BluetoothProfile.STATE_CONNECTED) {
                            console.log('ASCBluetooth:  Bluetooth Connected');
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
        _this_1.createOnCardStatusChangeListener = function () {
            var that = _this_1;
            return new com.acs.bluetooth.BluetoothReader.OnCardStatusChangeListener({
                onCardStatusChange: function (reader, state) {
                    if (state == that.BluetoothReader.CARD_STATUS_PRESENT) {
                        that.requestUid();
                    }
                    else if (state == that.BluetoothReader.CARD_STATUS_ABSENT) {
                        that.angularZone.run(function () {
                            that.cardUid.next(CARD_READ.ABSENT);
                        });
                    }
                    else {
                        that.angularZone.run(function () {
                            that.cardUid.next(CARD_READ.FAULTY);
                        });
                    }
                }
            });
        };
        _this_1.createOnEnableNotificationCompleteListener = function () {
            var that = _this_1;
            return new com.acs.bluetooth.BluetoothReader.OnEnableNotificationCompleteListener({
                onEnableNotificationComplete: function (reader, errorCode) {
                    if (errorCode != that.BluetoothReader.ERROR_SUCCESS) {
                        console.log('Issue enabling notifications (%s)', that.bluetoothErrors.errorMessage(errorCode));
                    }
                    else {
                        that.authenticate();
                    }
                }
            });
        };
        _this_1.createOnAuthenticationCompleteListener = function () {
            var that = _this_1;
            return new com.acs.bluetooth.BluetoothReader.OnAuthenticationCompleteListener({
                onAuthenticationComplete: function (reader, errorCode) {
                    if (errorCode == that.BluetoothReader.ERROR_SUCCESS) {
                        that.startPolling();
                        that.disableSleep();
                        that.angularZone.run(function () {
                            that.readerConnected.next(true);
                        });
                    }
                    else {
                        console.log('Failed Authenticating (%s)', that.bluetoothErrors.errorMessage(errorCode));
                    }
                }
            });
        };
        _this_1.createOnResponseApduAvailableListener = function () {
            var that = _this_1;
            return new com.acs.bluetooth.BluetoothReader.OnResponseApduAvailableListener({
                onResponseApduAvailable: function (reader, byte, errorCode) {
                    try {
                        var response_1 = that.getResponseString(byte, errorCode);
                        that.angularZone.run(function () {
                            that.cardUid.next(response_1);
                        });
                    }
                    catch (e) {
                        console.log(e.message);
                    }
                }
            });
        };
        _this_1.createOnEscapeResponseAvailableListener = function () {
            var that = _this_1;
            return new com.acs.bluetooth.BluetoothReader.OnEscapeResponseAvailableListener({
                onEscapeResponseAvailable: function (reader, response, errorCode) {
                    console.log("Command Response %s %s", response, that.getResponseString(response, errorCode));
                }
            });
        };
        console.log("ASCBluetooth: init");
        _this_1.scanResults = new rxjs_1.BehaviorSubject([]);
        _this_1.scanning = new rxjs_1.BehaviorSubject(false);
        _this_1.readerConnected = new rxjs_1.BehaviorSubject(false);
        _this_1.cardUid = new rxjs_1.BehaviorSubject('');
        var manager = utils.ad.getApplicationContext().getSystemService(android.content.Context.BLUETOOTH_SERVICE);
        _this_1.adapter = manager.getAdapter();
        _this_1.readerManager = new _this_1.BluetoothReaderManager();
        _this_1.readerManager.setOnReaderDetectionListener(new _this_1.OnReaderDetectionListener({
            onReaderDetection: _this_1.onReaderDetection.bind(_this_1)
        }));
        console.log("ASCBluetooth: init done");
        return _this_1;
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
    ACSBluetooth.prototype.isReaderConnected = function () {
        return this.readerConnected.asObservable();
    };
    ACSBluetooth.prototype.getCardUid = function () {
        return this.cardUid.asObservable();
    };
    ACSBluetooth.prototype.scanResultsObservable = function () {
        return this.scanResults.asObservable();
    };
    ACSBluetooth.prototype.onReaderDetection = function (detectedReader) {
        console.log("ASCBluetooth : inti onReaderDetect");
        if (detectedReader !== null) {
            console.log('ASCBluetooth:  Reader detected');
            this.reader = detectedReader;
            this.reader.setOnResponseApduAvailableListener(this.createOnResponseApduAvailableListener());
            this.reader.setOnAuthenticationCompleteListener(this.createOnAuthenticationCompleteListener());
            this.reader.setOnEnableNotificationCompleteListener(this.createOnEnableNotificationCompleteListener());
            this.reader.setOnCardStatusChangeListener(this.createOnCardStatusChangeListener());
            this.reader.setOnEscapeResponseAvailableListener(this.createOnEscapeResponseAvailableListener());
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
        var _this_1 = this;
        console.log('disconnected');
        this.angularZone.run(function () {
            _this_1.readerConnected.next(false);
        });
        if (this.gatt !== null) {
            this.gatt.disconnect();
            this.gatt.close();
            this.gatt = null;
        }
    };
    ACSBluetooth.prototype.authenticate = function () {
        var key = this.hex2Bytes(MASTER_KEY);
        if (this.reader && this.reader.authenticate(key)) {
        }
        else {
            console.log('error when authenticate');
        }
    };
    ACSBluetooth.prototype.beep = function () {
        var _this = this;
        if (this.reader) {
            setTimeout(function () {
                _this.reader.transmitEscapeCommand(_this.hex2Bytes(COMMANDS['COMMAND_LONG_BEEP']));
            }, 250);
        }
    };
    ACSBluetooth.prototype.startPolling = function () {
        if (this.reader) {
            this.reader.transmitEscapeCommand(this.hex2Bytes(COMMANDS['AUTO_POLLING_START']));
            this.reader.transmitEscapeCommand(this.hex2Bytes(COMMANDS['LONGER_TRANSMISSION']));
            this.reader.transmitEscapeCommand(this.hex2Bytes(COMMANDS['NO_SLEEP']));
        }
    };
    ACSBluetooth.prototype.stopPolling = function () {
        if (this.reader) {
            this.reader.transmitEscapeCommand(this.hex2Bytes(COMMANDS['AUTO_POLLING_STOP']));
        }
    };
    ACSBluetooth.prototype.disableSleep = function () {
        if (this.reader) {
            this.reader.transmitEscapeCommand(this.hex2Bytes(COMMANDS['SLEEP_COMMAND_DISABLE']));
        }
    };
    ACSBluetooth.prototype.requestUid = function () {
        var _this_1 = this;
        if (this.reader) {
            setTimeout(function () {
                if (_this_1.reader.transmitApdu(_this_1.hex2Bytes(COMMANDS['APDU_COMMAND_UID']))) {
                }
                else {
                    console.log('request failed');
                }
            }, 250);
        }
    };
    ACSBluetooth.prototype.getResponseString = function (response, errorCode) {
        if (errorCode == this.BluetoothReader.ERROR_SUCCESS) {
            if (response != null && response.length > 0) {
                return this.toHexString(response).replace(/ /g, '');
            }
            return "";
        }
        throw this.bluetoothErrors.errorMessage(errorCode);
    };
    ACSBluetooth.prototype.hex2Bytes = function (hexStr) {
        hexStr = hexStr.replace(/ /g, '');
        var result = [];
        if (Math.floor(hexStr.length % 2) == 0) {
            for (var i = 0; i < hexStr.length; i += 2) {
                var hex = hexStr.substr(i, 2).toUpperCase();
                var number = parseInt(hex, 16);
                result.push(number);
            }
        }
        return result;
    };
    ACSBluetooth.prototype.toHexString = function (uint8arr) {
        if (!uint8arr) {
            return '';
        }
        var hexStr = '';
        for (var i = 0; i < uint8arr.length; i++) {
            var hex = (uint8arr[i] & 0xFF).toString(16);
            hex = (hex.length === 1) ? '0' + hex : hex;
            hexStr += hex.slice(-2);
        }
        return hexStr.substr(0, hexStr.length - 4).toUpperCase();

    };
    ACSBluetooth = __decorate([
        core_2.Injectable(),
        __metadata("design:paramtypes", [core_1.NgZone])
    ], ACSBluetooth);
    return ACSBluetooth;
}(acs_bluetooth_common_1.Common));
exports.ACSBluetooth = ACSBluetooth;
//# sourceMappingURL=acs-bluetooth.android.js.map