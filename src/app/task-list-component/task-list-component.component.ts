import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { TaskListService } from '../service/task-list.service';
import { TaskListFormComponent } from '../task-list-form/task-list-form.component';

@Component({
  selector: 'app-task-list-component',
  templateUrl: './task-list-component.component.html',
  styleUrls: ['./task-list-component.component.css'],
})
export class TaskListComponentComponent implements OnInit, AfterViewInit {
  @ViewChild(TaskListFormComponent) form!: TaskListFormComponent;
  priorityColor:string='white'
  items: string[] = [];
  
  constructor(private serviceTaskList: TaskListService) {}
  ngOnInit(): void {
   this.getTaskList();
  }

  getTaskList() {
    return this.serviceTaskList.getListTask();
  }

  getColor(color:string) {
    this.priorityColor=color
 }
  ngAfterViewInit() {}
}
