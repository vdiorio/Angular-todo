import { Injectable } from '@angular/core';
import { ITaskReturn } from '../models/taskReturn.interface';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ListTaskService {

  constructor(private apiService: ApiService) { }

  listTasks: ITaskReturn[] = []

  atualizaList () {
    this.apiService.puxarTasks().subscribe({
      next: (value: ITaskReturn[]) => {
        this.listTasks = value
        console.log(this.listTasks)
      },
      error: (error: any) => error,
    })
  }
}
