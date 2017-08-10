import { Observable } from 'tns-core-modules/data/observable';
import { ACSBluetooth } from 'nativescript-acs-bluetooth';

export class HelloWorldModel extends Observable {
  public message: string;
  private acsBluetooth: ACSBluetooth;
  private deviceList = [];
  constructor() {
    super();

    this.acsBluetooth = new ACSBluetooth();
    this.message = this.acsBluetooth.message;
    this.acsBluetooth.scanResultsObservable().subscribe((scanResults:any[]) => {this.deviceList = scanResults});
  }

  toggle() {
    this.deviceList.push('1');
    if (this.acsBluetooth.isScanning().getValue() !== false)
    {
      this.acsBluetooth.stopScanningForDevices();
    }else{
      this.acsBluetooth.startScanningForDevices();
    }

  }

}