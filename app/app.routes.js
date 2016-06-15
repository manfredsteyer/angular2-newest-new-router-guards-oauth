"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./home/home.component');
var flight_search_component_1 = require('./flight-search/flight-search.component');
var passenger_search_component_1 = require('./passenger-search/passenger-search.component');
var flight_edit_component_1 = require('./flight-edit/flight-edit.component');
var flight_booking_component_1 = require('./flight-booking/flight-booking.component');
var flight_booking_guard_1 = require('./flight-booking/flight-booking.guard');
var APP_ROUTES = [
    {
        path: '/home',
        component: home_component_1.HomeComponent,
        index: true
    },
    {
        path: '/flight-booking',
        component: flight_booking_component_1.FlightBookingComponent,
        canActivate: [flight_booking_guard_1.FlightBookingGuard],
        children: [
            {
                path: '/flight-search',
                component: flight_search_component_1.FlightSearchComponent,
                index: true
            },
            {
                path: '/passenger-search',
                component: passenger_search_component_1.PassengerSearchComponent
            },
            {
                path: '/flight-edit/:id',
                component: flight_edit_component_1.FlightEditComponent
            }
        ]
    }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(APP_ROUTES),
    flight_booking_guard_1.FlightBookingGuard
];
//# sourceMappingURL=app.routes.js.map