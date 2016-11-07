import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Item } from './item';

@Injectable()
export class ItemsService {
  itemsUrl: string = 'http://localhost:3000/api/items';
  constructor(private http: Http) {
  }

  getItems(): Promise<Item[]> {
    return this.http.get(this.itemsUrl)
               .toPromise()
               .then(response => response.json().items as Item[])
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
