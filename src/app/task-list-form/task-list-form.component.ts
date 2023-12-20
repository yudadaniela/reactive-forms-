import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TaskListService } from '../service/task-list.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-task-list-form',
  templateUrl: './task-list-form.component.html',
  styleUrls: ['./task-list-form.component.css'],
})
export class TaskListFormComponent {
  @ViewChild('inputPriority') inputPriority!: ElementRef;
  listTask: FormGroup;
  constructor(
    private fb: FormBuilder,
    private serviceTaskList: TaskListService
  ) {
    this.listTask = this.fb.group({
      id: uuidv4(),
      title: ['', Validators.required],
      task: ['', Validators.required],
      priority: ['', Validators.required],
    });
  }
  onSubmit() {
    // console.log(this.listTask.value);
    const taskList = this.serviceTaskList.addTask(this.listTask.value);
    //console.log(taskList);
  }
  getPriorityColor(): string {
    const priorityValue = this.inputPriority.nativeElement.value;
    console.log(priorityValue);

    switch (priorityValue) {
      case 'alta':
        return 'red';
        break;
      case 'media':
        return 'orange';
        break;
      case 'baja':
        return 'blue';
        break;
      default:
        return 'white';
    }
  }
}
