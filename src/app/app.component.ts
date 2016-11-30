import { Component, ViewChild } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

// import { TabsPage } from '../pages/tabs/tabs';
import { ItemsPage } from '../pages/items/items';
import { NavController } from 'ionic-angular';
import { SignUpComponent } from '../pages/user/sign-up.component';


@Component({
  template: `
    <ion-menu [content]="content">
      <ion-header>
        <ion-toolbar color="light">
          <ion-title>Pages</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ion-list>
          <button ion-item menuClose (click)="openItemsPage()">
            Items
          </button>
          <button ion-item menuClose (click)="openPage(loginPage)">
            Login
          </button>
          <button ion-item menuClose (click)="openSignUpPage()">
            Signup
          </button>
        </ion-list>
      </ion-content>
    </ion-menu>

    <ion-nav id="nav" #myNav #content [root]="rootPage"></ion-nav>
  `
})
export class MyApp {
  @ViewChild('myNav') nav: NavController
  public rootPage = ItemsPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
  ngOnInit() {
      // Let's navigate from TabsPage to Page1
      this.nav.push(ItemsPage);
   }

   openItemsPage() {
     this.nav.push(ItemsPage);
   }

   openSignUpPage() {
     this.nav.push(SignUpComponent);
   }
}
