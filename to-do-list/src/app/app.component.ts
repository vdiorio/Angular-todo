import { Component, OnInit } from '@angular/core';
import { ThemeService } from './services/theme.service';
import { ApiService } from './services/api.service';
import { ListTaskService } from './services/list-task.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogatualizartaskComponent } from './components/dialogatualizartask/dialogatualizartask.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  
  isOpenModal = false
  constructor(protected themeService: ThemeService, protected apiService: ApiService, protected listTaskService: ListTaskService, private dialog: MatDialog) {}

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
  
  openDialog () {
    this.dialog.open(DialogatualizartaskComponent)
  }
}
