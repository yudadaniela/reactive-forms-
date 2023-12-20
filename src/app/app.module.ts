import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskListComponentComponent } from './task-list-component/task-list-component.component';
import { TaskListFormComponent } from './task-list-form/task-list-form.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    FormComponent,
    TaskListComponentComponent,
    TaskListFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
