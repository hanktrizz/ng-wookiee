import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'stripUnderscore',
})
export class StripUnderscorePipe implements PipeTransform {
    transform(value: string): string {
        return value.replace(/_/g, ' ');
    }
}
