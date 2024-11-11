import { Component, Inject, Input } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { ApiService } from '../../services/api.service';
import { ListTaskService } from '../../services/list-task.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ITask } from '../../models/task.interface';
import { ITaskReturn } from '../../models/taskReturn.interface';

@Component({
  selector: 'app-dialogatualizartask',
  templateUrl: './dialogatualizartask.component.html',
  styleUrl: './dialogatualizartask.component.css',
})
export class DialogatualizartaskComponent {
  appInput = {
    task: '',
  };
  isOpenModal = false;

  constructor(
    protected themeService: ThemeService,
    private apiService: ApiService,
    protected listTaskService: ListTaskService,
    @Inject(MAT_DIALOG_DATA) private task: ITaskReturn
  ) {}


  putReq(payload: { task: string }) {
    this.apiService.atualizarTask(this.task._id, payload).subscribe({
      error: (err: any) => {console.log(err)
        console.log(this.task._id)
      },
      complete: () => {
        this.listTaskService.atualizaList();
        this.appInput.task = '';
      },
    });
  }
}
