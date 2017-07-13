"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
var nativescript_acs_bluetooth_1 = require("nativescript-acs-bluetooth");
var HelloWorldModel = (function (_super) {
    __extends(HelloWorldModel, _super);
    function HelloWorldModel() {
        var _this = _super.call(this) || this;
        _this.deviceList = [];
        _this.acsBluetooth = new nativescript_acs_bluetooth_1.ACSBluetooth();
        _this.message = _this.acsBluetooth.message;
        _this.acsBluetooth.scanResultsObservable().subscribe(function (scanResults) { _this.deviceList = scanResults; });
        return _this;
    }
    HelloWorldModel.prototype.toggle = function () {
        this.deviceList.push('1');
        if (this.acsBluetooth.isScanning().getValue() !== false) {
            this.acsBluetooth.stopScanningForDevices();
        }
        else {
            this.acsBluetooth.startScanningForDevices();
        }
    };
    return HelloWorldModel;
}(observable_1.Observable));
exports.HelloWorldModel = HelloWorldModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0RBQThEO0FBQzlELHlFQUEwRDtBQUUxRDtJQUFxQyxtQ0FBVTtJQUk3QztRQUFBLFlBQ0UsaUJBQU8sU0FLUjtRQVBPLGdCQUFVLEdBQUcsRUFBRSxDQUFDO1FBSXRCLEtBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSx5Q0FBWSxFQUFFLENBQUM7UUFDdkMsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQztRQUN6QyxLQUFJLENBQUMsWUFBWSxDQUFDLHFCQUFxQixFQUFFLENBQUMsU0FBUyxDQUFDLFVBQUMsV0FBaUIsSUFBTSxLQUFJLENBQUMsVUFBVSxHQUFHLFdBQVcsQ0FBQSxDQUFBLENBQUMsQ0FBQyxDQUFDOztJQUM5RyxDQUFDO0lBRUQsZ0NBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzFCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLENBQUMsUUFBUSxFQUFFLEtBQUssS0FBSyxDQUFDLENBQ3hELENBQUM7WUFDQyxJQUFJLENBQUMsWUFBWSxDQUFDLHNCQUFzQixFQUFFLENBQUM7UUFDN0MsQ0FBQztRQUFBLElBQUksQ0FBQSxDQUFDO1lBQ0osSUFBSSxDQUFDLFlBQVksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO1FBQzlDLENBQUM7SUFFSCxDQUFDO0lBRUgsc0JBQUM7QUFBRCxDQUFDLEFBdkJELENBQXFDLHVCQUFVLEdBdUI5QztBQXZCWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBBQ1NCbHVldG9vdGggfSBmcm9tICduYXRpdmVzY3JpcHQtYWNzLWJsdWV0b290aCc7XG5cbmV4cG9ydCBjbGFzcyBIZWxsb1dvcmxkTW9kZWwgZXh0ZW5kcyBPYnNlcnZhYmxlIHtcbiAgcHVibGljIG1lc3NhZ2U6IHN0cmluZztcbiAgcHJpdmF0ZSBhY3NCbHVldG9vdGg6IEFDU0JsdWV0b290aDtcbiAgcHJpdmF0ZSBkZXZpY2VMaXN0ID0gW107XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLmFjc0JsdWV0b290aCA9IG5ldyBBQ1NCbHVldG9vdGgoKTtcbiAgICB0aGlzLm1lc3NhZ2UgPSB0aGlzLmFjc0JsdWV0b290aC5tZXNzYWdlO1xuICAgIHRoaXMuYWNzQmx1ZXRvb3RoLnNjYW5SZXN1bHRzT2JzZXJ2YWJsZSgpLnN1YnNjcmliZSgoc2NhblJlc3VsdHM6YW55W10pID0+IHt0aGlzLmRldmljZUxpc3QgPSBzY2FuUmVzdWx0c30pO1xuICB9XG5cbiAgdG9nZ2xlKCkge1xuICAgIHRoaXMuZGV2aWNlTGlzdC5wdXNoKCcxJyk7XG4gICAgaWYgKHRoaXMuYWNzQmx1ZXRvb3RoLmlzU2Nhbm5pbmcoKS5nZXRWYWx1ZSgpICE9PSBmYWxzZSlcbiAgICB7XG4gICAgICB0aGlzLmFjc0JsdWV0b290aC5zdG9wU2Nhbm5pbmdGb3JEZXZpY2VzKCk7XG4gICAgfWVsc2V7XG4gICAgICB0aGlzLmFjc0JsdWV0b290aC5zdGFydFNjYW5uaW5nRm9yRGV2aWNlcygpO1xuICAgIH1cblxuICB9XG5cbn0iXX0=