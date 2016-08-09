import { Component, EventEmitter } from 'angular2/core';
import { TaskComponent } from './task.component';
import { Task } from './task.model';
import { EditTaskDetailsComponent } from './edit-task-details.component';
import { NewTaskComponent } from './new-task.component';
import { DonePipe } from './done.pipe';

@Component({
  selector: 'task-list',
  inputs: ['taskList'],
  outputs: ['onTaskSelect'],
  pipes: [DonePipe],
  directives: [TaskComponent, EditTaskDetailsComponent, NewTaskComponent],
  template: `
  <select (change)="onChange($event.target.value)" class="filter">
    <option value="all">Show All</option>
    <option value="done">Show Done</option>
    <option value="notDone" selected="selected">Show Not Done</option>
  </select>
  <task-display *ngFor="#currentTask of taskList | done:filterDone" (click)="taskClicked(currentTask)" [class.selected]="currentTask === selectedTask" [task]="currentTask">
  </task-display>
  <edit-task-details *ngIf="selectedTask" [task]="selectedTask">
  </edit-task-details>
  <new-task (onSubmitNewTask)="createTask($event)"></new-task>
  `
})

export class TaskListComponent {
  public taskList: Task[];
  public onTaskSelect: EventEmitter<Task>;
  public selectedTask: Task;
  public filterDone: string = "notDone";
  constructor() {
    this.onTaskSelect = new EventEmitter();
  }
  taskClicked(clickedTask: Task): void {
    console.log(clickedTask, "child");
    this.selectedTask = clickedTask;
    this.onTaskSelect.emit(clickedTask);
  }
  // user input coming in as array; need to get indexes of array to get properties of task object
  createTask(description: string, priority: string, category: string): void {
    name = description[0];
    priority = description[1];
    category = description[2];
    this.taskList.push(
      new Task(name, this.taskList.length, priority, category)
    );
  }
  onChange(filterOption) {
    this.filterDone = filterOption;
    console.log(this.filterDone);
  }
}
