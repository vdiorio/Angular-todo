import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITaskReturn } from '../models/taskReturn.interface';
import { ITask } from '../models/task.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  api = 'https://crudcrud.com/api/fb54df8142434006b48864b239b795da/task';

  constructor(private http: HttpClient) {}

  adicionarTask(task: ITask) {
    return this.http.post<ITaskReturn>(this.api, task, {
      headers: { 'Content-Type': 'application/json' },
    });
  }
  atualizarTask( id:string, payload: {task: string}){
    return this.http.put<void>(`${this.api}/${id}`,payload)
  }

<<<<<<< HEAD
  puxarTasks() {
=======
  puxarTasks(){
>>>>>>> 7dd78a0760d11c7d61d398a13e267891399b0354
    return this.http.get<ITaskReturn[]>(this.api);
  }

  removerTask(id: string) {
    return this.http.delete<void>(`${this.api}/${id}`);
  }
<<<<<<< HEAD

=======
  
>>>>>>> 7dd78a0760d11c7d61d398a13e267891399b0354
}
