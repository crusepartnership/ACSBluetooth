"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ace_bluetooth_service_1 = require("./acs-bluetooth/ace.bluetooth.service");
var AppComponent = (function () {
    function AppComponent(acsBluetoothService) {
        this.acsBluetoothService = acsBluetoothService;
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
    AppComponent.prototype.startScan = function () {
        this.isScanning = true;
        this.scanBtnText = 'Stop Scanning';
        this.scanBtnStyle = 'btn-warning';
        this.acsBluetoothService.startScan();
    };
    AppComponent.prototype.stopScan = function () {
        this.scanBtnStyle = 'btn-primary';
        this.scanBtnText = 'Start Scanning';
        this.isScanning = false;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBaUQ7QUFDakQsK0VBQTBFO0FBTTFFLElBQWEsWUFBWTtJQU92QixzQkFDWSxtQkFBd0M7UUFBeEMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQU41QyxlQUFVLEdBQUcsRUFBRSxDQUFDO1FBRWhCLGdCQUFXLEdBQUcsZ0JBQWdCLENBQUM7UUFDL0IsZUFBVSxHQUFHLEtBQUssQ0FBQztJQUszQixDQUFDO0lBQ0QsK0JBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxZQUFZLEdBQUcsYUFBYSxDQUFDO0lBQ3BDLENBQUM7SUFFRCxpQ0FBVSxHQUFWO1FBQ0UsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUNuQixDQUFDO1lBQ0MsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2xCLENBQUM7UUFBQSxJQUFJLENBQUEsQ0FBQztZQUNKLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNuQixDQUFDO0lBQ0gsQ0FBQztJQUtPLGdDQUFTLEdBQWpCO1FBRUUsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDdkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxlQUFlLENBQUM7UUFDbkMsSUFBSSxDQUFDLFlBQVksR0FBRyxhQUFhLENBQUM7UUFNakMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3hDLENBQUM7SUFLTywrQkFBUSxHQUFoQjtRQUVFLElBQUksQ0FBQyxZQUFZLEdBQUcsYUFBYSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxXQUFXLEdBQUcsZ0JBQWdCLENBQUM7UUFDcEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7SUFFMUIsQ0FBQztJQUVILG1CQUFDO0FBQUQsQ0FBQyxBQW5ERCxJQW1EQztBQW5EWSxZQUFZO0lBSnhCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsUUFBUTtRQUNsQixXQUFXLEVBQUUsb0JBQW9CO0tBQ2xDLENBQUM7cUNBU2lDLDJDQUFtQjtHQVJ6QyxZQUFZLENBbUR4QjtBQW5EWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCxPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtBQ1NCbHVldG9vdGhTZXJ2aWNlfSBmcm9tIFwiLi9hY3MtYmx1ZXRvb3RoL2FjZS5ibHVldG9vdGguc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibXktYXBwXCIsXG4gIHRlbXBsYXRlVXJsOiAnYXBwLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAvLyBZb3VyIFR5cGVTY3JpcHQgbG9naWMgZ29lcyBoZXJlXG4gIHByaXZhdGUgZGV2aWNlTGlzdCA9IFtdO1xuICBwcml2YXRlIHNjYW5CdG5TdHlsZTogc3RyaW5nO1xuICBwcml2YXRlIHNjYW5CdG5UZXh0ID0gJ1N0YXJ0IFNjYW5uaW5nJztcbiAgcHJpdmF0ZSBpc1NjYW5uaW5nID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgICBwcml2YXRlIGFjc0JsdWV0b290aFNlcnZpY2U6IEFDU0JsdWV0b290aFNlcnZpY2VcbiAgKSB7XG4gIH1cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zY2FuQnRuU3R5bGUgPSAnYnRuLXByaW1hcnknO1xuICB9XG5cbiAgdG9nZ2xlU2NhbigpIHtcbiAgICBpZih0aGlzLmlzU2Nhbm5pbmcpXG4gICAge1xuICAgICAgdGhpcy5zdG9wU2NhbigpO1xuICAgIH1lbHNle1xuICAgICAgdGhpcy5zdGFydFNjYW4oKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU3RhcnQgc2NhbiBibHVldG9vdGggZGV2aWNlXG4gICAqL1xuICBwcml2YXRlIHN0YXJ0U2NhbigpXG4gIHtcbiAgICB0aGlzLmlzU2Nhbm5pbmcgPSB0cnVlO1xuICAgIHRoaXMuc2NhbkJ0blRleHQgPSAnU3RvcCBTY2FubmluZyc7XG4gICAgdGhpcy5zY2FuQnRuU3R5bGUgPSAnYnRuLXdhcm5pbmcnO1xuICAgIC8vXG4gICAgLy8gaWYodGhpcy5hY3NCbHVldG9vdGhTZXJ2aWNlLmlzU2Nhbm5pbmcoKSlcbiAgICAvLyB7XG4gICAgLy8gICB0aGlzLmFjc0JsdWV0b290aFNlcnZpY2Uuc3RvcFNjYW4oKTtcbiAgICAvLyB9XG4gICAgIHRoaXMuYWNzQmx1ZXRvb3RoU2VydmljZS5zdGFydFNjYW4oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdG9wIHNjYW4gYmx1ZXRvb3RoIGRldmljZVxuICAgKi9cbiAgcHJpdmF0ZSBzdG9wU2NhbigpXG4gIHtcbiAgICB0aGlzLnNjYW5CdG5TdHlsZSA9ICdidG4tcHJpbWFyeSc7XG4gICAgdGhpcy5zY2FuQnRuVGV4dCA9ICdTdGFydCBTY2FubmluZyc7XG4gICAgdGhpcy5pc1NjYW5uaW5nID0gZmFsc2U7XG4gICAvLyB0aGlzLmFjc0JsdWV0b290aFNlcnZpY2Uuc3RvcFNjYW4oKTtcbiAgfVxuXG59XG4iXX0=