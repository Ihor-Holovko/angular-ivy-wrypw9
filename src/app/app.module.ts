import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AppRoutingModule } from './app-routing.module';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import { TaskPageComponent } from './components/task-page/task-page.component';



@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule],
  declarations: [ AppComponent, HelloComponent, TasksListComponent, TaskPageComponent ],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }
