"use strict";
var utils = require("utils/utils");
var bluetooth_gatt_errors_1 = require("./lib/bluetooth-gatt-errors");
var rxjs_1 = require("rxjs");
var ASCBluetooth;
(function (ASCBluetooth) {
    var BluetoothGatt = android.bluetooth.BluetoothGatt;
    var BluetoothProfile = android.bluetooth.BluetoothProfile;
    var BluetoothReader = com.acs.bluetooth.BluetoothReader;
    var BluetoothReaderGattCallback = com.acs.bluetooth.BluetoothReaderGattCallback;
    var BluetoothReaderManager = com.acs.bluetooth.BluetoothReaderManager;
    var OnReaderDetectionListener = com.acs.bluetooth.BluetoothReaderManager.OnReaderDetectionListener;
    var OnConnectionStateChangeListener = com.acs.bluetooth.BluetoothReaderGattCallback.OnConnectionStateChangeListener;
    var LeScanCallback = android.bluetooth.BluetoothAdapter.LeScanCallback;
    var _readerManager;
    var _gattCallback = null;
    var _bluetoothErrors = new bluetooth_gatt_errors_1.BluetoothGattErrors();
    var _readerState = BluetoothReader.STATE_DISCONNECTED;
    var _reader = null;
    var _deviceDetails = {};
    var _device = null;
    var _gatt = null;
    var _adapter = null;
    var _scanning;
    var _scanResults;
    var _scanForDevicesCallback = new LeScanCallback({
        onLeScan: function (device, rssi, data) {
            console.log("Scanning");
            //let value = _scanResults.getValue();
            //if (value[device.getAddress()] === undefined) {
            console.log("Discovered Bluetooth Device " + device.getName() + ":" + device.getAddress() + " [" + device.hashCode() + "]");
            //value.push(device);
            //  _scanResults.next(value);
            //}​
        }
    });
    init();
    function init() {
        console.log("ASCBluetooth: init");
        _scanResults = new rxjs_1.BehaviorSubject([]);
        _scanning = new rxjs_1.BehaviorSubject(false);
        var manager = utils.ad.getApplicationContext().getSystemService(android.content.Context.BLUETOOTH_SERVICE);
        _adapter = manager.getAdapter();
        _readerManager = new BluetoothReaderManager();
        _readerManager.setOnReaderDetectionListener(new OnReaderDetectionListener({
            onReaderDetection: onReaderDetection
        }));
    }
    function startScanningForDevices() {
        _scanning.next(true);
        _scanResults.next([]);
        console.log('Starting scan for Bluetooth devices');
        try {
            _adapter.startLeScan(_scanForDevicesCallback);
        }
        catch (e) {
            console.log("ASCBluetooth: unable to start scanning for bluetooth devices with message: " + e.message);
            startScanningForDevices();
        }
    }
    ASCBluetooth.startScanningForDevices = startScanningForDevices;
    function stopScanningForDevices() {
        _scanning.next(false);
        console.log('Stopping scan for Bluetooth devices');
        _adapter.stopLeScan(_scanForDevicesCallback);
    }
    ASCBluetooth.stopScanningForDevices = stopScanningForDevices;
    function scanning() {
        return _scanning.asObservable();
    }
    ASCBluetooth.scanning = scanning;
    function isScanning() {
        return _scanning;
    }
    ASCBluetooth.isScanning = isScanning;
    function scanResults() {
        return _scanResults.asObservable();
    }
    ASCBluetooth.scanResults = scanResults;
    function onReaderDetection(detectedReader) {
        console.log("ASCBluetooth : inti onReaderDetect");
        if (detectedReader !== null) {
            console.log('ASCBluetooth:  Reader detected');
            _reader = detectedReader;
            /*
             _reader.setOnResponseApduAvailableListener(createOnResponseApduAvailableListener());
             _reader.setOnAuthenticationCompleteListener(createOnAuthenticationCompleteListener());
             _reader.setOnEnableNotificationCompleteListener(createOnEnableNotificationCompleteListener());
             _reader.setOnCardStatusChangeListener(createOnCardStatusChangeListener());
             _reader.setOnEscapeResponseAvailableListener(createOnEscapeResponseAvailableListener());
             */
            if (!_reader.enableNotification(true)) {
                console.error('ASCBluetooth:  Unable to enable to notifications');
            }
        }
        else {
            console.error('ASCBluetooth:  Error detecting reader');
        }
    }
    ASCBluetooth.onReaderDetection = onReaderDetection;
    function createBluetoothReaderGattCallback() {
        _gattCallback = new BluetoothReaderGattCallback();
        _gattCallback.setOnConnectionStateChangeListener(createOnConnectionStateChangeListener());
    }
    ASCBluetooth.createBluetoothReaderGattCallback = createBluetoothReaderGattCallback;
    function gattCallback() {
        return _gattCallback;
    }
    ASCBluetooth.gattCallback = gattCallback;
    function connect(updatedDeviceDetails) {
        console.log('ASCBluetooth:  Connecting Reader');
        try {
            if (!updatedDeviceDetails.address) {
                console.log("ASCBluetooth: No device address was supplied");
                return;
            }
            // remove any existing gatt connection
            if (_gatt !== null) {
                _gatt.disconnect();
                _gatt.close();
                _gatt = null;
            }
            console.log('ASCBluetooth:  Locating Device');
            _device = _adapter.getRemoteDevice(updatedDeviceDetails.address);
            if (_device === null) {
                console.error('ASCBluetooth:  Unable to find Device');
                return false;
            }
            console.log('ASCBluetooth:  Connecting to GATT server');
            // Connect to GATT server.
            _gatt = _device.connectGatt(utils.ad.getApplicationContext(), true, createBluetoothReaderGattCallback());
            return true;
        }
        catch (e) {
            console.log("ASCBluetooth: Failed connecting to device " + updatedDeviceDetails.address + " with message: " + e.message);
            return false;
        }
    }
    ASCBluetooth.connect = connect;
    function createOnConnectionStateChangeListener() {
        console.log('ASCBluetooth:  createOnConnectionStateChangeListener');
        return new OnConnectionStateChangeListener({
            onConnectionStateChange: function (gatt, state, newState) {
                _readerState = newState;
                if (state !== BluetoothGatt.GATT_SUCCESS) {
                    console.log("ASCBluetooth:  error " + _bluetoothErrors.gattMessage(state) + " ['" + state + "'] attempting " + _bluetoothErrors.errorMessage(newState) + ", ['" + newState + "']");
                }
                else {
                    console.log('ASCBluetooth:  GATT Success');
                    if (newState == BluetoothProfile.STATE_CONNECTED) {
                        console.log('ASCBluetooth:  Bluetooth Connected');
                        //self.trigger('bluetoothreader.connected', {});
                        /* Detect the connected reader. */
                        if (_readerManager != null) {
                            console.log('ASCBluetooth:  Detect Reader');
                            _readerManager.detectReader(gatt, gattCallback);
                        }
                        else {
                            console.log('ASCBluetooth:  No valid readerManager');
                        }
                    }
                    else if (newState == BluetoothProfile.STATE_DISCONNECTED) {
                        console.log('ASCBluetooth:  Bluetooth Disconnected');
                        _reader = null;
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
    }
})(ASCBluetooth = exports.ASCBluetooth || (exports.ASCBluetooth = {}));
