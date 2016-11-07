import { Component } from '@angular/core';
import { Item } from './item';
import { ItemsService } from './items.service';

@Component({
  templateUrl: 'items.html',
  providers: [ItemsService]
})
export class ItemsPage {
  items: Item[];
  constructor(private itemsService: ItemsService) {
    this.itemsService.getItems().then(items => this.items = items);
  }

  // ngOnInit(): void {
  // }
}
