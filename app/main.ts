import {bootstrap} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {AppComponent} from './app.component';
import { FlightSearchComponent} from './flight-search/flight-search.component';
import { APP_PROVIDERS} from './app.providers';
import { APP_ROUTER_PROVIDERS} from './app.routes';

var providers = [
  APP_PROVIDERS,
  APP_ROUTER_PROVIDERS,
  HTTP_PROVIDERS
];

bootstrap(AppComponent, providers);

