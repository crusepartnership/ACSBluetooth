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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBRTlFLGlEQUErQztBQUMvQywrRUFBMEU7QUFDMUUseUVBQXdEO0FBYXhELElBQWEsU0FBUztJQUF0QjtJQUF3QixDQUFDO0lBQUQsZ0JBQUM7QUFBRCxDQUFDLEFBQXpCLElBQXlCO0FBQVosU0FBUztJQVZyQixlQUFRLENBQUM7UUFDUixZQUFZLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO1FBQzVCLFNBQVMsRUFBRSxDQUFDLDRCQUFZLENBQUM7UUFDekIsT0FBTyxFQUFFLENBQUMsd0NBQWtCLENBQUM7UUFDN0IsU0FBUyxFQUFFO1lBQ1AsMkNBQW1CO1lBQ25CLHlDQUFZO1NBQ2Y7UUFDRCxPQUFPLEVBQUUsQ0FBQyx1QkFBZ0IsQ0FBQztLQUM1QixDQUFDO0dBQ1csU0FBUyxDQUFHO0FBQVosOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5pbXBvcnQge0FDU0JsdWV0b290aFNlcnZpY2V9IGZyb20gXCIuL2Fjcy1ibHVldG9vdGgvYWNlLmJsdWV0b290aC5zZXJ2aWNlXCI7XG5pbXBvcnQge0FDU0JsdWV0b290aH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hY3MtYmx1ZXRvb3RoXCI7XG5cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbQXBwQ29tcG9uZW50XSxcbiAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW05hdGl2ZVNjcmlwdE1vZHVsZV0sXG4gIHByb3ZpZGVyczogW1xuICAgICAgQUNTQmx1ZXRvb3RoU2VydmljZSxcbiAgICAgIEFDU0JsdWV0b290aFxuICBdLFxuICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV0sXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7fVxuIl19