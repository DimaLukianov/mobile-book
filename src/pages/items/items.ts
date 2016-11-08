import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Item } from './item';
import { ItemsService } from './items.service';
import { ItemsShowPage } from './items.show';


@Component({
  templateUrl: 'items.html',
  providers: [ItemsService]
})
export class ItemsPage {
  items: Item[];
  constructor(
    private itemsService: ItemsService,
    private navCtrl: NavController
  ) {
    this.itemsService.getItems().then(items => this.items = items);
  }

  // ngOnInit(): void {
  // }
  showItem(item: number):void {
    this.navCtrl.push(ItemsShowPage, {
       item: item
     });
  }
}
