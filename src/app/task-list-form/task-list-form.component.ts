import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
} from '@angular/forms';
@Component({
  selector: 'app-task-list-form',
  templateUrl: './task-list-form.component.html',
  styleUrls: ['./task-list-form.component.css']
})
export class TaskListFormComponent {

  listTask:FormGroup
  constructor(
    private fb:FormBuilder
  ){
    this.listTask=this.fb.group({
      title:['', Validators.required],
      task:['',Validators.required],
      priority:['',Validators.required]
    })
  }
  onSubmit(){
    
  }
}
