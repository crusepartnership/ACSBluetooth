"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var app_component_1 = require("./app.component");
var ace_bluetooth_service_1 = require("./acs-bluetooth/ace.bluetooth.service");
var nativescript_acs_bluetooth_1 = require("nativescript-acs-bluetooth");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [app_component_1.AppComponent],
        bootstrap: [app_component_1.AppComponent],
        imports: [nativescript_module_1.NativeScriptModule],
        providers: [
            ace_bluetooth_service_1.ACSBluetoothService,
            nativescript_acs_bluetooth_1.ACSBluetooth
        ],
        schemas: [core_1.NO_ERRORS_SCHEMA],
    })
], AppModule);
exports.AppModule = AppModule;
