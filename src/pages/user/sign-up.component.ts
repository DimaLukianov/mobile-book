import { Component } from '@angular/core';

import { UserService } from './user.service';

import { User } from './user';

@Component({
  selector: 'registration',
  template: `
    <div class="row">
      <div class="columns text-center">
        <h1>Sing up</h1>
      </div>
      <div class="small-12 columns">
        <form (submit)="signUp($event)">
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
            <div class="small-12 medium-6 large-4 columns">
              <input id="userPasswordConfirmation" type="password" placeholder="Password confirmation" />
            </div>
          </div>

          <div class="row align-center">
            <div class="small-12 medium-6 large-4 columns text-center">
              <input class="button success" type="submit" value="Sign Up" />
            </div>
          </div>
        </form>
      </div>
    </div>
  `,
  providers: [UserService]
})
export class SignUpComponent {
  user: User;

  constructor(
    private userService: UserService
  ) {}

  signUp(e: any): void {
    e.preventDefault();
    let form = e.target;
    if (form.userPassword.value.length >= 6 &&  form.userPassword.value == form.userPasswordConfirmation.value) {
      this.user = new User(form.userEmail.value, form.userPassword.value);
      this.userService.createUser(this.user);
    }
  }
}
