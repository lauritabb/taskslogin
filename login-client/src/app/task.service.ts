import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from} from 'rxjs';
import { Router } from '@angular/router';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  baseURL = 'http://localhost:8000/api/task'

  constructor(private http:HttpClient, private router:Router) { }

  addTask(task): Observable<Task>{
    console.log("register task from welcome")
    return this.http.post<Task>(this.baseURL+'/create/',task);
  }
  getTasks():Observable<Task[]>{
    return this.http.get<Task[]>(`${this.baseURL}`);
  }
  getTask(id):Observable<Task>{
    return this.http.get<Task>(`${this.baseURL}/${id}`);
  }
}
