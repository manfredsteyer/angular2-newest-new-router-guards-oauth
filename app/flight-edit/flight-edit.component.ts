import { Component} from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Observable, Observer} from 'rxjs';

@Component({
    template: require('./flight-edit.component.html')
})
export class FlightEditComponent {

    public id: string;
    
    constructor(private route: ActivatedRoute) {
        route.params.subscribe(p => {
            this.id = p['id'];
            console.debug('new id: ' + this.id);
        });
        
    }

    ngOnInit() {
        var snapshotId = this.route.snapshot.params['id'];
        console.debug('snapshotId: ' + snapshotId);
    }

    public exitDialog = {
        show: false,
        observer: null
    }

    public placeExitDecision(d: boolean) {
        this.exitDialog.show = false;
        this.exitDialog.observer.next(d);
        this.exitDialog.observer.complete();
    }

    canDeactivate() {
        this.exitDialog.show = true;

        return new Observable<boolean>((observer: Observer<boolean>) => {
            this.exitDialog.observer = observer;
        });

    }

}