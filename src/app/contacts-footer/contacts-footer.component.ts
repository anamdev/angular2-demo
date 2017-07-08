import { Component, Input } from '@angular/core';
import { Contacts } from '../models/contacts';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-contacts-footer',
  templateUrl: './contacts-footer.component.html',
  styleUrls: ['./contacts-footer.component.css']
})

export class ContactsFooterComponent  {

  @Input()
  contacts: Contacts[];
 
  constructor(sharedService: SharedService) { 
    this.contacts = sharedService.contacts;
  }
  
}
