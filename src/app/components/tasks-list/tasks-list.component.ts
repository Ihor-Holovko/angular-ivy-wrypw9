import { Component, OnInit, Input } from '@angular/core';
import { ITask } from 'src/app/models/ITask';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {

  @Input() tasksArr: ITask[];

  // @Output() selectAccountType: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    console.log('ngOnInit TasksListComponent');
  }

}
