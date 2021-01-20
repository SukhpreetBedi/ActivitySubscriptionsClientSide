import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class SubscribersService {
  constructor(private http: HttpClient) { }
  apiUrl = 'http://localhost:60378';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  getSubscriber() {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.get(this.apiUrl + '/Subscribers');
  }

  postSubscriber(subscriber) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post(this.apiUrl + '/Subscribers', subscriber);
  }

  putSubscriber(id, subscriber) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.put(this.apiUrl + '/Subscribers/' + id, subscriber);
  }
  deleteSubscriber(id) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.delete(this.apiUrl + '/Subscribers/' + id);
  }
  getActivities() {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.get(this.apiUrl + '/Subscribers/getAllActivities');
  }

}
