import {NgModule, NO_ERRORS_SCHEMA} from "@angular/core";

import {RouteComponent} from "./route.component";
import {NativeScriptRouterModule} from "nativescript-angular";
import {routes} from "./routes";
import {mainProviders} from "./providers";

@NgModule({
    declarations: [RouteComponent],
    bootstrap: [RouteComponent],
    imports: [
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(routes),
    ],
    providers: [mainProviders],
    schemas: [NO_ERRORS_SCHEMA],
    exports: [NativeScriptRouterModule]
})
export class RouteModule {
}
