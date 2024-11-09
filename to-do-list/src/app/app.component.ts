import { Component, OnInit } from '@angular/core';
import { ThemeService } from './services/theme.service';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './services/api.service';
import { ITaskReturn } from './models/taskReturn.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  listTasks: ITaskReturn[] = []
  constructor(protected themeService: ThemeService, protected apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.puxarTasks().subscribe({
      next: (value: ITaskReturn[]) => {
        this.listTasks = value
        console.log(this.listTasks)
      }
      ,
      error: (error: any) => error,
    })
    
  }
  


}
