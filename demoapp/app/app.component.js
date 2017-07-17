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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBZ0Q7QUFFaEQsMERBQTREO0FBQzVELDREQUdzQztBQUN0QywrRUFBMEU7QUFNMUUsSUFBYSxZQUFZO0lBTXJCLHNCQUFvQixtQkFBd0M7UUFBeEMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUpwRCxlQUFVLEdBQUcsRUFBRSxDQUFDO1FBRWhCLGdCQUFXLEdBQUcsZ0JBQWdCLENBQUM7UUFDL0IsZUFBVSxHQUFHLEtBQUssQ0FBQztJQUUzQixDQUFDO0lBRUQsK0JBQVEsR0FBUjtRQUFBLGlCQWtCQztRQWpCRyxJQUFJLENBQUMsWUFBWSxHQUFHLGFBQWEsQ0FBQztRQUVsQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FDMUMsVUFBQSxXQUFXO1lBQ1AsS0FBSSxDQUFDLFVBQVUsR0FBRyxXQUFXLENBQUM7UUFDbEMsQ0FBQyxDQUNKLENBQUM7UUFFRixXQUFXLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxnQ0FBa0IsQ0FBQywrQkFBK0IsRUFBRSxVQUFDLElBQWdEO1lBRXhILEVBQUUsQ0FBQSxDQUFDLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLENBQ2xELENBQUM7Z0JBQ0csS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3JCLENBQUM7WUFBQSxJQUFJLENBQUEsQ0FBQztnQkFDRixLQUFLLENBQUMsaUNBQWlDLENBQUMsQ0FBQztZQUM3QyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsaUNBQVUsR0FBVjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7UUFDbkQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDbEIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3BCLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDckIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3JCLENBQUM7SUFDTCxDQUFDO0lBRUQsZ0NBQVMsR0FBVCxVQUFVLElBQUk7UUFDVixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDaEMsRUFBRSxDQUFBLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNULElBQUksQ0FBQyxtQkFBbUIsQ0FBQyx1QkFBdUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM5RCxDQUFDO0lBQ0wsQ0FBQztJQUtPLGdDQUFTLEdBQWpCO1FBQ1EsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLG1CQUFtQixFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2pELElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN6QixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixJQUFJLENBQUMsbUJBQW1CLENBQUMseUJBQXlCLEVBQUUsQ0FBQyxJQUFJLENBQ3JEO1lBRUEsQ0FBQyxFQUNELFVBQUEsS0FBSztnQkFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLDRCQUE0QixDQUFDLENBQUM7WUFDOUMsQ0FBQyxDQUNKLENBQUE7UUFDTCxDQUFDO0lBQ1QsQ0FBQztJQUlPLG9DQUFhLEdBQXJCO1FBQ0ksRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN2QyxJQUFJLENBQUMsbUJBQW1CLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDeEMsQ0FBQztRQUNELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxXQUFXLEdBQUcsZUFBZSxDQUFDO1FBQ25DLElBQUksQ0FBQyxZQUFZLEdBQUcsYUFBYSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUN6QyxDQUFDO0lBSU8sK0JBQVEsR0FBaEI7UUFDSSxJQUFJLENBQUMsWUFBWSxHQUFHLGFBQWEsQ0FBQztRQUNsQyxJQUFJLENBQUMsV0FBVyxHQUFHLGdCQUFnQixDQUFDO1FBQ3BDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN4QyxDQUFDO0lBRUwsbUJBQUM7QUFBRCxDQUFDLEFBckZELElBcUZDO0FBckZZLFlBQVk7SUFKeEIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFdBQVcsRUFBRSxvQkFBb0I7S0FDcEMsQ0FBQztxQ0FPMkMsMkNBQW1CO0dBTm5ELFlBQVksQ0FxRnhCO0FBckZZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCAqIGFzIGFwcGxpY2F0aW9uIGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24nO1xuaW1wb3J0IHtcbiAgICBBbmRyb2lkQXBwbGljYXRpb24sIEFuZHJvaWRBY3Rpdml0eUJhY2tQcmVzc2VkRXZlbnREYXRhLFxuICAgIEFuZHJvaWRBY3Rpdml0eVJlcXVlc3RQZXJtaXNzaW9uc0V2ZW50RGF0YSxcbn0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIjtcbmltcG9ydCB7QUNTQmx1ZXRvb3RoU2VydmljZX0gZnJvbSBcIi4vYWNzLWJsdWV0b290aC9hY2UuYmx1ZXRvb3RoLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibXktYXBwXCIsXG4gICAgdGVtcGxhdGVVcmw6ICdhcHAuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgLy8gWW91ciBUeXBlU2NyaXB0IGxvZ2ljIGdvZXMgaGVyZVxuICAgIHByaXZhdGUgZGV2aWNlTGlzdCA9IFtdO1xuICAgIHByaXZhdGUgc2NhbkJ0blN0eWxlOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBzY2FuQnRuVGV4dCA9ICdTdGFydCBTY2FubmluZyc7XG4gICAgcHJpdmF0ZSBpc1NjYW5uaW5nID0gZmFsc2U7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhY3NCbHVldG9vdGhTZXJ2aWNlOiBBQ1NCbHVldG9vdGhTZXJ2aWNlKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuc2NhbkJ0blN0eWxlID0gJ2J0bi1wcmltYXJ5JztcblxuICAgICAgICB0aGlzLmFjc0JsdWV0b290aFNlcnZpY2Uuc2NhblJlc3VsdHMuc3Vic2NyaWJlKFxuICAgICAgICAgICAgc2NhblJlc3VsdHMgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZGV2aWNlTGlzdCA9IHNjYW5SZXN1bHRzO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuXG4gICAgICAgIGFwcGxpY2F0aW9uLmFuZHJvaWQub24oQW5kcm9pZEFwcGxpY2F0aW9uLmFjdGl2aXR5UmVxdWVzdFBlcm1pc3Npb25zRXZlbnQsIChkYXRhOiBBbmRyb2lkQWN0aXZpdHlSZXF1ZXN0UGVybWlzc2lvbnNFdmVudERhdGEpID0+IHtcblxuICAgICAgICAgICAgaWYodGhpcy5hY3NCbHVldG9vdGhTZXJ2aWNlLmlzUGVybWlzc2lvbkdyYW50ZWQoKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhbGVydCgnR3JhbnRlZCcpO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgYWxlcnQoJ0xvY2F0aW9uIHBlcm1pc3Npb24gbm90IGdyYW50ZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdG9nZ2xlU2NhbigpIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5hY3NCbHVldG9vdGhTZXJ2aWNlLmlzU2Nhbm5pbmcoKSk7XG4gICAgICAgIGlmICh0aGlzLmlzU2Nhbm5pbmcpIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcFNjYW4oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzdGFydCcpO1xuICAgICAgICAgICAgdGhpcy5zdGFydFNjYW4oKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uSXRlbVRhcChpdGVtKSB7XG4gICAgICAgIGxldCBhZGRyZXNzID0gaXRlbS5nZXRBZGRyZXNzKCk7XG4gICAgICAgIGlmKGFkZHJlc3MpIHtcbiAgICAgICAgICAgIHRoaXMuYWNzQmx1ZXRvb3RoU2VydmljZS5jb25uZWN0Qmx1ZXRvb3RoU2Nhbm5lcihhZGRyZXNzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN0YXJ0IHNjYW4gYmx1ZXRvb3RoIGRldmljZVxuICAgICAqL1xuICAgIHByaXZhdGUgc3RhcnRTY2FuKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuYWNzQmx1ZXRvb3RoU2VydmljZS5pc1Blcm1pc3Npb25HcmFudGVkKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNjYW5Gb3JEZXZpY2UoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3NCbHVldG9vdGhTZXJ2aWNlLnJlcXVlc3RMb2NhdGlvblBlcm1pc3Npb24oKS50aGVuKFxuICAgICAgICAgICAgICAgICAgICAoKSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1VuYWJsZSB0byBncmFudCBwZXJtaXNzaW9uJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE1ldGhvZCBmb3Igc2NhbiBuZXcgZGV2aWNlXG4gICAgICovXG4gICAgcHJpdmF0ZSBzY2FuRm9yRGV2aWNlKCkge1xuICAgICAgICBpZih0aGlzLmFjc0JsdWV0b290aFNlcnZpY2UuaXNTY2FubmluZygpKSB7XG4gICAgICAgICAgICB0aGlzLmFjc0JsdWV0b290aFNlcnZpY2Uuc3RvcFNjYW4oKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzU2Nhbm5pbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLnNjYW5CdG5UZXh0ID0gJ1N0b3AgU2Nhbm5pbmcnO1xuICAgICAgICB0aGlzLnNjYW5CdG5TdHlsZSA9ICdidG4td2FybmluZyc7XG4gICAgICAgIHRoaXMuYWNzQmx1ZXRvb3RoU2VydmljZS5zdGFydFNjYW4oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU3RvcCBzY2FuIGJsdWV0b290aCBkZXZpY2VcbiAgICAgKi9cbiAgICBwcml2YXRlIHN0b3BTY2FuKCkge1xuICAgICAgICB0aGlzLnNjYW5CdG5TdHlsZSA9ICdidG4tcHJpbWFyeSc7XG4gICAgICAgIHRoaXMuc2NhbkJ0blRleHQgPSAnU3RhcnQgU2Nhbm5pbmcnO1xuICAgICAgICB0aGlzLmlzU2Nhbm5pbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hY3NCbHVldG9vdGhTZXJ2aWNlLnN0b3BTY2FuKCk7XG4gICAgfVxuICAgIFxufSJdfQ==