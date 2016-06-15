import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { FlightEditComponent} from './flight-edit.component';

export class FlightEditGuard implements CanDeactivate<FlightEditComponent> {

    canDeactivate(
            component: FlightEditComponent, 
            route: ActivatedRouteSnapshot, 
            state: RouterStateSnapshot) {

                return component.canDeactivate();
    }

}