import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITaskReturn } from '../models/taskReturn.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  api = 'https://crudcrud.com/api/a414f0c1b6544d84900b3eb155d0a5f0/task';

  constructor(private http: HttpClient) {}

  puxarTasks(): Observable<any> {
    return this.http.get<ITaskReturn[]>(this.api);
  }
}
