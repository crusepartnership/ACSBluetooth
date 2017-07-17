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
    return ACSBluetoothService;
}());
ACSBluetoothService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [nativescript_acs_bluetooth_1.ACSBluetooth])
], ACSBluetoothService);
exports.ACSBluetoothService = ACSBluetoothService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNlLmJsdWV0b290aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWNlLmJsdWV0b290aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBRXpDLHlFQUF3RDtBQUt4RCxJQUFhLG1CQUFtQjtJQUc1Qiw2QkFDWSxZQUEwQjtRQUExQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUg5QixjQUFTLEdBQVksS0FBSyxDQUFDO1FBSy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0NBQW9DLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRU0sMENBQVksR0FBbkIsVUFBb0IsS0FBSztRQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLHlDQUF1QyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBRyxDQUFDLENBQUM7UUFDeEUsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFDLE9BQU8sRUFBRSxtQkFBbUIsRUFBQyxDQUFDO0lBQzlELENBQUM7SUFNTSx5Q0FBVyxHQUFsQjtRQUVJLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7SUFLTSx3REFBMEIsR0FBakM7UUFFSSxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUMzQixDQUFDO0lBTU0scURBQXVCLEdBQTlCLFVBQStCLE9BQU87UUFFbEMsSUFBSSxDQUFDLGVBQWUsR0FBRztZQUNuQixPQUFPLEVBQUUsT0FBTztTQUNuQixDQUFDO1FBRUYsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0lBQzFCLENBQUM7SUFFTSxnREFBa0IsR0FBekI7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUNoQyxDQUFDO0lBRU0sd0NBQVUsR0FBakI7SUFNQSxDQUFDO0lBRU0saURBQW1CLEdBQTFCO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUNuRCxDQUFDO0lBRU0sdURBQXlCLEdBQWhDO1FBQUEsaUJBVUM7UUFQRyxNQUFNLENBQUMsSUFBSSxPQUFPLENBQ2QsVUFBQyxPQUFPLEVBQUMsTUFBTTtZQUNYLEtBQUksQ0FBQyxZQUFZLENBQUMsK0JBQStCLEVBQUUsQ0FBQztZQUNwRCxPQUFPLEVBQUUsQ0FBQztRQUNkLENBQUMsQ0FDSixDQUFBO0lBRUwsQ0FBQztJQUVNLHVDQUFTLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLFlBQVksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO0lBQ2hELENBQUM7SUFFTSxzQ0FBUSxHQUFmO1FBQ0ksSUFBSSxDQUFDLFlBQVksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO0lBQy9DLENBQUM7SUFHTyx3Q0FBVSxHQUFsQjtRQUNHLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3BELENBQUM7SUFFRCxzQkFBVyw0Q0FBVzthQUF0QjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFDckQsQ0FBQzs7O09BQUE7SUFDTCwwQkFBQztBQUFELENBQUMsQUF6RkQsSUF5RkM7QUF6RlksbUJBQW1CO0lBRC9CLGlCQUFVLEVBQUU7cUNBS2lCLHlDQUFZO0dBSjdCLG1CQUFtQixDQXlGL0I7QUF6Rlksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHtBQ1NCbHVldG9vdGh9IGZyb20gXCJuYXRpdmVzY3JpcHQtYWNzLWJsdWV0b290aFwiO1xuXG5cbi8vdG9kbyBjb25zaWRlciByZW1vdmVpbmcgdGhpcyBzZXJ2aWNlXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQUNTQmx1ZXRvb3RoU2VydmljZSB7XG4gICAgcHJpdmF0ZSBjb25uZWN0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIGJsdWV0b290aERldmljZSA6IEJsdWV0b290aERldmljZTtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBhY3NCbHVldG9vdGg6IEFDU0JsdWV0b290aFxuICAgICkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkFDUyBCbHVldG9vdGggU2VydmljZTogc3RhcnRpbmcgdXBcIik7XG4gICAgfVxuXG4gICAgcHVibGljIHNlbGVjdERldmljZShldmVudCkge1xuICAgICAgICBjb25zb2xlLmxvZyhgQUNTIEJsdWV0b290aCBTZXJ2aWNlOiBzZWxlY3REZXZpY2UgJHtKU09OLnN0cmluZ2lmeShldmVudCl9YCk7XG4gICAgICAgICAgICB0aGlzLmJsdWV0b290aERldmljZSA9IHthZGRyZXNzOiAnMjA6OTE6NDg6NUI6NjI6MkUnfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiBibHVldG9vdGggZGVpdmNlIGhhcyBiZWVuIGNvbm5lY3RlZFxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIHB1YmxpYyBpc0Nvbm5lY3RlZCgpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5jb25uZWN0ZWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGlzY29ubmVjdCBhIGJsdWV0b290aCBkZXZpY2VcbiAgICAgKi9cbiAgICBwdWJsaWMgZGlzY29ubmVjdEJsdWV0b290aFNjYW5uZXIoKVxuICAgIHtcbiAgICAgICAgdGhpcy5jb25uZWN0ZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb25uZWN0IHRvIGEgZGV2aWNlXG4gICAgICogQHBhcmFtIGFkZHJlc3NcbiAgICAgKi9cbiAgICBwdWJsaWMgY29ubmVjdEJsdWV0b290aFNjYW5uZXIoYWRkcmVzcylcbiAgICB7XG4gICAgICAgIHRoaXMuYmx1ZXRvb3RoRGV2aWNlID0ge1xuICAgICAgICAgICAgYWRkcmVzczogYWRkcmVzc1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuYWNzQmx1ZXRvb3RoLmNvbm5lY3QodGhpcy5ibHVldG9vdGhEZXZpY2UpO1xuICAgICAgICB0aGlzLmNvbm5lY3RlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldENvbm5lY3RUb0RldmljZSgpOiBhbnkge1xuICAgICAgICByZXR1cm4gdGhpcy5ibHVldG9vdGhEZXZpY2U7XG4gICAgfVxuXG4gICAgcHVibGljIHRvZ2dsZVNjYW4oKSB7XG4gICAgICAgIC8vIGlmICh0aGlzLmFjc0JsdWV0b290aC5pc1NjYW5uaW5nKCkuZ2V0VmFsdWUoKSAhPT0gZmFsc2UpIHtcbiAgICAgICAgLy8gICAgIHRoaXMuYWNzQmx1ZXRvb3RoLnN0b3BTY2FubmluZ0ZvckRldmljZXMoKTtcbiAgICAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgLy8gICAgIHRoaXMuYWNzQmx1ZXRvb3RoLnN0YXJ0U2Nhbm5pbmdGb3JEZXZpY2VzKCk7XG4gICAgICAgIC8vIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgaXNQZXJtaXNzaW9uR3JhbnRlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWNzQmx1ZXRvb3RoLmlzUGVybWlzc2lvbkdyYW50ZWQoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVxdWVzdExvY2F0aW9uUGVybWlzc2lvbigpIHtcbiAgICAgICAgLy9yZXR1cm4gdGhpcy5hY3NCbHVldG9vdGgucmVxdWVzdENvYXJzZUxvY2F0aW9uUGVybWlzc2lvbigpO1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSAoXG4gICAgICAgICAgICAocmVzb2x2ZSxyZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmFjc0JsdWV0b290aC5yZXF1ZXN0Q29hcnNlTG9jYXRpb25QZXJtaXNzaW9uKCk7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICApXG5cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhcnRTY2FuKCkge1xuICAgICAgICB0aGlzLmFjc0JsdWV0b290aC5zdGFydFNjYW5uaW5nRm9yRGV2aWNlcygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdG9wU2NhbigpIHtcbiAgICAgICAgdGhpcy5hY3NCbHVldG9vdGguc3RvcFNjYW5uaW5nRm9yRGV2aWNlcygpO1xuICAgIH1cblxuXG4gICAgcHVibGljICBpc1NjYW5uaW5nKCkge1xuICAgICAgIHJldHVybiB0aGlzLmFjc0JsdWV0b290aC5pc1NjYW5uaW5nKCkuZ2V0VmFsdWUoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHNjYW5SZXN1bHRzKCk6IE9ic2VydmFibGU8YW55W10+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWNzQmx1ZXRvb3RoLnNjYW5SZXN1bHRzT2JzZXJ2YWJsZSgpO1xuICAgIH1cbn0iXX0=