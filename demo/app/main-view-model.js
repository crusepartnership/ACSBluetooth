"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
var nativescript_acs_bluetooth_1 = require("nativescript-acs-bluetooth");
var HelloWorldModel = (function (_super) {
    __extends(HelloWorldModel, _super);
    function HelloWorldModel() {
        var _this = _super.call(this) || this;
        _this.acsBluetooth = new nativescript_acs_bluetooth_1.ACSBluetooth();
        _this.message = _this.acsBluetooth.message;
        _this.acsBluetooth.startScanningForDevices();
        return _this;
    }
    return HelloWorldModel;
}(observable_1.Observable));
exports.HelloWorldModel = HelloWorldModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0RBQThEO0FBQzlELHlFQUEwRDtBQUUxRDtJQUFxQyxtQ0FBVTtJQUk3QztRQUFBLFlBQ0UsaUJBQU8sU0FLUjtRQUhDLEtBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSx5Q0FBWSxFQUFFLENBQUM7UUFDdkMsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQztRQUN6QyxLQUFJLENBQUMsWUFBWSxDQUFDLHVCQUF1QixFQUFFLENBQUM7O0lBQzlDLENBQUM7SUFDSCxzQkFBQztBQUFELENBQUMsQUFYRCxDQUFxQyx1QkFBVSxHQVc5QztBQVhZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlJztcbmltcG9ydCB7IEFDU0JsdWV0b290aCB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hY3MtYmx1ZXRvb3RoJztcblxuZXhwb3J0IGNsYXNzIEhlbGxvV29ybGRNb2RlbCBleHRlbmRzIE9ic2VydmFibGUge1xuICBwdWJsaWMgbWVzc2FnZTogc3RyaW5nO1xuICBwcml2YXRlIGFjc0JsdWV0b290aDogQUNTQmx1ZXRvb3RoO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLmFjc0JsdWV0b290aCA9IG5ldyBBQ1NCbHVldG9vdGgoKTtcbiAgICB0aGlzLm1lc3NhZ2UgPSB0aGlzLmFjc0JsdWV0b290aC5tZXNzYWdlO1xuICAgIHRoaXMuYWNzQmx1ZXRvb3RoLnN0YXJ0U2Nhbm5pbmdGb3JEZXZpY2VzKCk7XG4gIH1cbn0iXX0=