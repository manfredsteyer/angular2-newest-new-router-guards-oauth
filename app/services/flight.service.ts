import { Injectable, Inject} from '@angular/core';
import { Http, URLSearchParams, Headers} from '@angular/http';
import { Flight } from '../entities/flight';
import { Observable, Observer} from 'rxjs';
import { OAuthService} from 'angular2-oauth2/oauth-service';

@Injectable()
export class FlightService {

    constructor(
        private http: Http,
        private oauthService: OAuthService,
        @Inject("BASE_URL") private baseUrl: string) {
    }

    public flights: Flight[] = [];

    public find(from: string, to: string) {
        var url = this.baseUrl + "/api/secureflight";

        var search = new URLSearchParams();
        search.set('from', from);
        search.set('to', to);

        var headers = new Headers();
        headers.set('Accept', 'text/json');
        headers.set('Authorization', 'Bearer ' + this.oauthService.getAccessToken())

        return new Observable((observer: Observer<Flight[]>) => {
            this.http
                .get(url, { search, headers })
                .map(resp => resp.json())
                .subscribe((flights) => {
                    this.flights = flights;
                    observer.next(flights);
                });
        });
    }

}