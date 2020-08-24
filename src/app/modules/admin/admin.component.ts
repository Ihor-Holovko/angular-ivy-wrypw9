import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { ITask } from '../../models/ITask';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  contactForm: FormGroup;
  contact = { title: '', description: '', status: 0 };
  submitted = false;
  tasksArr: ITask[] = [];

  constructor(private servace: MainService) { }

  ngOnInit(): void {
    this.createForm();
    const tmpTaskArr = JSON.parse(localStorage.getItem('tasksArr'));
    if (tmpTaskArr) {
      this.tasksArr = tmpTaskArr;
      this.servace.setTaskArrState(this.tasksArr);
    }
  }

  createForm(): void {
    this.contactForm = new FormGroup({
      'title': new FormControl(this.contact.title, Validators.required),
      'description': new FormControl(this.contact.description, Validators.required),
      'status': new FormControl(this.contact.status, Validators.required),
    });
    this.contactForm.get('status').setValue('new');
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.contactForm.value) {
      this.tasksArr.push(this.contactForm.value);
      this.servace.setTaskArrState(this.tasksArr);
      localStorage.setItem('tasksArr', JSON.stringify(this.tasksArr));
    }
  }
}
