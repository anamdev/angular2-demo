import { Injectable } from '@angular/core';
import { Contacts } from '../models/contacts';

@Injectable()
export class ContactsService {
  lastId: number = 0;

  contactsArr: Contacts[] = [];

  constructor() { }

  // Simulate POST /contactsArr
  addContact(contacts: Contacts): ContactsService {
    if (!contacts.id) {
      contacts.id = ++this.lastId;
    }
    this.contactsArr.push(contacts);
    return this;
  }

  // Simulate DELETE /contactsArr/:id
  deleteContactById(id: number): ContactsService {
    this.contactsArr = this.contactsArr
      .filter(contacts => contacts.id !== id);
    return this;
  }

  // Simulate PUT /contactsArr/:id
  updateContactById(id: number, values: Object = {}): Contacts {
    let contacts = this.getContactById(id);
    if (!contacts) {
      return null;
    }
    Object.assign(contacts, values);
    return contacts;
  }

  // Simulate GET /contactsArr
  getAllContacts(): Contacts[] {
    return this.contactsArr;
  }

  // Simulate GET /contactsArr/:id
  getContactById(id: number): Contacts {
    return this.contactsArr
      .filter(contacts => contacts.id === id)
      .pop();
  }

}
