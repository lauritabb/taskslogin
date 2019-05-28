import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from} from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  baseURL = 'http://localhost:8000'
  constructor(private http:HttpClient, private router:Router) { }
}
