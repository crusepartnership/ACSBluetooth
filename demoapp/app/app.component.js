"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var application = require("tns-core-modules/application");
var application_1 = require("tns-core-modules/application");
var ace_bluetooth_service_1 = require("./acs-bluetooth/ace.bluetooth.service");
var AppComponent = (function () {
    function AppComponent(acsBluetoothService) {
        this.acsBluetoothService = acsBluetoothService;
        this.deviceList = [];
        this.scanBtnText = 'Start Scanning';
        this.isScanning = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.scanBtnStyle = 'btn-primary';
        this.acsBluetoothService.scanResults.subscribe(function (scanResults) {
            _this.deviceList = scanResults;
        });
        this.acsBluetoothService.isReaderConnnected.subscribe(function (cardConnected) {
            console.log('connection status: ' + cardConnected);
        });
        this.acsBluetoothService.isCardTapping.subscribe(function (cardUid) {
            if (cardUid) {
                console.log('tap event');
            }
            else {
                console.log('nothing');
            }
        });
        application.android.on(application_1.AndroidApplication.activityRequestPermissionsEvent, function (data) {
            if (_this.acsBluetoothService.isPermissionGranted()) {
                alert('Granted');
            }
            else {
                alert('Location permission not granted');
            }
        });
    };
    AppComponent.prototype.toggleScan = function () {
        console.log(this.acsBluetoothService.isScanning());
        if (this.isScanning) {
            this.stopScan();
        }
        else {
            console.log('start');
            this.startScan();
        }
    };
    AppComponent.prototype.onItemTap = function (item) {
        var address = item.getAddress();
        if (address) {
            this.acsBluetoothService.connectBluetoothScanner(address);
            this.stopScan();
        }
    };
    AppComponent.prototype.startScan = function () {
        if (this.acsBluetoothService.isPermissionGranted()) {
            this.scanForDevice();
        }
        else {
            this.acsBluetoothService.requestLocationPermission().then(function () {
            }, function (error) {
                console.log('Unable to grant permission');
            });
        }
    };
    AppComponent.prototype.scanForDevice = function () {
        if (this.acsBluetoothService.isScanning()) {
            this.acsBluetoothService.stopScan();
        }
        this.isScanning = true;
        this.scanBtnText = 'Stop Scanning';
        this.scanBtnStyle = 'btn-warning';
        this.acsBluetoothService.startScan();
    };
    AppComponent.prototype.stopScan = function () {
        this.scanBtnStyle = 'btn-primary';
        this.scanBtnText = 'Start Scanning';
        this.isScanning = false;
        this.acsBluetoothService.stopScan();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBZ0Q7QUFFaEQsMERBQTREO0FBQzVELDREQUdzQztBQUN0QywrRUFBMEU7QUFNMUUsSUFBYSxZQUFZO0lBTXJCLHNCQUFvQixtQkFBd0M7UUFBeEMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUpwRCxlQUFVLEdBQUcsRUFBRSxDQUFDO1FBRWhCLGdCQUFXLEdBQUcsZ0JBQWdCLENBQUM7UUFDL0IsZUFBVSxHQUFHLEtBQUssQ0FBQztJQUUzQixDQUFDO0lBRUQsK0JBQVEsR0FBUjtRQUFBLGlCQWtDQztRQWpDRyxJQUFJLENBQUMsWUFBWSxHQUFHLGFBQWEsQ0FBQztRQUVsQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FDMUMsVUFBQSxXQUFXO1lBQ1AsS0FBSSxDQUFDLFVBQVUsR0FBRyxXQUFXLENBQUM7UUFDbEMsQ0FBQyxDQUNKLENBQUM7UUFFRixJQUFJLENBQUMsbUJBQW1CLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUNqRCxVQUFBLGFBQWE7WUFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixHQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3JELENBQUMsQ0FDSixDQUFDO1FBRUYsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQzVDLFVBQUEsT0FBTztZQUNKLEVBQUUsQ0FBQSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUM3QixDQUFDO1lBQUEsSUFBSSxDQUFDLENBQUM7Z0JBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUMzQixDQUFDO1FBQ0osQ0FBQyxDQUNKLENBQUM7UUFFRixXQUFXLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxnQ0FBa0IsQ0FBQywrQkFBK0IsRUFBRSxVQUFDLElBQWdEO1lBRXhILEVBQUUsQ0FBQSxDQUFDLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLENBQ2xELENBQUM7Z0JBQ0csS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3JCLENBQUM7WUFBQSxJQUFJLENBQUEsQ0FBQztnQkFDRixLQUFLLENBQUMsaUNBQWlDLENBQUMsQ0FBQztZQUM3QyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsaUNBQVUsR0FBVjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7UUFDbkQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDbEIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3BCLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDckIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3JCLENBQUM7SUFDTCxDQUFDO0lBRUQsZ0NBQVMsR0FBVCxVQUFVLElBQUk7UUFDVixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDaEMsRUFBRSxDQUFBLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNULElBQUksQ0FBQyxtQkFBbUIsQ0FBQyx1QkFBdUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUMxRCxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDcEIsQ0FBQztJQUNMLENBQUM7SUFLTyxnQ0FBUyxHQUFqQjtRQUNRLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNqRCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDekIsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osSUFBSSxDQUFDLG1CQUFtQixDQUFDLHlCQUF5QixFQUFFLENBQUMsSUFBSSxDQUNyRDtZQUVBLENBQUMsRUFDRCxVQUFBLEtBQUs7Z0JBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1lBQzlDLENBQUMsQ0FDSixDQUFBO1FBQ0wsQ0FBQztJQUNULENBQUM7SUFJTyxvQ0FBYSxHQUFyQjtRQUNJLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDdkMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3hDLENBQUM7UUFDRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsV0FBVyxHQUFHLGVBQWUsQ0FBQztRQUNuQyxJQUFJLENBQUMsWUFBWSxHQUFHLGFBQWEsQ0FBQztRQUNsQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDekMsQ0FBQztJQUlPLCtCQUFRLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLFlBQVksR0FBRyxhQUFhLENBQUM7UUFDbEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxnQkFBZ0IsQ0FBQztRQUNwQyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsbUJBQW1CLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDeEMsQ0FBQztJQUVMLG1CQUFDO0FBQUQsQ0FBQyxBQXRHRCxJQXNHQztBQXRHWSxZQUFZO0lBSnhCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsUUFBUTtRQUNsQixXQUFXLEVBQUUsb0JBQW9CO0tBQ3BDLENBQUM7cUNBTzJDLDJDQUFtQjtHQU5uRCxZQUFZLENBc0d4QjtBQXRHWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgKiBhcyBhcHBsaWNhdGlvbiBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uJztcbmltcG9ydCB7XG4gICAgQW5kcm9pZEFwcGxpY2F0aW9uLCBBbmRyb2lkQWN0aXZpdHlCYWNrUHJlc3NlZEV2ZW50RGF0YSxcbiAgICBBbmRyb2lkQWN0aXZpdHlSZXF1ZXN0UGVybWlzc2lvbnNFdmVudERhdGEsXG59IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCI7XG5pbXBvcnQge0FDU0JsdWV0b290aFNlcnZpY2V9IGZyb20gXCIuL2Fjcy1ibHVldG9vdGgvYWNlLmJsdWV0b290aC5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxuICAgIHRlbXBsYXRlVXJsOiAnYXBwLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIC8vIFlvdXIgVHlwZVNjcmlwdCBsb2dpYyBnb2VzIGhlcmVcbiAgICBwcml2YXRlIGRldmljZUxpc3QgPSBbXTtcbiAgICBwcml2YXRlIHNjYW5CdG5TdHlsZTogc3RyaW5nO1xuICAgIHByaXZhdGUgc2NhbkJ0blRleHQgPSAnU3RhcnQgU2Nhbm5pbmcnO1xuICAgIHByaXZhdGUgaXNTY2FubmluZyA9IGZhbHNlO1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYWNzQmx1ZXRvb3RoU2VydmljZTogQUNTQmx1ZXRvb3RoU2VydmljZSkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnNjYW5CdG5TdHlsZSA9ICdidG4tcHJpbWFyeSc7XG5cbiAgICAgICAgdGhpcy5hY3NCbHVldG9vdGhTZXJ2aWNlLnNjYW5SZXN1bHRzLnN1YnNjcmliZShcbiAgICAgICAgICAgIHNjYW5SZXN1bHRzID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmRldmljZUxpc3QgPSBzY2FuUmVzdWx0cztcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLmFjc0JsdWV0b290aFNlcnZpY2UuaXNSZWFkZXJDb25ubmVjdGVkLnN1YnNjcmliZShcbiAgICAgICAgICAgIGNhcmRDb25uZWN0ZWQgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjb25uZWN0aW9uIHN0YXR1czogJytjYXJkQ29ubmVjdGVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLmFjc0JsdWV0b290aFNlcnZpY2UuaXNDYXJkVGFwcGluZy5zdWJzY3JpYmUoXG4gICAgICAgICAgICBjYXJkVWlkID0+IHtcbiAgICAgICAgICAgICAgIGlmKGNhcmRVaWQpIHtcbiAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndGFwIGV2ZW50Jyk7XG4gICAgICAgICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ25vdGhpbmcnKTtcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcblxuICAgICAgICBhcHBsaWNhdGlvbi5hbmRyb2lkLm9uKEFuZHJvaWRBcHBsaWNhdGlvbi5hY3Rpdml0eVJlcXVlc3RQZXJtaXNzaW9uc0V2ZW50LCAoZGF0YTogQW5kcm9pZEFjdGl2aXR5UmVxdWVzdFBlcm1pc3Npb25zRXZlbnREYXRhKSA9PiB7XG5cbiAgICAgICAgICAgIGlmKHRoaXMuYWNzQmx1ZXRvb3RoU2VydmljZS5pc1Blcm1pc3Npb25HcmFudGVkKCkpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYWxlcnQoJ0dyYW50ZWQnKTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGFsZXJ0KCdMb2NhdGlvbiBwZXJtaXNzaW9uIG5vdCBncmFudGVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHRvZ2dsZVNjYW4oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuYWNzQmx1ZXRvb3RoU2VydmljZS5pc1NjYW5uaW5nKCkpO1xuICAgICAgICBpZiAodGhpcy5pc1NjYW5uaW5nKSB7XG4gICAgICAgICAgICB0aGlzLnN0b3BTY2FuKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc3RhcnQnKTtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRTY2FuKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkl0ZW1UYXAoaXRlbSkge1xuICAgICAgICBsZXQgYWRkcmVzcyA9IGl0ZW0uZ2V0QWRkcmVzcygpO1xuICAgICAgICBpZihhZGRyZXNzKSB7XG4gICAgICAgICAgICB0aGlzLmFjc0JsdWV0b290aFNlcnZpY2UuY29ubmVjdEJsdWV0b290aFNjYW5uZXIoYWRkcmVzcyk7XG4gICAgICAgICAgICB0aGlzLnN0b3BTY2FuKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTdGFydCBzY2FuIGJsdWV0b290aCBkZXZpY2VcbiAgICAgKi9cbiAgICBwcml2YXRlIHN0YXJ0U2NhbigpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmFjc0JsdWV0b290aFNlcnZpY2UuaXNQZXJtaXNzaW9uR3JhbnRlZCgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zY2FuRm9yRGV2aWNlKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuYWNzQmx1ZXRvb3RoU2VydmljZS5yZXF1ZXN0TG9jYXRpb25QZXJtaXNzaW9uKCkudGhlbihcbiAgICAgICAgICAgICAgICAgICAgKCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdVbmFibGUgdG8gZ3JhbnQgcGVybWlzc2lvbicpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBNZXRob2QgZm9yIHNjYW4gbmV3IGRldmljZVxuICAgICAqL1xuICAgIHByaXZhdGUgc2NhbkZvckRldmljZSgpIHtcbiAgICAgICAgaWYodGhpcy5hY3NCbHVldG9vdGhTZXJ2aWNlLmlzU2Nhbm5pbmcoKSkge1xuICAgICAgICAgICAgdGhpcy5hY3NCbHVldG9vdGhTZXJ2aWNlLnN0b3BTY2FuKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc1NjYW5uaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zY2FuQnRuVGV4dCA9ICdTdG9wIFNjYW5uaW5nJztcbiAgICAgICAgdGhpcy5zY2FuQnRuU3R5bGUgPSAnYnRuLXdhcm5pbmcnO1xuICAgICAgICB0aGlzLmFjc0JsdWV0b290aFNlcnZpY2Uuc3RhcnRTY2FuKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFN0b3Agc2NhbiBibHVldG9vdGggZGV2aWNlXG4gICAgICovXG4gICAgcHJpdmF0ZSBzdG9wU2NhbigpIHtcbiAgICAgICAgdGhpcy5zY2FuQnRuU3R5bGUgPSAnYnRuLXByaW1hcnknO1xuICAgICAgICB0aGlzLnNjYW5CdG5UZXh0ID0gJ1N0YXJ0IFNjYW5uaW5nJztcbiAgICAgICAgdGhpcy5pc1NjYW5uaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYWNzQmx1ZXRvb3RoU2VydmljZS5zdG9wU2NhbigpO1xuICAgIH1cblxufSJdfQ==