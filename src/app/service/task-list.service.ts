import { Injectable } from '@angular/core';
import { Task } from '../task';

@Injectable({
  providedIn: 'root'
})
export class TaskListService {
  taskList:Task[]=[]
  
  addTask(task:Task){
    if (task){
      this.taskList.push(task)
      localStorage.setItem('taskList', JSON.stringify(this.taskList))
    }
    
  }
  getListTask(){
    return JSON.parse(localStorage.getItem('taskList')||'[]')
  }
}
