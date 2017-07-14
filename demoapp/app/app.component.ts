import { Component,OnInit } from "@angular/core";
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

  constructor(
      private acsBluetoothService: ACSBluetoothService
  ) {

  }
  ngOnInit() {
    this.scanBtnStyle = 'btn-primary';
  }

  toggleScan() {
    if(this.isScanning)
    {
      this.stopScan();
    }else{
      this.startScan();
    }
  }

  /**
   * Start scan bluetooth device
   */
  private startScan()
  {
    this.isScanning = true;
    this.scanBtnText = 'Stop Scanning';
    this.scanBtnStyle = 'btn-warning';
    //
    // if(this.acsBluetoothService.isScanning())
    // {
    //   this.acsBluetoothService.stopScan();
    // }
    // this.acsBluetoothService.startScan();
  }

  /**
   * Stop scan bluetooth device
   */
  private stopScan()
  {
    this.scanBtnStyle = 'btn-primary';
    this.scanBtnText = 'Start Scanning';
    this.isScanning = false;
   // this.acsBluetoothService.stopScan();
  }

}
