import { Component, OnInit } from '@angular/core';
import { Contacts } from '../models/contacts';
import { ContactsService } from '../services/contacts.service';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

 private contactsService: ContactsService;
 private sharedService: SharedService;
  
  saveButton: string = "save";
  newContact: Contacts = new Contacts();

  constructor(contactsService: ContactsService, sharedService: SharedService) {
    this.contactsService = contactsService;
    this.sharedService = sharedService;
  }

  addContact() {
    let editContactId = this.newContact.id;
    if(editContactId) {
      this.contactsService.updateContactById(editContactId, this.newContact);
      this.saveButton = "save";
    } else {
      this.contactsService.addContact(this.newContact);
    }
    this.newContact = new Contacts();
  }

  onEditContact(contact: Contacts) {
    this.newContact = contact;
    this.saveButton = "update";
  }

  onRemoveContact(contact: Contacts) {
    this.contactsService.deleteContactById(contact.id);
  }

  get contacts() {
    this.sharedService.contacts = this.contactsService.getAllContacts();
    return this.sharedService.contacts
  }

  ngOnInit() {

  }

}
