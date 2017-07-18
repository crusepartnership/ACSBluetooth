"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_acs_bluetooth_1 = require("nativescript-acs-bluetooth");
var ACSBluetoothService = (function () {
    function ACSBluetoothService(acsBluetooth) {
        this.acsBluetooth = acsBluetooth;
        this.connected = false;
        console.log("ACS Bluetooth Service: starting up");
    }
    ACSBluetoothService.prototype.selectDevice = function (event) {
        console.log("ACS Bluetooth Service: selectDevice " + JSON.stringify(event));
        this.bluetoothDevice = { address: '20:91:48:5B:62:2E' };
    };
    ACSBluetoothService.prototype.isConnected = function () {
        return this.connected;
    };
    ACSBluetoothService.prototype.disconnectBluetoothScanner = function () {
        this.connected = false;
    };
    ACSBluetoothService.prototype.connectBluetoothScanner = function (address) {
        this.bluetoothDevice = {
            address: address
        };
        this.acsBluetooth.connect(this.bluetoothDevice);
        this.connected = true;
    };
    ACSBluetoothService.prototype.getConnectToDevice = function () {
        return this.bluetoothDevice;
    };
    ACSBluetoothService.prototype.toggleScan = function () {
    };
    ACSBluetoothService.prototype.isPermissionGranted = function () {
        return this.acsBluetooth.isPermissionGranted();
    };
    ACSBluetoothService.prototype.requestLocationPermission = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.acsBluetooth.requestCoarseLocationPermission();
            resolve();
        });
    };
    ACSBluetoothService.prototype.startScan = function () {
        this.acsBluetooth.startScanningForDevices();
    };
    ACSBluetoothService.prototype.stopScan = function () {
        this.acsBluetooth.stopScanningForDevices();
    };
    ACSBluetoothService.prototype.isScanning = function () {
        return this.acsBluetooth.isScanning().getValue();
    };
    Object.defineProperty(ACSBluetoothService.prototype, "scanResults", {
        get: function () {
            return this.acsBluetooth.scanResultsObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ACSBluetoothService.prototype, "isReaderConnnected", {
        get: function () {
            return this.acsBluetooth.isReaderConnnected();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ACSBluetoothService.prototype, "isCardTapping", {
        get: function () {
            return this.acsBluetooth.getCardUid();
        },
        enumerable: true,
        configurable: true
    });
    return ACSBluetoothService;
}());
ACSBluetoothService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [nativescript_acs_bluetooth_1.ACSBluetooth])
], ACSBluetoothService);
exports.ACSBluetoothService = ACSBluetoothService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNlLmJsdWV0b290aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWNlLmJsdWV0b290aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBRXpDLHlFQUF3RDtBQUt4RCxJQUFhLG1CQUFtQjtJQUc1Qiw2QkFDWSxZQUEwQjtRQUExQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUg5QixjQUFTLEdBQVksS0FBSyxDQUFDO1FBSy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0NBQW9DLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRU0sMENBQVksR0FBbkIsVUFBb0IsS0FBSztRQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLHlDQUF1QyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBRyxDQUFDLENBQUM7UUFDeEUsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFDLE9BQU8sRUFBRSxtQkFBbUIsRUFBQyxDQUFDO0lBQzlELENBQUM7SUFNTSx5Q0FBVyxHQUFsQjtRQUVJLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7SUFLTSx3REFBMEIsR0FBakM7UUFFSSxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUMzQixDQUFDO0lBTU0scURBQXVCLEdBQTlCLFVBQStCLE9BQU87UUFFbEMsSUFBSSxDQUFDLGVBQWUsR0FBRztZQUNuQixPQUFPLEVBQUUsT0FBTztTQUNuQixDQUFDO1FBRUYsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0lBQzFCLENBQUM7SUFFTSxnREFBa0IsR0FBekI7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUNoQyxDQUFDO0lBRU0sd0NBQVUsR0FBakI7SUFNQSxDQUFDO0lBRU0saURBQW1CLEdBQTFCO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUNuRCxDQUFDO0lBRU0sdURBQXlCLEdBQWhDO1FBQUEsaUJBVUM7UUFQRyxNQUFNLENBQUMsSUFBSSxPQUFPLENBQ2QsVUFBQyxPQUFPLEVBQUMsTUFBTTtZQUNYLEtBQUksQ0FBQyxZQUFZLENBQUMsK0JBQStCLEVBQUUsQ0FBQztZQUNwRCxPQUFPLEVBQUUsQ0FBQztRQUNkLENBQUMsQ0FDSixDQUFBO0lBRUwsQ0FBQztJQUVNLHVDQUFTLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLFlBQVksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO0lBQ2hELENBQUM7SUFFTSxzQ0FBUSxHQUFmO1FBQ0ksSUFBSSxDQUFDLFlBQVksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO0lBQy9DLENBQUM7SUFHTyx3Q0FBVSxHQUFsQjtRQUNHLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3BELENBQUM7SUFFRCxzQkFBVyw0Q0FBVzthQUF0QjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFDckQsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVyxtREFBa0I7YUFBN0I7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQ2xELENBQUM7OztPQUFBO0lBRUQsc0JBQVcsOENBQWE7YUFBeEI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUMxQyxDQUFDOzs7T0FBQTtJQUNMLDBCQUFDO0FBQUQsQ0FBQyxBQWpHRCxJQWlHQztBQWpHWSxtQkFBbUI7SUFEL0IsaUJBQVUsRUFBRTtxQ0FLaUIseUNBQVk7R0FKN0IsbUJBQW1CLENBaUcvQjtBQWpHWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQge0FDU0JsdWV0b290aH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hY3MtYmx1ZXRvb3RoXCI7XG5cblxuLy90b2RvIGNvbnNpZGVyIHJlbW92ZWluZyB0aGlzIHNlcnZpY2VcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBQ1NCbHVldG9vdGhTZXJ2aWNlIHtcbiAgICBwcml2YXRlIGNvbm5lY3RlZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgYmx1ZXRvb3RoRGV2aWNlIDogQmx1ZXRvb3RoRGV2aWNlO1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGFjc0JsdWV0b290aDogQUNTQmx1ZXRvb3RoXG4gICAgKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQUNTIEJsdWV0b290aCBTZXJ2aWNlOiBzdGFydGluZyB1cFwiKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2VsZWN0RGV2aWNlKGV2ZW50KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBBQ1MgQmx1ZXRvb3RoIFNlcnZpY2U6IHNlbGVjdERldmljZSAke0pTT04uc3RyaW5naWZ5KGV2ZW50KX1gKTtcbiAgICAgICAgICAgIHRoaXMuYmx1ZXRvb3RoRGV2aWNlID0ge2FkZHJlc3M6ICcyMDo5MTo0ODo1Qjo2MjoyRSd9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIGJsdWV0b290aCBkZWl2Y2UgaGFzIGJlZW4gY29ubmVjdGVkXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgcHVibGljIGlzQ29ubmVjdGVkKClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbm5lY3RlZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEaXNjb25uZWN0IGEgYmx1ZXRvb3RoIGRldmljZVxuICAgICAqL1xuICAgIHB1YmxpYyBkaXNjb25uZWN0Qmx1ZXRvb3RoU2Nhbm5lcigpXG4gICAge1xuICAgICAgICB0aGlzLmNvbm5lY3RlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbm5lY3QgdG8gYSBkZXZpY2VcbiAgICAgKiBAcGFyYW0gYWRkcmVzc1xuICAgICAqL1xuICAgIHB1YmxpYyBjb25uZWN0Qmx1ZXRvb3RoU2Nhbm5lcihhZGRyZXNzKVxuICAgIHtcbiAgICAgICAgdGhpcy5ibHVldG9vdGhEZXZpY2UgPSB7XG4gICAgICAgICAgICBhZGRyZXNzOiBhZGRyZXNzXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5hY3NCbHVldG9vdGguY29ubmVjdCh0aGlzLmJsdWV0b290aERldmljZSk7XG4gICAgICAgIHRoaXMuY29ubmVjdGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0Q29ubmVjdFRvRGV2aWNlKCk6IGFueSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJsdWV0b290aERldmljZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9nZ2xlU2NhbigpIHtcbiAgICAgICAgLy8gaWYgKHRoaXMuYWNzQmx1ZXRvb3RoLmlzU2Nhbm5pbmcoKS5nZXRWYWx1ZSgpICE9PSBmYWxzZSkge1xuICAgICAgICAvLyAgICAgdGhpcy5hY3NCbHVldG9vdGguc3RvcFNjYW5uaW5nRm9yRGV2aWNlcygpO1xuICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAvLyAgICAgdGhpcy5hY3NCbHVldG9vdGguc3RhcnRTY2FubmluZ0ZvckRldmljZXMoKTtcbiAgICAgICAgLy8gfVxuICAgIH1cblxuICAgIHB1YmxpYyBpc1Blcm1pc3Npb25HcmFudGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hY3NCbHVldG9vdGguaXNQZXJtaXNzaW9uR3JhbnRlZCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZXF1ZXN0TG9jYXRpb25QZXJtaXNzaW9uKCkge1xuICAgICAgICAvL3JldHVybiB0aGlzLmFjc0JsdWV0b290aC5yZXF1ZXN0Q29hcnNlTG9jYXRpb25QZXJtaXNzaW9uKCk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlIChcbiAgICAgICAgICAgIChyZXNvbHZlLHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYWNzQmx1ZXRvb3RoLnJlcXVlc3RDb2Fyc2VMb2NhdGlvblBlcm1pc3Npb24oKTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIClcblxuICAgIH1cblxuICAgIHB1YmxpYyBzdGFydFNjYW4oKSB7XG4gICAgICAgIHRoaXMuYWNzQmx1ZXRvb3RoLnN0YXJ0U2Nhbm5pbmdGb3JEZXZpY2VzKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0b3BTY2FuKCkge1xuICAgICAgICB0aGlzLmFjc0JsdWV0b290aC5zdG9wU2Nhbm5pbmdGb3JEZXZpY2VzKCk7XG4gICAgfVxuXG5cbiAgICBwdWJsaWMgIGlzU2Nhbm5pbmcoKSB7XG4gICAgICAgcmV0dXJuIHRoaXMuYWNzQmx1ZXRvb3RoLmlzU2Nhbm5pbmcoKS5nZXRWYWx1ZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgc2NhblJlc3VsdHMoKTogT2JzZXJ2YWJsZTxhbnlbXT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5hY3NCbHVldG9vdGguc2NhblJlc3VsdHNPYnNlcnZhYmxlKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBpc1JlYWRlckNvbm5uZWN0ZWQoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmFjc0JsdWV0b290aC5pc1JlYWRlckNvbm5uZWN0ZWQoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGlzQ2FyZFRhcHBpbmcoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWNzQmx1ZXRvb3RoLmdldENhcmRVaWQoKTtcbiAgICB9XG59Il19