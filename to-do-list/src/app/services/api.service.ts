import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITaskReturn } from '../models/taskReturn.interface';
import { Observable } from 'rxjs';
import { ITask } from '../models/task.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  api = 'https://crudcrud.com/api/e76edae4e1854aa38fde68f7bf685501/tasks';

  constructor(private http: HttpClient) {}

  adicionarTask(task: ITask) {
    return this.http.post<ITaskReturn>(this.api, task, {
      headers: { 'Content-Type': 'application/json' },
    });
  }

  puxarTasks(): Observable<any> {
    return this.http.get<ITaskReturn[]>(this.api);
  }

  removerTask(id: string) {
    return this.http.delete<string>(`${this.api}/${id}`);
  }
}
