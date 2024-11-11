import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITaskReturn } from '../models/taskReturn.interface';
import { ITask } from '../models/task.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  api = 'https://crudcrud.com/api/28954b599d334f35955b6876bb0c4dfd/tasks';

  constructor(private http: HttpClient) {}

  adicionarTask(task: ITask) {
    return this.http.post<ITaskReturn>(this.api, task, {
      headers: { 'Content-Type': 'application/json' },
    });
  }
  atualizarTask( id:string, payload: ITask){
    return this.http.put<void>(`${this.api}/${id}`, payload)
  }

  puxarTasks() {
    return this.http.get<ITaskReturn[]>(this.api);
  }

  removerTask(id: string) {
    return this.http.delete<void>(`${this.api}/${id}`);
  }
}
