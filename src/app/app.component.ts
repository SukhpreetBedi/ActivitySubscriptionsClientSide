import { Component, OnInit } from '@angular/core';
import {SubscribersService} from '../Services/subscribers.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'EmpSignUpForm';

  constructor(private subscribersService: SubscribersService) { }
  data: any;
  activities: any;
  EmpSignUpForm: FormGroup;
  submitted = false;
  EventValue: any = 'Save';

  ngOnInit() {
    this.getActivities();
    this.EmpSignUpForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      emailAddress: new FormControl('', [Validators.required]),
      activityId: new FormControl('', [Validators.required]),
      comments: new FormControl(''),
    });
  }
  getActivities() {
    this.subscribersService.getActivities().subscribe((data: any[]) => {
      this.activities = data;
    });
  }
  getSubscribers() {
    this.subscribersService.getSubscriber().subscribe((data: any[]) => {
      this.data = data;
    });
  }
  deleteSubscribers(id) {
    this.subscribersService.deleteSubscriber(id).subscribe((data: any[]) => {
      this.data = data;
      this.getSubscribers();
    });
  }
  Save() {
    console.log('Starting to Save');
    this.submitted = true;

    if (this.EmpSignUpForm.invalid) {
      return;
    }
    this.subscribersService.postSubscriber(this.EmpSignUpForm.value).subscribe((data: any[]) => {
      this.data = data;
      this.resetFrom();
    });
    console.log('Saved successfully');
  }

  resetFrom() {
    this.getSubscribers();
    this.EmpSignUpForm.reset();
    this.EventValue = 'Save';
    this.submitted = false;
  }
}
