import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Users } from '../users';
import { Router } from '@angular/router';
import { Task } from '../task';
import { HttpService} from '../http.service';
import { TaskService} from '../task.service';

@Component({
  selector: 'app-task-new',
  templateUrl: './task-new.component.html',
  styleUrls: ['./task-new.component.css']
})
export class TaskNewComponent implements OnInit {
  newTask: Task = new Task();
  users: Users[];
  //outputs send data from a child to a parent
  @Output() addnewTask = new EventEmitter<Task>();
  //sends data from a parent to a child
  @Input() parentData:string;

  constructor(private httpService:HttpService, private taskService:TaskService) { }

  ngOnInit() {
    this.httpService.getUsers().subscribe(data=>{
      console.log("details components, getting all users", data)
      this.users=data;
    })
  }
  addTask(event:Event, formNewTask: NgForm){
    event.preventDefault();
    console.log("form was submitter ->addTask ", formNewTask);
    this.addnewTask.emit(this.newTask);
    this.taskService.addTask(formNewTask).subscribe(data =>{
      this.newTask= data
    })
    this.newTask = new Task();
    formNewTask.reset();
  }

}
