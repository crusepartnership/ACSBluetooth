import utils = require("utils/utils");
import app = require("application");
import {BluetoothGattErrors} from "./lib/bluetooth-gatt-errors";
import {BehaviorSubject, Observable} from "rxjs";


export module ASCBluetooth {
    let BluetoothGatt = android.bluetooth.BluetoothGatt;
    let BluetoothProfile = android.bluetooth.BluetoothProfile;
    let BluetoothReader = com.acs.bluetooth.BluetoothReader;
    let BluetoothReaderGattCallback = com.acs.bluetooth.BluetoothReaderGattCallback;
    let BluetoothReaderManager = com.acs.bluetooth.BluetoothReaderManager;
    let OnReaderDetectionListener = com.acs.bluetooth.BluetoothReaderManager.OnReaderDetectionListener;
    let OnConnectionStateChangeListener = com.acs.bluetooth.BluetoothReaderGattCallback.OnConnectionStateChangeListener;
    let LeScanCallback = android.bluetooth.BluetoothAdapter.LeScanCallback;

    let _readerManager: any;
    let _gattCallback: any = null;
    let _bluetoothErrors = new BluetoothGattErrors();

    let _readerState = BluetoothReader.STATE_DISCONNECTED;
    let _reader: any = null;
    let _deviceDetails: any = {};
    let _device: any = null;
    let _gatt: any = null;
    let _adapter: any = null;
    let _scanning: BehaviorSubject<boolean>;
    let _scanResults: BehaviorSubject<Object[]>;
    let _scanForDevicesCallback = new LeScanCallback({
        onLeScan: function (device, rssi, data) {
            console.log("Scanning");
            //let value = _scanResults.getValue();
            //if (value[device.getAddress()] === undefined) {
            console.log(`Discovered Bluetooth Device ${device.getName()}:${device.getAddress()} [${device.hashCode()}]`);
            //value.push(device);
            //  _scanResults.next(value);
            //}​
        }
    });

    init();
    function init() {
        console.log("ASCBluetooth: init");
        _scanResults = <BehaviorSubject<Object[]>> new BehaviorSubject([]);
        _scanning = <BehaviorSubject<boolean>> new BehaviorSubject(false);

        let manager = utils.ad.getApplicationContext().getSystemService(android.content.Context.BLUETOOTH_SERVICE);
        _adapter = manager.getAdapter();

        _readerManager = new BluetoothReaderManager();
        _readerManager.setOnReaderDetectionListener(new OnReaderDetectionListener({
            onReaderDetection: onReaderDetection
        }));
    }

    export function startScanningForDevices() {
        _scanning.next(true);
        _scanResults.next([]);
        console.log('Starting scan for Bluetooth devices');
        try {
            _adapter.startLeScan(_scanForDevicesCallback);
        } catch (e) {
            console.log("ASCBluetooth: unable to start scanning for bluetooth devices with message: " + e.message);
            startScanningForDevices();
        }
    }

    export function stopScanningForDevices() {
        _scanning.next(false);
        console.log('Stopping scan for Bluetooth devices');
        _adapter.stopLeScan(_scanForDevicesCallback);
    }

    export function scanning(): Observable<boolean> {
        return _scanning.asObservable();
    }

    export function isScanning(): BehaviorSubject<boolean> {
        return _scanning;
    }

    export function scanResults(): Observable<Object[]> {
        return _scanResults.asObservable();
    }

    export function onReaderDetection(detectedReader) {
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
        } else {
            console.error('ASCBluetooth:  Error detecting reader');
        }
    }

    export function createBluetoothReaderGattCallback() {
        _gattCallback = new BluetoothReaderGattCallback();
        _gattCallback.setOnConnectionStateChangeListener(createOnConnectionStateChangeListener());
    }

    export function gattCallback(): any {
        return _gattCallback;
    }

    export function connect(updatedDeviceDetails) {
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
            _gatt = _device.connectGatt(
                utils.ad.getApplicationContext(),
                true,
                createBluetoothReaderGattCallback()
            );
            return true;
        } catch (e) {
            console.log(`ASCBluetooth: Failed connecting to device ${updatedDeviceDetails.address} with message: ${e.message}`);
            return false;
        }
    }


    function createOnConnectionStateChangeListener() {
        console.log('ASCBluetooth:  createOnConnectionStateChangeListener');
        return new OnConnectionStateChangeListener({
                onConnectionStateChange: function (gatt, state, newState) {
                    _readerState = newState;
                    if (state !== BluetoothGatt.GATT_SUCCESS) {
                        console.log(
                            `ASCBluetooth:  error ${_bluetoothErrors.gattMessage(state)} ['${state}'] attempting ${_bluetoothErrors.errorMessage(newState)}, ['${newState}']`
                        );

                        //self.trigger(_bluetoothErrors.gattEvent(state), {});

                    } else {
                        console.log('ASCBluetooth:  GATT Success');
                        if (newState == BluetoothProfile.STATE_CONNECTED) {
                            console.log('ASCBluetooth:  Bluetooth Connected');

                            //self.trigger('bluetoothreader.connected', {});

                            /* Detect the connected reader. */
                            if (_readerManager != null) {
                                console.log('ASCBluetooth:  Detect Reader');
                                _readerManager.detectReader(gatt, gattCallback);
                            } else {
                                console.log('ASCBluetooth:  No valid readerManager');
                            }
                        } else if (newState == BluetoothProfile.STATE_DISCONNECTED) {
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

                            //self.trigger('bluetoothreader.disconnected', {});
                        }
                    }
                }
            }
        );
    }
}
