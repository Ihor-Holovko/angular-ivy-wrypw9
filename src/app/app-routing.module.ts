import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { AppComponent } from './app.component';
import { TaskPageComponent } from './components/task-page/task-page.component';



// const routes: Routes = []; // sets up routes constant where you define your routes

const routes: Routes = [
  {
    path: 'admin',
    component: TaskPageComponent
  },
  {
    path: '',
    component: AppComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
