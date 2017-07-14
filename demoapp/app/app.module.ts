import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppComponent } from "./app.component";
import {ACSBluetoothService} from "./acs-bluetooth/ace.bluetooth.service";
import {ACSBluetooth} from "nativescript-acs-bluetooth";


@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [NativeScriptModule],
  providers: [
      ACSBluetoothService,
      ACSBluetooth
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
