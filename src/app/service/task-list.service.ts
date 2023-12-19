import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskListService {
  taskList:string[]=[]
  constructor() { }
  
  addTask(){
    localStorage.setItem('taskList', JSON.stringify(this.taskList))
  }
  getListTak(){
    return this.taskList
  }
}
