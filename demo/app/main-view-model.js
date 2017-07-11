"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var acs_bluetooth_1 = require("acs-bluetooth");
var HelloWorldModel = (function (_super) {
    __extends(HelloWorldModel, _super);
    function HelloWorldModel() {
        var _this = _super.call(this) || this;
        _this.acsBluetooth = new acs_bluetooth_1.ACSBluetooth();
        _this.message = _this.acsBluetooth.message;
        return _this;
    }
    return HelloWorldModel;
}(observable_1.Observable));
exports.HelloWorldModel = HelloWorldModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQTJDO0FBQzNDLCtDQUEyQztBQUUzQztJQUFxQyxtQ0FBVTtJQUk3QztRQUFBLFlBQ0UsaUJBQU8sU0FJUjtRQUZDLEtBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSw0QkFBWSxFQUFFLENBQUM7UUFDdkMsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQzs7SUFDM0MsQ0FBQztJQUNILHNCQUFDO0FBQUQsQ0FBQyxBQVZELENBQXFDLHVCQUFVLEdBVTlDO0FBVlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge09ic2VydmFibGV9IGZyb20gJ2RhdGEvb2JzZXJ2YWJsZSc7XG5pbXBvcnQge0FDU0JsdWV0b290aH0gZnJvbSAnYWNzLWJsdWV0b290aCc7XG5cbmV4cG9ydCBjbGFzcyBIZWxsb1dvcmxkTW9kZWwgZXh0ZW5kcyBPYnNlcnZhYmxlIHtcbiAgcHVibGljIG1lc3NhZ2U6IHN0cmluZztcbiAgcHJpdmF0ZSBhY3NCbHVldG9vdGg6IEFDU0JsdWV0b290aDtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5hY3NCbHVldG9vdGggPSBuZXcgQUNTQmx1ZXRvb3RoKCk7XG4gICAgdGhpcy5tZXNzYWdlID0gdGhpcy5hY3NCbHVldG9vdGgubWVzc2FnZTtcbiAgfVxufVxuIl19