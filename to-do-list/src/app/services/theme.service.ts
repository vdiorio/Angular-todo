import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor() { }

  isDark = true

  setTheme () {
    this.isDark = !this.isDark
  }
}
