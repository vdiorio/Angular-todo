import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hours'
})
export class HoursPipe implements PipeTransform {

  transform(hour: number, minute: number): string {
    return `As horas são: ${hour}:${minute}`;
  }

}
