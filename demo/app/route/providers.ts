import {RouterExtensions} from "nativescript-angular";
import {Provider} from "@angular/core";
import {ACSBluetoothService} from "../lib/acs.bluetooth.service";
import {ACSBluetooth} from "acs-bluetooth";

/**
 * list of providers that are loaded once and should be available across the app
 */
export const mainProviders: Array<Provider> = [
    RouterExtensions,
    ACSBluetoothService,
    ACSBluetooth
];
