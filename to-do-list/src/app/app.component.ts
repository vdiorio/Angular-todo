import { Component, OnDestroy, OnInit } from '@angular/core';
import { ThemeService } from './services/theme.service';
import { ApiService } from './services/api.service';
import { ListTaskService } from './services/list-task.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogatualizartaskComponent } from './components/dialogatualizartask/dialogatualizartask.component';
import { ITaskReturn } from './models/taskReturn.interface';
import { TimerService } from './services/timer.service';
import { IHours } from './models/hours.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  isOpenModal = false
  hours = { hour: new Date().getHours(), minute: new Date().getMinutes() } as IHours
  
  constructor(protected timerService: TimerService,protected themeService: ThemeService, protected apiService: ApiService, protected listTaskService: ListTaskService, private dialog: MatDialog) {}
  
  ngOnInit(): void {
    this.listTaskService.atualizaList()
    const myTime: Subscription = this.timerService.hours.subscribe({
      next: (value: IHours) => this.hours = value,
      complete: () => myTime.unsubscribe()
    })
    
  }


  removerTask (id: string) {
    const subsRemove = this.apiService.removerTask(id).subscribe({
      next: () => {
        this.listTaskService.atualizaList()
      },
      complete() {
        subsRemove.unsubscribe()
      },
    })
  }
  
  openDialog (task: ITaskReturn) {
     this.dialog.open(DialogatualizartaskComponent, {
      data: task,
    })
    
  }
}
