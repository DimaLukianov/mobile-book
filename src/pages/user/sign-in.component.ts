import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from './user.service';
// import { NotificationsService } from 'angular2-notifications';

import { User } from './user';

@Component({
    selector: 'registration',
    template: `
    <div class="row">
      <div class="columns text-center">
        <h1>Sing In</h1>
      </div>
      <div class="small-12 columns">
        <form (submit)="signIn($event)">
          <div class="row align-center">
            <div class="small-12 medium-6 large-4 columns">
              <input id="userEmail" type="email" placeholder="E-mail" />
            </div>
          </div>

          <div class="row align-center">
            <div class="small-12 medium-6 large-4 columns">
              <input id="userPassword" type="password" placeholder="Password" />
            </div>
          </div>

          <div class="row align-center">
            <div class="small-12 medium-6 large-4 columns text-center">
              <input class="button success" type="submit" value="Sign In" />
            </div>
          </div>
        </form>
      </div>
    </div>
    <simple-notifications [options]="options"></simple-notifications>
  `,
    providers: [UserService]
})
export class SignInComponent {
    user: User;

    public options = {
        timeOut: 2000,
        lastOnBottom: true,
        clickToClose: true,
        maxLength: 0,
        maxStack: 7,
        showProgressBar: true,
        pauseOnHover: true,
        preventDuplicates: false,
        preventLastDuplicates: 'visible',
        rtl: false,
        animate: 'scale',
        position: ['right', 'top']
    };

    constructor(
        private userService: UserService
        // private router: Router,
        // private notification: NotificationsService
    ) {}

    signIn(e: any): void {
        e.preventDefault();
        // this.notification.success('wer', 'wer');

        let form = e.target;
        // this.router.navigate(['/blogs']);

        if (form.userPassword.value.length > 0 && form.userEmail.value.length) {
            this.user = new User(form.userEmail.value, form.userPassword.value);
            this.userService.authenticateUser(this.user);
        }
    }
}
