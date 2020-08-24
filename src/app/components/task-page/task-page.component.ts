import { Component, OnInit } from '@angular/core';
import { MainService } from '../../services/main.service';
import { ITask } from '../../models/ITask';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.css']
})
export class TaskPageComponent implements OnInit {
  tasksArr: ITask[];
  tasksIndex: number;
  statusForm: FormControl;

  constructor(private servace: MainService) { }

  ngOnInit(): void {
    this.servace.onTaskArrState.subscribe(data => {
      if (data){
        this.tasksArr = [];
        this.tasksArr = data;
      } else {
        const tmpTaskArr = JSON.parse(localStorage.getItem('tasksArr'));
        if (tmpTaskArr) {
          this.tasksArr = tmpTaskArr;
          this.servace.setTaskArrState(this.tasksArr);
        }
      }
    });

    this.servace.onTaskIndexState.subscribe(data => {
      if (data || data === 0){
        this.tasksIndex = data;
        this.createForm();
        localStorage.setItem('tasksIndex', JSON.stringify(this.tasksIndex));
      } else {
        const tmpTasksIndex = Number(localStorage.getItem('tasksIndex'));
        console.log(tmpTasksIndex);
        this.tasksIndex = tmpTasksIndex;
        this.createForm();
      }
    });
  }

  createForm(): void {
    this.statusForm = new FormControl(this.tasksArr[this.tasksIndex].status);
  }

  changeStatus(): void {
    this.tasksArr[this.tasksIndex].status = this.statusForm.value;
    this.servace.setTaskArrState(this.tasksArr);
    localStorage.setItem('tasksArr', JSON.stringify(this.tasksArr));
  }


}
