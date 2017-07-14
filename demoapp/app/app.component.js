"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ace_bluetooth_service_1 = require("./acs-bluetooth/ace.bluetooth.service");
var AppComponent = (function () {
    function AppComponent(acsBluetoothService) {
        this.acsBluetoothService = acsBluetoothService;
        // Your TypeScript logic goes here
        this.deviceList = [];
        this.scanBtnText = 'Start Scanning';
        this.isScanning = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.scanBtnStyle = 'btn-primary';
    };
    AppComponent.prototype.toggleScan = function () {
        if (this.isScanning) {
            this.stopScan();
        }
        else {
            this.startScan();
        }
    };
    /**
     * Start scan bluetooth device
     */
    AppComponent.prototype.startScan = function () {
        this.isScanning = true;
        this.scanBtnText = 'Stop Scanning';
        this.scanBtnStyle = 'btn-warning';
        //
        // if(this.acsBluetoothService.isScanning())
        // {
        //   this.acsBluetoothService.stopScan();
        // }
        // this.acsBluetoothService.startScan();
    };
    /**
     * Stop scan bluetooth device
     */
    AppComponent.prototype.stopScan = function () {
        this.scanBtnStyle = 'btn-primary';
        this.scanBtnText = 'Start Scanning';
        this.isScanning = false;
        // this.acsBluetoothService.stopScan();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        templateUrl: 'app.component.html'
    }),
    __metadata("design:paramtypes", [ace_bluetooth_service_1.ACSBluetoothService])
], AppComponent);
exports.AppComponent = AppComponent;
