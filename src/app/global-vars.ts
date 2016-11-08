import {Injectable} from 'angular2/core';

@Injectable()
export class GlobalVars {
  hostName: string;
  constructor() {
    this.hostName = 'http://localhost:3000';
  }

  getHostName() {
    return this.hostName;
  }
}
