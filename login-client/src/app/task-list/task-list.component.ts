import { Component, OnInit } from '@angular/core';
import { TASKS } from '../task-data'
import { Task } from '../task';
import { TaskService} from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Object= [];
  color ='orange';
  //how to get users? to new
  tyMsg: string;

  constructor( private taskService:TaskService) { }

  ngOnInit() {
    console.log(this.tasks);
    this.taskService.getTasks().subscribe(data =>{
      this.tasks =data;
      console.log("this is data from task-list.component", data)
      console.log("this is tasks from task-list.component", this.tasks)
    },
    error =>{
      console.log(error);
    })
  }
  addnewTasksonchild(task: Task){
    console.log("in task-list.component ,adding task", task);
    // this.tasks.push(task);
    //pass data from a parent to a child, inputs receive data
    this.tyMsg ="thank you my child for the nre task";
  }
}
