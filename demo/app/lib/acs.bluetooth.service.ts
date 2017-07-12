import {Injectable} from "@angular/core";
import {ACSBluetooth} from "acs-bluetooth";
import {Observable} from "rxjs";
import {NgZone} from "@angular/core";

//todo consider removeing this service
@Injectable()
export class ACSBluetoothService {
    private selectedDevice: any;
    private ACSBluetooth: ACSBluetooth;
    constructor(private angularZone: NgZone) {
        this.ACSBluetooth = new ACSBluetooth(angularZone);
        console.log("ACS Bluetooth Service: starting up");
    }


    public selectDevice(event) {
        console.log(`ACS Bluetooth Service: selectDevice ${JSON.stringify(event)}`);
        this.selectedDevice = {address: '20:91:48:5B:62:2E'};
        this.connectToDevice();
    }

    public connectToDevice(): void {
        this.ACSBluetooth.connect(this.selectedDevice);
    }

    public getConnectToDevice(): any {
        return this.selectedDevice;
    }

    public connect() {
        this.ACSBluetooth.connect(this.selectedDevice);
    }

    public  toggleScan() {
        if (this.ACSBluetooth.isScanning().getValue() !== false) {
            this.ACSBluetooth.stopScanningForDevices();
        } else {
            this.ACSBluetooth.startScanningForDevices();
        }
    }

    public get isScanning(): Observable<boolean> {
        return this.ACSBluetooth.scanningObservable();
    }

    public get scanResults(): Observable<any[]> {
        return this.ACSBluetooth.scanResultsObservable();
    }


}
