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
      <label>Category:</label>
      <select class="col-sm-3" #newCategory>
        <option value="Work" selected="selected">Work</option>
        <option value="Hobby">Hobby</option>
        <option value="Home">Home</option>
      </select>
      <button (click)="addTask(newDescription, newPriority, newCategory)" class="btn-success btn-lg add-button">Add</button>
    </div>
  `
})

export class NewTaskComponent {
  public onSubmitNewTask: EventEmitter<String[]>;
  constructor(){
    this.onSubmitNewTask = new EventEmitter();
  }
  addTask(userDescription: HTMLInputElement, userPriority: HTMLSelectElement, userCategory: HTMLSelectElement){
    this.onSubmitNewTask.emit([userDescription.value, userPriority.value, userCategory.value]);
    console.log(userCategory.value);
    userDescription.value = "";
  }
}
