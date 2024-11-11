import { Component, Inject } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { ApiService } from '../../services/api.service';
import { ListTaskService } from '../../services/list-task.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ITaskReturn } from '../../models/taskReturn.interface';
import { ITask } from '../../models/task.interface';

@Component({
  selector: 'app-dialogatualizartask',
  templateUrl: './dialogatualizartask.component.html',
  styleUrl: './dialogatualizartask.component.css',
})
export class DialogatualizartaskComponent {
  appInput: ITask = {
    task: '',
  };
  isOpenModal = false;

  constructor(
    protected themeService: ThemeService,
    private apiService: ApiService,
    protected listTaskService: ListTaskService,
    @Inject(MAT_DIALOG_DATA) private task: ITaskReturn
  ) {}


  putReq(payload: ITask) {
    const subsPut = this.apiService.atualizarTask(this.task._id, payload).subscribe({
      error: (err: any) => {console.log(err)
      },
      complete: () => {
        this.listTaskService.atualizaList();
        this.appInput.task = '';
        subsPut.unsubscribe()
      },
    });
  }
}
