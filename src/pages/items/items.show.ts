import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Item } from './item';
import { ItemsService } from './items.service';

@Component({
  templateUrl: 'items.show.html',
  providers: [ItemsService]
})
export class ItemsShowPage {
  item: Item;
  constructor(
    public navCtrl: NavController,
    private navParams: NavParams
  ) {
    this.item = navParams.data.item;
  }

  // ngOnInit(): void {
  // }
  goBack() {
    this.navCtrl.pop();
  }
}
