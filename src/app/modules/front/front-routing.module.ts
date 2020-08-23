import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FrontComponent } from './front.component';
import { TaskPageComponent } from '../../components/task-page/task-page.component';

const routes: Routes = [
  {
    path: '',
    component: FrontComponent,
  },
  {
    path: 'task', // child route path
    component: TaskPageComponent, // child route component that the router renders
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontRoutingModule { }
