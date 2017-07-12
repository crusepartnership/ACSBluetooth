import {NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import {NativeScriptModule} from "nativescript-angular/nativescript.module";

import {HomeComponent} from "./home.component";

@NgModule({
    declarations: [HomeComponent],
    bootstrap: [HomeComponent],
    imports: [NativeScriptModule],
    schemas: [NO_ERRORS_SCHEMA],
})
export class HomeModule {
}
