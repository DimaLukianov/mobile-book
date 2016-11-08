import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { GlobalVars } from '../../app/global-vars';

import 'rxjs/add/operator/toPromise';

import { Item } from './item';

@Injectable()
export class ItemsService {
  itemsUrl: string;
  constructor(
    private globalVars: GlobalVars,
    private http: Http
  ) {
    this.itemsUrl = globalVars.getHostName() + '/api/items';
  }

  getItems(): Promise<Item[]> {
    return this.http.get(this.itemsUrl)
               .toPromise()
               .then(response => response.json().items as Item[])
               .catch(this.handleError);
  }

  // getItemById(itemId: number): Promise<Item> {
  //   return this.http.get(this.itemsUrl + '/' + itemId)
  //   .toPromise()
  //   .then(response => response.json().item as Item)
  //   .catch(this.handleError);
  // }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
