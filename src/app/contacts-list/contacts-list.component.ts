import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contacts } from '../models/contacts';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent {

  @Input()
  contacts: Contacts[];

  @Output()
  remove: EventEmitter<Contacts> = new EventEmitter();

  @Output()
  edit: EventEmitter<Contacts> = new EventEmitter();

  constructor() { }
  
  onEditContact(contact: Contacts) {
    this.edit.emit(contact);
  }

  onRemoveContact(contact: Contacts) {
    this.remove.emit(contact);
  }
}
