import { Injectable } from '@angular/core';
import { interval, map, Observable } from 'rxjs';
import { IHours } from '../models/hours.interface';

@Injectable({
  providedIn: 'root',
})
export class TimerService {
  

  hours: Observable<IHours> = interval(1000).pipe(map(() => {
    const date = new Date()
    return { hour: date.getHours(), minute: date.getMinutes() }
  }))

 
}
