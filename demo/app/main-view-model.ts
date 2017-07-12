import { Observable } from 'tns-core-modules/data/observable';
import { ACSBluetooth } from 'nativescript-acs-bluetooth';

export class HelloWorldModel extends Observable {
  public message: string;
  private acsBluetooth: ACSBluetooth;

  constructor() {
    super();

    this.acsBluetooth = new ACSBluetooth();
    this.message = this.acsBluetooth.message;
    this.acsBluetooth.startScanningForDevices();
  }
}