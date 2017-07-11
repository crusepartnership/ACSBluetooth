import * as utils from "utils/utils";
import * as app from "application";
import { Common } from './acs-bluetooth.common';
import {BluetoothGattErrors} from "./bluetooth-gatt-errors";
import {BehaviorSubject, Observable} from "rxjs";
import {NgZone} from "@angular/core";

export class ACSBluetooth extends Common {

    // Android java to js
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
    private gatt: android.bluetooth.BluetoothGatt  = null;
    private adapter: any = null;
    private scanning: BehaviorSubject<boolean>;
    private scanResults: BehaviorSubject<android.bluetooth.BluetoothDevice[]>;

    /**
     * Callback for scanning for new devices
     */
    private scanForDevicesCallback = new android.bluetooth.BluetoothAdapter.LeScanCallback({
        onLeScan: (device: android.bluetooth.BluetoothDevice , rssi, data) => {
            try {
                console.log(`ASCBluetooth: scanResults ${this}`);
                let value = this.scanResults.getValue();
                let filteredValues = value.filter((item: android.bluetooth.BluetoothDevice ) => {
                        return item.getAddress() === device.getAddress();
                    });
                if (filteredValues.length > 1) {
                    console.log(`ASCBluetooth: Scanning discovered new Bluetooth device ${device.getName()} : ${device.getAddress()} [${device.hashCode()}]`);
                    value.push(device);
                    console.log(`ASCBluetooth: NgZone.isInAngularZone() : ${NgZone.isInAngularZone()}`);
                    this.angularZone.run(() => {
                        this.scanResults.next(value);
                        console.log(`ASCBluetooth: angularZone.isInAngularZone() : ${NgZone.isInAngularZone()}`);
                    });
                    console.log(`ASCBluetooth: ${this.scanResults.getValue().length} devices found`);
                }​
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

        //let manager = utils.ad.getApplicationContext().getSystemService(android.content.Context.BLUETOOTH_SERVICE);
        //this.adapter = manager.getAdapter();

        this.readerManager = new this.BluetoothReaderManager();
        this.readerManager.setOnReaderDetectionListener(new this.OnReaderDetectionListener({
            onReaderDetection: this.onReaderDetection
        }));
        console.log("ASCBluetooth: init done");
    }


    public startScanningForDevices() {
        this.scanning.next(true);
        this.scanResults.next([]);
        console.log('Starting scan for Bluetooth devices');
        try {
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

    public scanningObservable(): Observable<boolean> {
        return this.scanning.asObservable();
    }

    public isScanning(): BehaviorSubject<boolean> {
        return this.scanning;
    }

    public scanResultsObservable(): Observable<android.bluetooth.BluetoothDevice[]> {
        return this.scanResults.asObservable();
    }

    private onReaderDetection(detectedReader) {
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
        } else {
            console.error('ASCBluetooth:  Error detecting reader');
        }
    }

    public createBluetoothReaderGattCallback() {
        this.gattCallback = new this.BluetoothReaderGattCallback();
        this.gattCallback.setOnConnectionStateChangeListener(this.createOnConnectionStateChangeListener());
        return this.gattCallback();
    }

    public getGattCallback(): any {
        return this.gattCallback;
    }

    public connect(updatedDeviceDetails) {
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
        if (this.gatt !== null) {
            this.gatt.disconnect();
            this.gatt.close();
            this.gatt = null;
        }
    }


    private createOnConnectionStateChangeListener() {
        console.log('ASCBluetooth:  createOnConnectionStateChangeListener');
        return new this.OnConnectionStateChangeListener({
                onConnectionStateChange: function (gatt, state, newState) {
                    this.readerState = newState;
                    if (state !== this.BluetoothGatt.GATT_SUCCESS) {
                        console.log(
                            `ASCBluetooth:  error ${this.bluetoothErrors.gattMessage(state)} ['${state}'] attempting ${this.bluetoothErrors.errorMessage(newState)}, ['${newState}']`
                        );

                        //self.trigger(bluetoothErrors.gattEvent(state), {});

                    } else {
                        console.log('ASCBluetooth:  GATT Success');
                        if (newState == this.BluetoothProfile.STATE_CONNECTED) {
                            console.log('ASCBluetooth:  Bluetooth Connected');

                            //self.trigger('this.bluetoothreader.connected', {});

                            /* Detect the connected reader. */
                            if (this.readerManager != null) {
                                console.log('ASCBluetooth:  Detect Reader');
                                this.readerManager.detectReader(gatt, this.gattCallback);
                            } else {
                                console.log('ASCBluetooth:  No valid readerManager');
                            }
                        } else if (newState == this.BluetoothProfile.STATE_DISCONNECTED) {
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
            }
        );
    }
}
