import {Component, OnInit} from "@angular/core";
import {Observable} from "rxjs";
import * as application from 'tns-core-modules/application';
import {
    AndroidApplication, AndroidActivityBackPressedEventData,
    AndroidActivityRequestPermissionsEventData,
} from "tns-core-modules/application";
import {ACSBluetoothService} from "./acs-bluetooth/ace.bluetooth.service";

@Component({
    selector: "my-app",
    templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
    // Your TypeScript logic goes here
    private deviceList = [];
    private scanBtnStyle: string;
    private scanBtnText = 'Start Scanning';
    private isScanning = false;
    constructor(private acsBluetoothService: ACSBluetoothService) {
    }

    ngOnInit() {
        this.scanBtnStyle = 'btn-primary';

        this.acsBluetoothService.scanResults.subscribe(
            scanResults => {
                this.deviceList = scanResults;
            }
        );

        application.android.on(AndroidApplication.activityRequestPermissionsEvent, (data: AndroidActivityRequestPermissionsEventData) => {

            if(this.acsBluetoothService.isPermissionGranted())
            {
                alert('Granted');
            }else{
                alert('Location permission not granted');
            }
        });
    }

    toggleScan() {
        console.log(this.acsBluetoothService.isScanning());
        if (this.isScanning) {
            this.stopScan();
        } else {
            console.log('start');
            this.startScan();
        }
    }

    onItemTap(item) {
        let address = item.getAddress();
        if(address) {
            this.acsBluetoothService.connectBluetoothScanner(address);
        }
    }

    /**
     * Start scan bluetooth device
     */
    private startScan() {
            if (this.acsBluetoothService.isPermissionGranted()) {
                this.scanForDevice();
            } else {
                this.acsBluetoothService.requestLocationPermission().then(
                    () => {

                    },
                    error => {
                        console.log('Unable to grant permission');
                    }
                )
            }
    }
    /**
     * Method for scan new device
     */
    private scanForDevice() {
        if(this.acsBluetoothService.isScanning()) {
            this.acsBluetoothService.stopScan();
        }
        this.isScanning = true;
        this.scanBtnText = 'Stop Scanning';
        this.scanBtnStyle = 'btn-warning';
        this.acsBluetoothService.startScan();
    }
    /**
     * Stop scan bluetooth device
     */
    private stopScan() {
        this.scanBtnStyle = 'btn-primary';
        this.scanBtnText = 'Start Scanning';
        this.isScanning = false;
        this.acsBluetoothService.stopScan();
    }
    
}