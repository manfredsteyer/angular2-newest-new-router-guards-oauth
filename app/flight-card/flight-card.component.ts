import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Flight} from '../entities/flight';
@Component({
    selector: 'flight-card',
    template: require('./flight-card.component.html')
})
export class FlightCardComponent {

    @Input() item: Flight;
    @Input() selectedItem: Flight;
    @Output() selectedItemChange = new EventEmitter();

    select() {
        this.selectedItemChange.emit(/*$event=*/this.item);
    }

}