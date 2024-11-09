import { Component, OnInit } from '@angular/core';
import { ThemeService } from './services/theme.service';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  constructor(protected themeService: ThemeService, protected apiService: ApiService, private http: HttpClient) {}

    ngOnInit(): void {
      console.log(this.http.get(this.apiService.api))
    }
}
