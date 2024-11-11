import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITaskReturn } from '../models/taskReturn.interface';
import { ITask } from '../models/task.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  api = 'https://crudcrud.com/api/5048403dcd9c4e0d82520bbad70a4e52/tasks';

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
