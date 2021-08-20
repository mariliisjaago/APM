import { Pipe } from "@angular/core";
import { PipeTransform } from "@angular/core";


@Pipe({
    name: 'convertToSpaces'
})
export class ConvertToSpacesPipe implements PipeTransform {

    transform(value: string, charToReplace: string): string {
        return value.replace(charToReplace, ' ');
    }
}