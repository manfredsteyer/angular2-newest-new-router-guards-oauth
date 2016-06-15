import { Flight } from '../entities/flight';
import { Http, URLSearchParams, Headers } from '@angular/http';
import { Component} from '@angular/core';
import { FlightService} from '../services/flight.service';
import { CityPipe} from '../pipes/city.pipe';
import { CityValidatorDirective} from '../validations/city-validator.directive';
import { FlightCardComponent} from '../flight-card/flight-card.component';
import { ROUTER_DIRECTIVES} from '@angular/router';

@Component({
    selector: 'flight-search', //<flight-search></flight-search>
    template: require('./flight-search.component.html'),
    //providers: [FlightService],
    pipes: [CityPipe],
    directives: [CityValidatorDirective, FlightCardComponent, ROUTER_DIRECTIVES],
    styles: [require('./flight-search.component.css')]
})
export class FlightSearchComponent {

    public from: string = "Graz";
    public to: string = "Hamburg";
    
    // public flights: Array<Flight> = [];

    public selectedFlight: Flight;

    constructor(
        private flightService: FlightService) {
    }

    // {{ flights | json }}
    public get flights() {
        return this.flightService.flights;
    }

    select(f: Flight) {
        this.selectedFlight = f;
    }

    search() {
       
        this.flightService
            .find(this.from, this.to)
            .subscribe(
                ok  => {
                    console.debug("Success!");
                },
                err => {
                    console.error(err);
                }
            );           
    }


}