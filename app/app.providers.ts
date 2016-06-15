import { provide} from '@angular/core';
import { CityPipe} from './pipes/city.pipe';
import { PLATFORM_PIPES, PLATFORM_DIRECTIVES} from '@angular/core'
import { FlightCardComponent} from './flight-card/flight-card.component';
import { FlightService } from './services/flight.service';
import { OAuthService} from 'angular2-oauth2/oauth-service';

export const APP_PROVIDERS = [
  // provide(PLATFORM_PIPES, {useValue: CityPipe, multi: true}),
  // provide(PLATFORM_DIRECTIVES, {useValue: FlightCardComponent, multi: true}),
  //FlightService,
  OAuthService,
  provide("BASE_URL", {useValue: "http://www.angular.at"})
];