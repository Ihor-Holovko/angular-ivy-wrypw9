import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AppRoutingModule } from './app-routing.module';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { FrontPageComponent } from './pages/front-page/front-page.component';
import { TaskPageComponent } from './pages/task-page/task-page.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent, TasksListComponent, AdminPageComponent, FrontPageComponent, TaskPageComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
