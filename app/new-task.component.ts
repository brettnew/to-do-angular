import {Component, EventEmitter} from 'angular2/core';
import {Task} from './task.model';


@Component({
  selector: 'new-task',
  outputs: ['onSubmitNewTask'],
  template: `
    <div class="task-form">
      <h3>Create Task</h3>
      <input placeholder="Description" class="col-sm-6 input-lg" #newDescription>
      <select class="col-sm-3" #newPriority>
        <option value="low" selected="selected">Low priority</option>
        <option value="normal">Normal priority</option>
        <option value="high">High priority</option>
      </select>
      <button (click)="addTask(newDescription, newPriority)" class="btn-success btn-lg add-button">Add</button>
    </div>
  `
})

export class NewTaskComponent {
  public onSubmitNewTask: EventEmitter<String[]>;
  constructor(){
    this.onSubmitNewTask = new EventEmitter();
  }
  addTask(userDescription: HTMLInputElement, userPriority: HTMLSelectElement){
    this.onSubmitNewTask.emit([userDescription.value, userPriority.value]);
    userDescription.value = "";
  }
}
