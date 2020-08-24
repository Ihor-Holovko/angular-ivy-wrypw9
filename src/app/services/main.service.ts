import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import { ITask } from '../models/ITask';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  private taskArrState = new BehaviorSubject<ITask[]>(null);
  public onTaskArrState = this.taskArrState.asObservable();

  constructor() { }

  setTaskArrState(data: ITask[]): void {
    this.taskArrState.next(data);
  }
}
