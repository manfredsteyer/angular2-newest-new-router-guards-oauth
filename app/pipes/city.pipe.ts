import { Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'city',
    pure: true
})
export class CityPipe implements PipeTransform {

    transform(value: any, ...args: any[]): any {

        var fmt = args[0]; // short, long
        var short, long;

        switch(value) {
            case "Graz":
                short = "GRZ";
                long = "Flughafen Graz Thalerhof";
            break;
            case "Hamburg":
                short = "HAM";
                long = "Aiport Hamburg Helmut Schmidt";
            break;
            default:
                short = long = "ROM";
        }

        if (fmt == 'short') return short;
        return long;

    }


}