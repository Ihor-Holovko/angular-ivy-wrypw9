import { Component, OnInit } from '@angular/core';
import { ITask } from 'src/app/models/ITask';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.css']
})
export class FrontComponent implements OnInit {
  tasksArr: ITask[] = [];
  constructor(private servace: MainService) { }

  ngOnInit(): void {
    const tmpTaskArr = JSON.parse(localStorage.getItem('tasksArr'));
    if (tmpTaskArr) {
      this.tasksArr = tmpTaskArr;
      this.servace.setTaskArrState(this.tasksArr);
    }
  }

}
