import { Injectable } from '@angular/core';
import { Contacts } from '../models/contacts';

@Injectable()
export class SharedService {

  isUserLoggedIn: string;

  constructor() { }

  private _contacts:Array<Contacts> = [];
  
  get contacts():Array<Contacts> {
    return this._contacts;
  }

  set contacts(value:Array<Contacts>) {
    this._contacts = value;
  }

}
