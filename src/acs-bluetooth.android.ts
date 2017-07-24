import {Common} from './acs-bluetooth.common';
import {BluetoothGattErrors} from "./bluetooth-gatt-errors";
import {BehaviorSubject, Observable} from "rxjs";
import {NgZone} from "@angular/core";
import * as utils from "tns-core-modules/utils/utils";
import {Injectable} from "@angular/core";
import * as application from 'tns-core-modules/application';

import ScanResult = android.bluetooth.le.ScanResult;

const MyScanCallback = android.bluetooth.le.ScanCallback.extend({
    onBatchScanResults: function (results) {
        console.log("------- scanCallback.onBatchScanResults");
    },
    onScanFailed: function (errorCode) {
        console.log("------- YAY!");
        console.log("------- scanCallback.onScanFailed errorCode: " + errorCode);
        var errorMessage;
        if (errorCode == android.bluetooth.le.ScanCallback.SCAN_FAILED_ALREADY_STARTED) {
            errorMessage = "Scan already started";
        } else if (errorCode == android.bluetooth.le.ScanCallback.SCAN_FAILED_APPLICATION_REGISTRATION_FAILED) {
            errorMessage = "Application registration failed";
        } else if (errorCode == android.bluetooth.le.ScanCallback.SCAN_FAILED_FEATURE_UNSUPPORTED) {
            errorMessage = "Feature unsupported";
        } else if (errorCode == android.bluetooth.le.ScanCallback.SCAN_FAILED_INTERNAL_ERROR) {
            errorMessage = "Internal error";
        } else {
            errorMessage = "Scan failed to start";
        }
        console.log("------- scanCallback.onScanFailed errorMessage: " + errorMessage);
    },
    onScanResult: function (callbackType, result) {
        console.log("------- scanCallback.onScanResult: " + callbackType);
    }
});

const ACCESS_COARSE_LOCATION_PERMISSION_REQUEST_CODE = 222;
const COMMANDS = {
    AUTO_POLLING_START: 'E0 00 00 40 01',
    AUTO_POLLING_STOP: 'E0 00 00 40 00',
    APDU_COMMAND_UID: 'FF CA 00 00 00',
    APDU_COMMAND_ATS: 'FF CA 01 00 00',
    SLEEP_COMMAND_DISABLE: 'E0 00 00 48 04'
};
const MASTER_KEY = '41 43 52 31 32 35 35 55 2D 4A 31 20 41 75 74 68';

@Injectable()
export class ACSBluetooth extends Common {

    private BluetoothGatt = android.bluetooth.BluetoothGatt;
    private BluetoothProfile = android.bluetooth.BluetoothProfile;
    // ASC jar to js
    private BluetoothReader = com.acs.bluetooth.BluetoothReader;
    private BluetoothReaderGattCallback = com.acs.bluetooth.BluetoothReaderGattCallback;
    private BluetoothReaderManager = com.acs.bluetooth.BluetoothReaderManager;
    private OnReaderDetectionListener = com.acs.bluetooth.BluetoothReaderManager.OnReaderDetectionListener;
    private OnConnectionStateChangeListener = com.acs.bluetooth.BluetoothReaderGattCallback.OnConnectionStateChangeListener;

    private readerState = this.BluetoothReader.STATE_DISCONNECTED;
    private bluetoothErrors = new BluetoothGattErrors();

    private readerManager: any;
    private gattCallback: any = null;

    private reader: any = null;
    private device: android.bluetooth.BluetoothDevice = null;
    private gatt: android.bluetooth.BluetoothGatt = null;
    private adapter: any = null;
    private scanning: BehaviorSubject<boolean>;
    private scanResults: BehaviorSubject<android.bluetooth.BluetoothDevice[]>;
    private readerConnnected:BehaviorSubject<boolean>;
    private cardUid:BehaviorSubject<string>;


    private cback = new MyScanCallback();


    /**
     * Callback for scanning for new devices
     */
    private scanForDevicesCallback = new android.bluetooth.BluetoothAdapter.LeScanCallback({
        onLeScan: (device: android.bluetooth.BluetoothDevice, rssi, data) => {
            try {
                // console.log(`ASCBluetooth: scanResults ${this}`);
                // console.log(`ASCBluetooth: name ${device.getName()}`);
                // console.log(`ASCBluetooth: address ${device.getAddress()}`);
                let value = this.scanResults.getValue();
                let filteredValues = value.filter((item: android.bluetooth.BluetoothDevice) => {
                    return item.getAddress() === device.getAddress();
                });
                if (filteredValues.length == 0 && device.getName()) {
                    console.log(`ASCBluetooth: Scanning discovered new Bluetooth device ${device.getName()} : ${device.getAddress()} [${device.hashCode()}]`);
                    value.push(device);
                    console.log(`ASCBluetooth: NgZone.isInAngularZone() : ${NgZone.isInAngularZone()}`);
                    this.angularZone.run(() => {
                        this.scanResults.next(value);
                        console.log(`ASCBluetooth: angularZone.isInAngularZone() : ${NgZone.isInAngularZone()}`);
                    });
                    console.log(`ASCBluetooth: ${this.scanResults.getValue().length} devices found`);
                }
                ​
            } catch (e) {
                console.log(`ASCBluetooth: error updateFoundDevices with message: ${e.message}`);
            }
        }
    });


    /**
     * init module params
     */
    constructor(private angularZone: NgZone) {
        super();
        console.log("ASCBluetooth: init");
        this.scanResults = <BehaviorSubject<android.bluetooth.BluetoothDevice[]>> new BehaviorSubject([]);
        this.scanning = <BehaviorSubject<boolean>> new BehaviorSubject(false);
        this.readerConnnected = <BehaviorSubject<boolean>> new BehaviorSubject(false);
        this.cardUid =  <BehaviorSubject<string>> new BehaviorSubject('');
        let manager = utils.ad.getApplicationContext().getSystemService(android.content.Context.BLUETOOTH_SERVICE);
        this.adapter = manager.getAdapter();
        this.readerManager = new this.BluetoothReaderManager();
        this.readerManager.setOnReaderDetectionListener(new this.OnReaderDetectionListener({
            onReaderDetection: this.onReaderDetection.bind(this)
        }));
        console.log("ASCBluetooth: init done");
    }


    public startScanningForDevices() {
        this.scanning.next(true);
        this.scanResults.next([]);
        console.log('Starting scan for Bluetooth devices');

        try {
            // let scanner = this.adapter.getBluetoothLeScanner();
            //
            // let  scanFilters = null;
            // let scanSettings = new android.bluetooth.le.ScanSettings.Builder();
            // scanSettings.setReportDelay(0);
            //
            // let scanMode =  android.bluetooth.le.ScanSettings.SCAN_MODE_LOW_LATENCY;
            // scanSettings.setScanMode(scanMode);
            //
            // if (android.os.Build.VERSION.SDK_INT >= 23 /*android.os.Build.VERSION_CODES.M */) {
            //     let matchMode =  android.bluetooth.le.ScanSettings.MATCH_MODE_AGGRESSIVE;
            //     scanSettings.setMatchMode(matchMode);
            //
            //     let matchNum =  android.bluetooth.le.ScanSettings.MATCH_NUM_MAX_ADVERTISEMENT;
            //     scanSettings.setNumOfMatches(matchNum);
            //
            //     let callbackType =  android.bluetooth.le.ScanSettings.CALLBACK_TYPE_ALL_MATCHES;
            //     scanSettings.setCallbackType(callbackType);
            // }
            //
            // //console.log(this.cback);
            //
            // scanner.startScan(this.cback);
            this.adapter.startLeScan(this.scanForDevicesCallback);
        } catch (e) {
            console.log(`ASCBluetooth: unable to start scanning for bluetooth devices with message: ${e.message}`);
            this.stopScanningForDevices();
        }
    }


    public stopScanningForDevices() {
        this.scanning.next(false);
        console.log('Stopping scan for Bluetooth devices');
        try {
            this.adapter.stopLeScan(this.scanForDevicesCallback);
        } catch (e) {
            console.log(`ASCBluetooth: Error when attempting to stop scanning for bluetooth devices with message: ${e.message}`);

        }
    }

    public isPermissionGranted() {
        let hasPermission = android.os.Build.VERSION.SDK_INT < 23; // Android M. (6.0)
        if (!hasPermission) {
            hasPermission = android.content.pm.PackageManager.PERMISSION_GRANTED ==
                android.support.v4.content.ContextCompat.checkSelfPermission(application.android.foregroundActivity, android.Manifest.permission.ACCESS_COARSE_LOCATION);
        }
        return hasPermission;
    }

    public requestCoarseLocationPermission() {
        return android.support.v4.app.ActivityCompat.requestPermissions( //https://developer.android.com/reference/android/support/v4/app/package-summary.html ******** Should use OnRequestPermissionsResultCallback ?
            application.android.foregroundActivity,
            [android.Manifest.permission.ACCESS_COARSE_LOCATION],
            ACCESS_COARSE_LOCATION_PERMISSION_REQUEST_CODE);
    };


    public scanningObservable(): Observable<boolean> {
        return this.scanning.asObservable();
    }

    /**
     * Check if device is scanning new devices
     * @returns {BehaviorSubject<boolean>}
     */
    public isScanning(): BehaviorSubject<boolean> {
        return this.scanning;
    }

    public isReaderConnnected() : Observable<boolean> {
        return this.readerConnnected.asObservable();
    }

    public getCardUid(): Observable<string> {
        return this.cardUid.asObservable();
    }

    public scanResultsObservable(): Observable<android.bluetooth.BluetoothDevice[]> {
        return this.scanResults.asObservable();
    }

    private onReaderDetection(detectedReader) {
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



        } else {
            console.error('ASCBluetooth:  Error detecting reader');
        }
    }


    public createBluetoothReaderGattCallback() {
        this.gattCallback = new this.BluetoothReaderGattCallback();
        this.gattCallback.setOnConnectionStateChangeListener(this.createOnConnectionStateChangeListener());
        return this.gattCallback;
    }

    public getGattCallback(): any {
        return this.gattCallback;
    }

    public connect(updatedDeviceDetails) {
        console.log('ASCBluetooth:  Connecting Reader');
4E420561

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
            this.gatt = this.device.connectGatt(
                utils.ad.getApplicationContext(),
                true,
                this.createBluetoothReaderGattCallback()
            );
            return true;
        } catch (e) {
            console.log(`ASCBluetooth: Failed connecting to device ${updatedDeviceDetails.address} with message: ${e.message}`);
            return false;
        }
    }

    // remove any existing gatt connection
    public disconnect() {
        console.log('disconnected');
        this.angularZone.run(
            () => {
                this.readerConnnected.next(false);
            }
        );

        if (this.gatt !== null) {
            this.gatt.disconnect();
            this.gatt.close();
            this.gatt = null;
        }
    }


    private createOnConnectionStateChangeListener = () => {
        console.log('ASCBluetooth:  createOnConnectionStateChangeListener');
        let that = this;
        return new this.OnConnectionStateChangeListener({
                onConnectionStateChange: function (gatt, state, newState) {

                    that.readerState = newState;
                    if (state !== that.BluetoothGatt.GATT_SUCCESS) {
                        console.log(
                            `ASCBluetooth:  error ${that.bluetoothErrors.gattMessage(state)} ['${state}'] attempting ${that.bluetoothErrors.errorMessage(newState)}, ['${newState}']`
                        );

                    } else {
                        console.log('ASCBluetooth:  GATT Success');
                        if (newState == that.BluetoothProfile.STATE_CONNECTED) {
                            console.log('ASCBluetooth:  Bluetooth Connected');

                            /* Detect the connected reader. */
                            if (that.readerManager != null) {
                                console.log('ASCBluetooth:  Detect Reader');
                                that.readerManager.detectReader(gatt, that.gattCallback);
                            } else {
                                console.log('ASCBluetooth:  No valid readerManager');
                            }
                        } else if (newState == that.BluetoothProfile.STATE_DISCONNECTED) {
                            console.log('ASCBluetooth:  Bluetooth Disconnected');
                            that.reader = null;
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
            }
        );
    }

    private createOnCardStatusChangeListener = () => {
        let that = this;
        return new com.acs.bluetooth.BluetoothReader.OnCardStatusChangeListener({
                onCardStatusChange: function (reader, state) {

                    if(state == that.BluetoothReader.CARD_STATUS_PRESENT) {

                        that.requestUid();
                    }else if(state == that.BluetoothReader.CARD_STATUS_ABSENT) {
                        that.angularZone.run(
                            () => {
                                that.cardUid.next('');
                            }
                        );

                    }else {
                        that.angularZone.run(
                            () => {
                                that.cardUid.next('');
                            }
                        );
                    }
                }
            }
        );
    }

    private createOnEnableNotificationCompleteListener = () => {
        let that = this;
        return new com.acs.bluetooth.BluetoothReader.OnEnableNotificationCompleteListener({
            onEnableNotificationComplete: function (reader, errorCode) {
                if (errorCode != that.BluetoothReader.ERROR_SUCCESS) {
                  console.log('Issue enabling notifications (%s)', that.bluetoothErrors.errorMessage(errorCode));
                } else {
                    that.authenticate();
                }
            }
        });
    }

    private createOnAuthenticationCompleteListener = () => {
        let that = this;

        return new com.acs.bluetooth.BluetoothReader.OnAuthenticationCompleteListener({
            onAuthenticationComplete: function(reader, errorCode) {
                if (errorCode == that.BluetoothReader.ERROR_SUCCESS) {
                    that.startPolling();
                    that.disableSleep();

                    that.angularZone.run(
                        () => {
                            that.readerConnnected.next(true);
                        }
                    );
                } else {
                    console.log('Failed Authenticating (%s)', that.bluetoothErrors.errorMessage(errorCode));

                }

            }
        });
    }

    private createOnResponseApduAvailableListener = () => {
        let that = this;

        return new com.acs.bluetooth.BluetoothReader.OnResponseApduAvailableListener({
            onResponseApduAvailable: function(reader, byte, errorCode) {
                try {
                    let response = that.getResponseString(byte, errorCode);

                    that.angularZone.run(
                        () => {
                            that.cardUid.next(response);
                        }
                    );
                } catch (e) {
                    console.log(e.message);
                }

            }
        });
    }

    private createOnEscapeResponseAvailableListener = () => {
        let that = this;
        return new com.acs.bluetooth.BluetoothReader.OnEscapeResponseAvailableListener({
            onEscapeResponseAvailable: function(reader, response, errorCode) {
                console.log("Command Response %s %s", response, that.getResponseString(response, errorCode));
            }
        });
    }


    /**
     * Features of scanner
     */


    /**
     * Authenticate bluetooth scanner
     */
    public authenticate() {
        const key = this.hex2Bytes(MASTER_KEY);
        if(this.reader && this.reader.authenticate(key)) {

        }else{
            console.log('error when authenticate');
        }

    }

    /**
     * Enable card reader to start polling
     */
    public startPolling() {
        if(this.reader) {
            this.reader.transmitEscapeCommand(this.hex2Bytes(COMMANDS['AUTO_POLLING_START']));
        }

    }

    public stopPolling() {
        if(this.reader) {
            this.reader.transmitEscapeCommand(this.hex2Bytes(COMMANDS['AUTO_POLLING_STOP']));
        }
    }

    public disableSleep() {
        if(this.reader) {
            this.reader.transmitEscapeCommand(this.hex2Bytes(COMMANDS['SLEEP_COMMAND_DISABLE']));
        }
    }

    public requestUid() {
        if(this.reader) {

            setTimeout(()=>{
                if(this.reader.transmitApdu(this.hex2Bytes(COMMANDS['APDU_COMMAND_UID']))){
                    console.log('request success');
                }else{
                    console.log('request failed');
                }
            },250 );


        }
    }


    /**
     * Utils function
     */

    public getResponseString(response, errorCode) {
        if (errorCode == this.BluetoothReader.ERROR_SUCCESS) {
            if (response != null && response.length > 0) {
                return this.toHexString(response).replace(/ /g, '');
            }
            return "";
        }
        throw this.bluetoothErrors.errorMessage(errorCode);
    }

    public hex2Bytes(hexStr) {
        hexStr = hexStr.replace(/ /g, '');

        let result = [];
        if(Math.floor( hexStr.length % 2) ==0 ){

            for (let i = 0; i < hexStr.length;  i+=2) {
                let hex = hexStr.substr(i, 2).toUpperCase();
                let number = parseInt(hex,16);

                result.push(number);
            }
        }


        return result;
    }

    public toHexString(attr) {

        let result = "";
        for (let i = 0; i < attr.length; i++) {
            let num = parseInt(attr[i]);
            if (num>0) {
                let hexStr = num.toString(16);
                if(hexStr.length<2)
                {
                    hexStr = '0' +hexStr;
                }
                result += hexStr.toUpperCase();
            }
        }
        return result;
    }
}
