import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontRoutingModule } from './front-routing.module';
import { FrontComponent } from './front.component';
import { SharedModule } from '../../shared.module';
import { TaskPageComponent } from '../../components/task-page/task-page.component';

@NgModule({
  declarations: [FrontComponent, TaskPageComponent],
  imports: [
    CommonModule,
    FrontRoutingModule,
    SharedModule
  ]
})
export class FrontModule { }
