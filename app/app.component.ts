import { Component, EventEmitter } from 'angular2/core';
import { TaskListComponent } from './task-list.component';
import { Task } from './task.model';

@Component({
  selector: 'my-app',
  directives: [TaskListComponent],
  template: `
  <div class="container">
    <h1>To-Do List</h1>
    <task-list
      [taskList]="tasks"
      (onTaskSelect)="taskWasSelected($event)">
    </task-list>
    </div>
  `
})

export class AppComponent {
  public tasks: Task[];
  constructor(){
    this.tasks = [
      new Task("Create To-Do List app", 0, "low"),
      new Task("Learn Kung Fu", 1, "normal"),
      new Task("Rewatch all the Lord of the Rings movies", 2, "high"),
      new Task("Do the laundry", 3, "high")
    ];
  }
  taskWasSelected(clickedTask: Task): void {
    console.log(clickedTask, "parent");
  }
}
