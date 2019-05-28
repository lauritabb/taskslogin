import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';


@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {
  task = Task;
  constructor(private taskService:TaskService) { }

  ngOnInit() {
    this.taskService.getTask(2).subscribe(task =>{
      // this.task=task;
      console.log("this is tasks from task-list.component", task)
    },
    error =>{
      console.log(error);
    })
  }

}
