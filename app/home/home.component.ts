import { Component } from '@angular/core';
import { OAuthService} from 'angular2-oauth2/oauth-service';

@Component({
    selector: 'home',
    template: require('./home.component.html')
})
export class HomeComponent {

    constructor(private oauthService: OAuthService) {
    }

    public login() {
        this.oauthService.initImplicitFlow();
    }

    public logout() {
        this.oauthService.logOut();
    }

    public get userName() {
        
        var claims = this.oauthService.getIdentityClaims();
        if (!claims) return null;

        return claims.given_name;
    }

}