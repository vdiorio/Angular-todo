import { Component } from '@angular/core';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(protected themeService: ThemeService) {}
  api = 'https://crudcrud.com/api/a414f0c1b6544d84900b3eb155d0a5f0'
  
}
