import { Directive, Attribute, provide } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/common';

// <input city="Hamburg,Graz">
@Directive({
    selector: 'input[city]',
    providers: [provide(NG_VALIDATORS, { useExisting: CityValidatorDirective, multi: true })]
})
export class CityValidatorDirective implements Validator {

    validValues = [];
    constructor(@Attribute('city') values: string) {
        this.validValues = values.split(',');
    }

    validate(c: AbstractControl): any {
        if (this.validValues.indexOf(c.value) > -1 ) {
            return {};
        }
        return {city: true}
    }

}