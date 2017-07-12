import { Injectable } from '@angular/core';
import { Contacts } from '../models/contacts';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ContactsService {
  lastId: number = 0;

  contactsArr: Contacts[] = [];

  constructor(private api: ApiService) { }

  // Simulate POST /contactsArr
  addContact(contacts: Contacts): Observable<Contacts> {
    return this.api.createContacts(contacts);
  }

  // Simulate DELETE /contactsArr/:id
  deleteContactById(id: number): Observable<Contacts> {
    return this.api.deleteContactsById(id);
  }

  // Simulate PUT /contactsArr/:id
  updateContactById(id: number, values: Contacts): Observable<Contacts> {
    return this.api.updateContacts(id, values);
  }

  // Simulate GET /contactsArr
  getAllContacts(): Observable<Contacts[]> {
     return this.api.getAllContacts();
  }

  // Simulate GET /contactsArr/:id
  getContactById(id: number): Observable<Contacts>  {
    return this.api.getContactsById(id);
  }

}
