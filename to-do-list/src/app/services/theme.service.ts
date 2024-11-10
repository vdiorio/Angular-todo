import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  isDark = true

  setTheme () {
    this.isDark = !this.isDark
  }
}
