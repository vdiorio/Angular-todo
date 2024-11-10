import { Component, OnInit } from '@angular/core';
import { ThemeService } from './services/theme.service';
import { ApiService } from './services/api.service';
import { ListTaskService } from './services/list-task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  appInput = {
    task: ''
  }
  isOpenModal = false
  constructor(protected themeService: ThemeService, protected apiService: ApiService, protected listTaskService: ListTaskService) {}

  ngOnInit(): void {
    this.listTaskService.atualizaList()
  }
  
  removerTask (id: string) {
    const subsRemove = this.apiService.removerTask(id).subscribe({
      next: () => {
        this.listTaskService.listTasks = this.listTaskService.listTasks.filter(task => task._id !== id)
        this.listTaskService.atualizaList()
      },
      complete() {
        subsRemove.unsubscribe()
      },
    })
  }
  putReq(id: string, payload: { task: string }) {
    this.apiService.atualizarTask(id, payload).subscribe({
      error: (err: any) => console.log(err),
      complete: () => {
        this.listTaskService.atualizaList()
        this.appInput.task = ""
      }})
  }
  openDialog()
 {this.isOpenModal = true}

}
