// this import should be first in order to load some required settings (like globals and reflect-metadata)
import {platformNativeScriptDynamic} from "nativescript-angular/platform";

// External Modules
import {NativeScriptRouterModule} from "nativescript-angular/router";
import {NativeScriptFormsModule} from "nativescript-angular";
import {NativeScriptModule} from "nativescript-angular/nativescript.module";
import {NgModule} from "@angular/core";

// Internal Modules
import {routableComponents} from "./route/routes";
import {RouteComponent} from "./route/route.component";
import {RouteModule} from "./route/route.module";

// Root/Main module: this is where the app is run from
@NgModule({
    declarations: [routableComponents],
    bootstrap: [RouteComponent],
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        RouteModule
    ]
})
export class AppModule {}


// bootstrap the app
platformNativeScriptDynamic({bootInExistingPage: false, cssFile: "app.css"}).bootstrapModule(AppModule);
