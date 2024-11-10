import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITaskReturn } from '../models/taskReturn.interface';
import { ITask } from '../models/task.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  api = 'https://crudcrud.com/api/da19b41019104cba8216142e6d5a77d8/task';

  constructor(private http: HttpClient) {}

  adicionarTask(task: ITask) {
    return this.http.post<ITaskReturn>(this.api, task, {
      headers: { 'Content-Type': 'application/json' },
    });
  }
  atualizarTask( id:string, payload: {task: string}){
    return this.http.put<void>(`${this.api}/${id}`,payload)
  }

  puxarTasks() {
    return this.http.get<ITaskReturn[]>(this.api);
  }

  removerTask(id: string) {
    return this.http.delete<void>(`${this.api}/${id}`);
  }
}
