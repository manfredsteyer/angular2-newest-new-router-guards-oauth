import { Component} from '@angular/core';
import { ROUTER_DIRECTIVES} from '@angular/router';
import { FlightService } from '../services/flight.service';

@Component({
    template: require('./flight-booking.component.html'),
    directives: [ROUTER_DIRECTIVES],
    providers: [FlightService]
})
export class FlightBookingComponent {
}