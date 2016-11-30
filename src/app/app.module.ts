import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { GlobalVars } from './global-vars';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ItemsPage } from '../pages/items/items';
import { ItemsShowPage } from '../pages/items/items.show';
import { SignUpComponent } from '../pages/user/sign-up.component';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ItemsPage,
    ItemsShowPage,
    SignUpComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ItemsPage,
    ItemsShowPage,
    SignUpComponent
  ],
  providers: [GlobalVars]
})
export class AppModule {}
