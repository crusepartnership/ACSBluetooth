import {Component, OnInit} from "@angular/core";
import {RouterExtensions} from "nativescript-angular";

import {ACSBluetoothService} from "../lib/acs.bluetooth.service";
import {Observable} from "rxjs";

@Component({
    selector: "home",
    styleUrls: [],
    templateUrl: "home/home.component.html",
})
export class HomeComponent implements OnInit {
    private bluetoothScannerService: ACSBluetoothService;
    private foundDevices:any[];
    private scanningState:boolean;


    constructor(private routerExtensions: RouterExtensions, bluetoothScannerService: ACSBluetoothService){
        console.log("home constructor");
        this.bluetoothScannerService= bluetoothScannerService;
    }


    ngOnInit() {
        console.log("home ngOnInit");
        this.bluetoothScannerService.isScanning.subscribe((isScanning:boolean) => {this.scanningState = isScanning});
        this.bluetoothScannerService.scanResults.subscribe((scanResults:any[]) => {this.foundDevices = scanResults});
    }

    public testForDevice() {
        console.log("testing for bluetooth device");
        if (!this.isScanning) {
            this.toggleScan();
        }
    }

    public selectDevice(event) {
        this.bluetoothScannerService.selectDevice(event);
    }

    public toggleScan() {
        this.bluetoothScannerService.toggleScan();
    }

    public get isScanning(): boolean{
        return this.scanningState;
    }

    public get scanResults(): any[] {
        return this.foundDevices;
    }

}
