"use strict";
var FlightEditGuard = (function () {
    function FlightEditGuard() {
    }
    FlightEditGuard.prototype.canDeactivate = function (component, route, state) {
        return component.canDeactivate();
    };
    return FlightEditGuard;
}());
exports.FlightEditGuard = FlightEditGuard;
//# sourceMappingURL=flight-edit.guard.js.map