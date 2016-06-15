import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { OAuthService} from 'angular2-oauth2/oauth-service';
import { Injectable} from '@angular/core';

@Injectable()
export class FlightBookingGuard implements CanActivate {

    constructor(private oauthService: OAuthService) {
    }

    canActivate(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot) {
            
            var hasIdToken = this.oauthService.hasValidIdToken();
            var hasAccessToken = this.oauthService.hasValidAccessToken();

            return (hasIdToken && hasAccessToken);
    }
}