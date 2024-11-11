import { Component } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { ITask } from '../../../models/task.interface';
import { ThemeService } from '../../../services/theme.service';
import { ListTaskService } from '../../../services/list-task.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.css', 
})
export class InputComponent {

  objTask: ITask = {
    task: '',
  };
  
  isLoading = false
  constructor( private apiService: ApiService, protected themeService: ThemeService, private listTaskService: ListTaskService) {}

  postReq(task: ITask) {
    if(this.objTask.task === '') return alert('preencha o input');
    this.isLoading = true

    
    const subsPost = this.apiService.adicionarTask(task).subscribe({
      next: () => this.listTaskService.atualizaList(),
      complete:() => {
        this.isLoading = false
        this.objTask.task = ''
        subsPost.unsubscribe()
      }
    })
  }

}
