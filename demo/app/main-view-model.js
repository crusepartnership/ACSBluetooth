"use strict";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw4Q0FBMkM7QUFDM0MsK0NBQTJDO0FBRTNDO0lBQXFDLG1DQUFVO0lBSTdDO1FBQUEsWUFDRSxpQkFBTyxTQUlSO1FBRkMsS0FBSSxDQUFDLFlBQVksR0FBRyxJQUFJLDRCQUFZLEVBQUUsQ0FBQztRQUN2QyxLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDOztJQUMzQyxDQUFDO0lBQ0gsc0JBQUM7QUFBRCxDQUFDLEFBVkQsQ0FBcUMsdUJBQVUsR0FVOUM7QUFWWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAnZGF0YS9vYnNlcnZhYmxlJztcbmltcG9ydCB7QUNTQmx1ZXRvb3RofSBmcm9tICdhY3MtYmx1ZXRvb3RoJztcblxuZXhwb3J0IGNsYXNzIEhlbGxvV29ybGRNb2RlbCBleHRlbmRzIE9ic2VydmFibGUge1xuICBwdWJsaWMgbWVzc2FnZTogc3RyaW5nO1xuICBwcml2YXRlIGFjc0JsdWV0b290aDogQUNTQmx1ZXRvb3RoO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLmFjc0JsdWV0b290aCA9IG5ldyBBQ1NCbHVldG9vdGgoKTtcbiAgICB0aGlzLm1lc3NhZ2UgPSB0aGlzLmFjc0JsdWV0b290aC5tZXNzYWdlO1xuICB9XG59XG4iXX0=