import { Component, OnInit } from '@angular/core';
import { ITask } from 'src/app/models/ITask';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.css']
})
export class FrontComponent implements OnInit {
  tasksArr: ITask[] = [];
  constructor() { }

  ngOnInit(): void {
    console.log('ngOnInit FrontComponent');

    const tmpTaskArr = JSON.parse(localStorage.getItem('tasksArr'));

    if (tmpTaskArr) {
      this.tasksArr = tmpTaskArr;
    }
  }

}
