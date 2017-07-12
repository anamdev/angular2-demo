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

  contacts: Contacts[] = [];  
  saveButton: string = "save";
  newContact: Contacts = new Contacts();

  constructor(contactsService: ContactsService, sharedService: SharedService) {
    this.contactsService = contactsService;
    this.sharedService = sharedService;
  }

  addContact() {
    let editContactId = this.newContact.id;
    if(editContactId) {
      this.contactsService
      .updateContactById(editContactId, this.newContact)
      .subscribe(function(){
        this.saveButton = "save"; 
        this.newContact = new Contacts();
      });
    } else {
      let self = this;
      this.contactsService
      .addContact(this.newContact)
      .subscribe(function(){
          self.contacts.push(self.newContact);
          this.newContact = new Contacts();
      });
    }
    
  }

  onEditContact(contact: Contacts) {
    this.newContact = contact;
    this.saveButton = "update";
  }

  onRemoveContact(contact: Contacts) {
    this.contactsService
      .deleteContactById(contact.id)
      .subscribe(
        (_) => {
          this.contacts = this.contacts.filter((t) => t.id !== contact.id);
        }
      );
  }

  ngOnInit() {
    this.contactsService
      .getAllContacts()
      .subscribe(
        (contacts) => {
          this.contacts = contacts;
        }
      );
  }

}
