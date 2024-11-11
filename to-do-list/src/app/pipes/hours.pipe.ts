import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hours',
})
export class HoursPipe implements PipeTransform {
  transform(hour: number, minute: number): string {
    const hourFormated = hour.toString();
    const minuteFormated = minute.toString();

    const hourFinal =
      hourFormated.length === 1 ? `0${hourFormated}` : hourFormated;
    const minuteFinal =
      minuteFormated.length === 1 ? `0${minuteFormated}` : minuteFormated;
    return `Horas: ${hourFinal}:${minuteFinal}`;
  }
}
