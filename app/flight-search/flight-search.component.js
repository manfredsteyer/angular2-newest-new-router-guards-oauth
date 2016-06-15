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
var flight_service_1 = require('../services/flight.service');
var city_pipe_1 = require('../pipes/city.pipe');
var city_validator_directive_1 = require('../validations/city-validator.directive');
var flight_card_component_1 = require('../flight-card/flight-card.component');
var router_1 = require('@angular/router');
var FlightSearchComponent = (function () {
    function FlightSearchComponent(flightService) {
        this.flightService = flightService;
        this.from = "Graz";
        this.to = "Hamburg";
        this.flights = [];
    }
    FlightSearchComponent.prototype.select = function (f) {
        this.selectedFlight = f;
    };
    FlightSearchComponent.prototype.search = function () {
        var _this = this;
        this.flightService
            .find(this.from, this.to)
            .subscribe(function (flights) {
            _this.flights = flights;
        }, function (err) {
            console.error(err);
        });
    };
    FlightSearchComponent = __decorate([
        core_1.Component({
            selector: 'flight-search',
            template: require('./flight-search.component.html'),
            providers: [flight_service_1.FlightService],
            pipes: [city_pipe_1.CityPipe],
            directives: [city_validator_directive_1.CityValidatorDirective, flight_card_component_1.FlightCardComponent, router_1.ROUTER_DIRECTIVES],
            styles: [require('./flight-search.component.css')]
        }), 
        __metadata('design:paramtypes', [flight_service_1.FlightService])
    ], FlightSearchComponent);
    return FlightSearchComponent;
}());
exports.FlightSearchComponent = FlightSearchComponent;
//# sourceMappingURL=flight-search.component.js.map