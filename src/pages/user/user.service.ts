import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
// import { NotificationsService } from 'angular2-notifications';


import { User } from './user';

@Injectable()
export class UserService {
  private userUrl: string = '/api/auth/';
  private headers: Headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(
    private http: Http
  ) {}


  createUser(user: User): void {
    let body = JSON.stringify({ user });
    let options = new RequestOptions({ headers: this.headers });
    console.log('-----> CREATE USER');

    this.http.post(this.userUrl, body, options)
        .subscribe(
            res => {
              // this.router.navigate(['/sign_in']);
              console.log('Sign Up Success! ->', res);
            },
            res => {
              console.log('SIGNUP ERROR -> ', res);
              let errMsg = (res._body) ? res._body :
                  res.status ? `${res.status} - ${res.statusText}` : 'Server error';
              // this.notification.error('Error', errMsg);
            }
        );
  }

  authenticateUser(user: User): void {
    // let notification = this.notification;
    let body = JSON.stringify({ email: user.email, password: user.password });
    let options = new RequestOptions({ headers: this.headers });
    console.log('-----> AUTH USER', user.email);

    this.http.post(this.userUrl + 'sign_in', body, options)
        .subscribe(
            res => {
              let body = res.json();
              localStorage.setItem('token', body.token);
              localStorage.setItem('currentUserId', body.user_id);
              // this.router.navigate(['/blogs']);

              // this.notification.success('Success', 'Eah!');
            },
            res => {
              console.log(res);
              let errMsg = (res._body) ? JSON.parse(res._body).error :
                  res.status ? `${res.status} - ${res.statusText}` : 'Server error';
              // this.notification.error('Error', errMsg);
            }
        );
  }

}
