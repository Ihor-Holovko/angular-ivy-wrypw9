import { Component, OnInit, Input } from '@angular/core';
import { ITask } from 'src/app/models/ITask';
import {FormControl, FormGroup, Validators, FormControlName, FormControlDirective} from '@angular/forms';

import { Router } from '@angular/router';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {

  @Input() tasksArr: ITask[];
  @Input() canEdit = true;
  taskFormArr: FormGroup[] = [];
  submitted = false;

  constructor(private router: Router,
              private servace: MainService) { }

  ngOnInit(): void {
    this.servace.onTaskArrState.subscribe(data => {
      if (data){
        this.tasksArr = [];
        this.taskFormArr = [];
        this.tasksArr = data;
        this.tasksArr.forEach((value: ITask) => {
          this.createForm(value);
        });
      }

    });
  }

  createForm(value: ITask): void {
    const formGroup = new FormGroup({
      'title': new FormControl(value.title, Validators.required),
      'status': new FormControl(value.status, Validators.required),
    });
    this.taskFormArr.push(formGroup);
  }

  onSubmit(index: number): void {
    this.submitted = true;
    if (this.taskFormArr[index].value) {
      this.tasksArr.push(this.taskFormArr[index].value);
    }
    localStorage.setItem('tasksArr', JSON.stringify(this.tasksArr));
  }

  toFullTask(): void {
    if (this.canEdit === false) {
      this.router.navigate(['/front/task']);
    }
  }

  changeTitle(index: number): void {
    this.tasksArr[index].title = this.taskFormArr[index].get('title').value;
    this.servace.setTaskArrState(this.tasksArr);
    localStorage.setItem('tasksArr', JSON.stringify(this.tasksArr));
  }

  changeStatus(index: number): void {
    this.tasksArr[index].status = this.taskFormArr[index].get('status').value;
    this.servace.setTaskArrState(this.tasksArr);
    localStorage.setItem('tasksArr', JSON.stringify(this.tasksArr));
  }

}
