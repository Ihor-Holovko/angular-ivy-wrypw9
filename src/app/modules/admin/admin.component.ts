import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators, FormControlName, FormControlDirective} from '@angular/forms';
import { ITask } from '../../models/ITask';

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

  constructor() { }

  ngOnInit(): void {
    console.log('ngOnInit AdminComponent');
    this.createForm();
  }

  createForm(): void {

    this.contactForm = new FormGroup({
      'title': new FormControl(this.contact.title, Validators.required),
      'description': new FormControl(this.contact.description, Validators.required),
      'status': new FormControl(this.contact.status, Validators.required),
    });
  }

  onSubmit(): void {
    this.submitted = true;
    console.log('this.contactForm:', this.contactForm.value);
    if (this.contactForm.value) {
      this.tasksArr.push(this.contactForm.value);
    }

    console.log('this.tasksArr:', this.tasksArr);

  }
}
