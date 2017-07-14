import {Injectable} from "@angular/core";
import {ACSBluetooth} from "nativescript-acs-bluetooth";


//todo consider removeing this service
@Injectable()
export class ACSBluetoothService {
    private connected: boolean = false;
    private bluetoothDevice : BluetoothDevice;
    constructor(
        private acsBluetooth: ACSBluetooth
    ) {
        console.log("ACS Bluetooth Service: starting up");
    }

    public selectDevice(event) {
        console.log(`ACS Bluetooth Service: selectDevice ${JSON.stringify(event)}`);
            this.bluetoothDevice = {address: '20:91:48:5B:62:2E'};
    }

    /**
     * Check if bluetooth deivce has been connected
     * @returns {boolean}
     */
    public isConnected()
    {
        return this.connected;
    }

    /**
     * Disconnect a bluetooth device
     */
    public disconnectBluetoothScanner()
    {
        this.connected = false;
    }

    /**
     * Connect to a device
     * @param address
     */
    public connectBluetoothScanner(address)
    {
        this.bluetoothDevice = {
            address: address
        };

        //this.acsBluetooth.connect(this.bluetoothDevice);
        this.connected = true;
    }

    public getConnectToDevice(): any {
        return this.bluetoothDevice;
    }

    public toggleScan() {
        // if (this.acsBluetooth.isScanning().getValue() !== false) {
        //     this.acsBluetooth.stopScanningForDevices();
        // } else {
        //     this.acsBluetooth.startScanningForDevices();
        // }
    }

    public startScan() {
       // this.acsBluetooth.startScanningForDevices();
    }

    public stopScan() {
       // this.acsBluetooth.stopScanningForDevices();
    }


    public  isScanning() {
       // return this.acsBluetooth.isScanning();
    }

    // public get scanResults(): Observable<BluetoothDeviceList> {
    //     return this.acsBluetooth.scanResultsObservable();
    // }
}