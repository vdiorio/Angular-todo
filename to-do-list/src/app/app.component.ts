import { Component, OnInit } from '@angular/core';
import { ThemeService } from './services/theme.service';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './services/api.service';
import { ITaskReturn } from './models/taskReturn.interface';
import { ListTaskService } from './services/list-task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  constructor(protected themeService: ThemeService, protected apiService: ApiService, protected listTaskService: ListTaskService) {}
  
  ngOnInit(): void {
    this.listTaskService.atualizaList()
  }
  
  removerTask (id: string) {
    this.apiService.removerTask(id).subscribe({
      next: () => this.listTaskService.atualizaList(),
      complete: () => {
        this.listTaskService.listTasks.filter(task => task._id !== id)
        console.log(this.listTaskService.listTasks)
        this.listTaskService.atualizaList()
      },
    })
  }


}
