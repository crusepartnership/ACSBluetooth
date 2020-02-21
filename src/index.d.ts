import { Common } from './acs-bluetooth.common';
import {Observable} from "rxjs/Observable";
export declare class ACSBluetooth extends Common {
    // define your typings manually
    // or..
    // take the ios or android .d.ts files and copy/paste them here

    public startScanningForDevices() : void;
    public stopScanningForDevices() : void;
    public isPermissionGranted() : boolean;
    public disconnect(): void;
    public connect(detail: any): boolean;
    public requestCoarseLocationPermission(): boolean;
    public isScanning(): Observable<boolean>;
    public getCardUid(): Observable<string>;
    public isReaderConnected(): Observable<boolean>;
    public scanResultsObservable(): Observable<any>;
    public beep(): void;
}
