import { Common } from './acs-bluetooth.common';
import { BehaviorSubject, Observable } from "rxjs";
import { NgZone } from "@angular/core";

export declare class ACSBluetooth extends Common {
    private angularZone;
    private BluetoothGatt;
    private BluetoothProfile;
    private BluetoothReader;
    private BluetoothReaderGattCallback;
    private BluetoothReaderManager;
    private OnReaderDetectionListener;
    private OnConnectionStateChangeListener;
    private readerState;
    private bluetoothErrors;
    private readerManager;
    private gattCallback;
    private reader;
    private device;
    private gatt;
    private adapter;
    private scanning;
    private scanResults;
    private scanForDevicesCallback;
    constructor(angularZone: NgZone);
    startScanningForDevices(): void;
    stopScanningForDevices(): void;
    scanningObservable(): Observable<boolean>;
    isScanning(): BehaviorSubject<boolean>;
    scanResultsObservable(): Observable<any[]>;
    private onReaderDetection(detectedReader);
    createBluetoothReaderGattCallback(): any;
    getGattCallback(): any;
    connect(updatedDeviceDetails: any): boolean;
    disconnect(): void;
    private createOnConnectionStateChangeListener();
}




