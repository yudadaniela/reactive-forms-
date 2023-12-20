import { Component, ViewChild, ElementRef, Output, EventEmitter, AfterViewInit, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TaskListService } from '../service/task-list.service';
import { v4 as uuidv4 } from 'uuid';


@Component({
  selector: 'app-task-list-form',
  templateUrl: './task-list-form.component.html',
  styleUrls: ['./task-list-form.component.css'],
})
export class TaskListFormComponent implements  AfterViewInit {
  //@ViewChild('inputPriority') inputPriority!: ElementRef;
  @Output() newListTaskEvent=new EventEmitter<string>()
  
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
  
  ngAfterViewInit(): void {
   this.listTask.get('priority')?.valueChanges.subscribe((newChange)=>{
    console.log(this.getPriorityColor(newChange));
    this.getPriorityColor(newChange)
   })
  
  }
  onSubmit() {
    // console.log(this.listTask.value);
    const taskList = this.serviceTaskList.addTask(this.listTask.value);
    //console.log(taskList);
  }
  getPriorityColor(priority:string): void {
    let color:string
    // const priorityValue = this.inputPriority.nativeElement.value
    // console.log(priorityValue);
    //  return 'hola'
    switch (priority) {
      case 'alta':
        color='red';
        break;
      case 'media':
        color= 'orange';
        break;
      case 'baja':
        color=  'blue';
        break;
      default:
        color=  'white';
    }
    this.newListTaskEvent.emit(color)
   }
   
}
