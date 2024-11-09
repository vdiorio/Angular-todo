import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { ITask } from '../../../models/task.interface';
import { ITaskReturn } from '../../../models/taskReturn.interface';
import { ThemeService } from '../../../services/theme.service';

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
  constructor(private http: HttpClient, private apiService: ApiService, protected themeService: ThemeService) {}

  postReq() {
    if(this.objTask.task === '') return alert('preencha o input');
    this.isLoading = true

    this.http
      .post<ITaskReturn>(this.apiService.api, this.objTask, {
        headers: { 'Content-Type': 'application/json' },
      })
      .subscribe({
        next: (valor: ITaskReturn) => {
          this.objTask.task = ''
          
        },
        error: (erro: any) => {
          console.error('Erro ao fazer o POST:', erro);
        },
        complete: () => this.isLoading = false
      });
  }
}
