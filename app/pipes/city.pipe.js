"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var CityPipe = (function () {
    function CityPipe() {
    }
    CityPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var fmt = args[0]; // short, long
        var short, long;
        switch (value) {
            case "Graz":
                short = "GRZ";
                long = "Flughafen Graz Thalerhof";
                break;
            case "Hamburg":
                short = "HAM";
                long = "Aiport Hamburg Helmut Schmidt";
                break;
            default:
                short = long = "ROM";
        }
        if (fmt == 'short')
            return short;
        return long;
    };
    CityPipe = __decorate([
        core_1.Pipe({
            name: 'city',
            pure: true
        }), 
        __metadata('design:paramtypes', [])
    ], CityPipe);
    return CityPipe;
}());
exports.CityPipe = CityPipe;
//# sourceMappingURL=city.pipe.js.map