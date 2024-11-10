import { Component, Input } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { ApiService } from '../../services/api.service';
import { ListTaskService } from '../../services/list-task.service';

@Component({
  selector: 'app-dialogatualizartask',
  templateUrl: './dialogatualizartask.component.html',
  styleUrl: './dialogatualizartask.component.css',
})
export class DialogatualizartaskComponent {

  @Input({required: true, alias: 'idTask'}) idTask = ''
  appInput = {
    task: '',
  };
  isOpenModal = false;

  constructor(
    protected themeService: ThemeService,
    private apiService: ApiService,
    protected listTaskService: ListTaskService
  ) {}

  openDialog() {
    this.isOpenModal = true;
  }

  putReq(id: string, payload: { task: string }) {
    this.apiService.atualizarTask(id, payload).subscribe({
      error: (err: any) => console.log(err),
      complete: () => {
        this.listTaskService.atualizaList();
        this.appInput.task = '';
      },
    });
  }
}
