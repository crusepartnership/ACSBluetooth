"use strict";
var observable_1 = require("tns-core-modules/data/observable");
var app = require("tns-core-modules/application");
var Common = (function (_super) {
    __extends(Common, _super);
    function Common() {
        var _this = _super.call(this) || this;
        _this.message = Utils.SUCCESS_MSG();
        return _this;
    }
    Common.prototype.greet = function () {
        return "Hello, NS";
    };
    return Common;
}(observable_1.Observable));
exports.Common = Common;
var Utils = (function () {
    function Utils() {
    }
    Utils.SUCCESS_MSG = function () {
        var msg = "Your plugin is working on " + (app.android ? 'Android' : 'iOS') + ".";
        return msg;
    };
    return Utils;
}());
exports.Utils = Utils;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNzLWJsdWV0b290aC5jb21tb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhY3MtYmx1ZXRvb3RoLmNvbW1vbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsK0RBQThEO0FBQzlELGtEQUFvRDtBQUdwRDtJQUE0QiwwQkFBVTtJQUdwQztRQUFBLFlBQ0UsaUJBQU8sU0FFUjtRQURDLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDOztJQUNyQyxDQUFDO0lBRU0sc0JBQUssR0FBWjtRQUNFLE1BQU0sQ0FBQyxXQUFXLENBQUM7SUFDckIsQ0FBQztJQUNILGFBQUM7QUFBRCxDQUFDLEFBWEQsQ0FBNEIsdUJBQVUsR0FXckM7QUFYWSx3QkFBTTtBQWFuQjtJQUFBO0lBVUEsQ0FBQztJQVRlLGlCQUFXLEdBQXpCO1FBQ0UsSUFBSSxHQUFHLEdBQUcsZ0NBQTZCLEdBQUcsQ0FBQyxPQUFPLEdBQUcsU0FBUyxHQUFHLEtBQUssT0FBRyxDQUFDO1FBTTFFLE1BQU0sQ0FBQyxHQUFHLENBQUM7SUFDYixDQUFDO0lBQ0gsWUFBQztBQUFELENBQUMsQUFWRCxJQVVDO0FBVlksc0JBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUnO1xuaW1wb3J0ICogYXMgYXBwIGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24nO1xuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3MnO1xuXG5leHBvcnQgY2xhc3MgQ29tbW9uIGV4dGVuZHMgT2JzZXJ2YWJsZSB7XG4gIHB1YmxpYyBtZXNzYWdlOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLm1lc3NhZ2UgPSBVdGlscy5TVUNDRVNTX01TRygpO1xuICB9XG5cbiAgcHVibGljIGdyZWV0KCkge1xuICAgIHJldHVybiBcIkhlbGxvLCBOU1wiO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBVdGlscyB7XG4gIHB1YmxpYyBzdGF0aWMgU1VDQ0VTU19NU0coKTogc3RyaW5nIHtcbiAgICBsZXQgbXNnID0gYFlvdXIgcGx1Z2luIGlzIHdvcmtpbmcgb24gJHthcHAuYW5kcm9pZCA/ICdBbmRyb2lkJyA6ICdpT1MnfS5gO1xuXG4gICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgLy8gICBkaWFsb2dzLmFsZXJ0KGAke21zZ30gRm9yIHJlYWwuIEl0J3MgcmVhbGx5IHdvcmtpbmcgOilgKS50aGVuKCgpID0+IGNvbnNvbGUubG9nKGBEaWFsb2cgY2xvc2VkLmApKTtcbiAgICAvLyB9LCAyMDAwKTtcblxuICAgIHJldHVybiBtc2c7XG4gIH1cbn1cbiJdfQ==