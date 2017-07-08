import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Contacts } from '../models/contacts';

@Component({
  selector: 'app-contact-list-item',
  templateUrl: './contacts-list-item.component.html',
  styleUrls: ['./contacts-list-item.component.css']
})
export class ContactsListItemComponent  {

  @Input()
  contact: Contacts;

  @Output()
  remove: EventEmitter<Contacts> = new EventEmitter();
 
  @Output()
  edit: EventEmitter<Contacts> = new EventEmitter();

  constructor() { }

  editContact(contact: Contacts) {
    this.edit.emit(contact);
  }

  removeContact(contact: Contacts) {
    this.remove.emit(contact);
  }

}
