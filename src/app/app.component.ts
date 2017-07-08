import { Component } from '@angular/core';
import { Contacts } from './models/contacts';
import { ContactsService } from './services/contacts.service';
import { SharedService } from './services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SharedService]
})
export class AppComponent {

  contacts: Contacts = new Contacts();

  private contactsService: ContactsService;
  private sharedService: SharedService;

  constructor(contactsService: ContactsService, sharedService: SharedService) {
    this.contactsService = contactsService;
    this.sharedService = sharedService;
  }
  
}
