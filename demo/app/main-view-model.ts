import {Observable} from 'data/observable';
import {ACSBluetooth} from 'acs-bluetooth';

export class HelloWorldModel extends Observable {
  public message: string;
  private acsBluetooth: ACSBluetooth;

  constructor() {
    super();

    this.acsBluetooth = new ACSBluetooth();
    this.message = this.acsBluetooth.message;
  }
}
