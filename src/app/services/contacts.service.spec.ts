import {TestBed, async, inject} from '@angular/core/testing';
import {Contacts} from './contacts';
import {ContactsService} from './contacts.service';

describe('ContactsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactsService]
    });
  });

  it('should ...', inject([ContactsService], (service: ContactsService) => {
    expect(service).toBeTruthy();
  }));

  describe('#getAllContacts()', () => {

    it('should return an empty array by default', inject([ContactsService], (service: ContactsService) => {
      expect(service.getAllContacts()).toEqual([]);
    }));

    it('should return all contacts', inject([ContactsService], (service: ContactsService) => {
      let contact1 = new Contacts({name: 'Anoop', mobileNumber: 9988119900});
      let contact2 = new Contacts({name: 'Raj', mobileNumber: 9977334400});
      service.addContact(contact1);
      service.addContact(contact2);
      expect(service.getAllContacts()).toEqual([contact1, contact2]);
    }));

  });

  describe('#save(contact)', () => {

    it('should automatically assign an incrementing id', inject([ContactsService], (service: ContactsService) => {
      let contact1 = new Contacts({name: 'Anoop', mobileNumber: 9988119900});
      let contact2 = new Contacts({name: 'Raj', mobileNumber: 9977334400});
      service.addContact(contact1);
      service.addContact(contact2);
      expect(service.getContactById(1)).toEqual(contact1);
      expect(service.getContactById(2)).toEqual(contact2);
    }));

  });

  describe('#deleteContactById(id)', () => {

    it('should remove contact with the corresponding id', inject([ContactsService], (service: ContactsService) => {
      let contact1 = new Contacts({name: 'Anoop', mobileNumber: 9988119900});
      let contact2 = new Contacts({name: 'Raj', mobileNumber: 9977334400});
      service.addContact(contact1);
      service.addContact(contact2);
      expect(service.getAllContacts()).toEqual([contact1, contact2]);
      service.deleteContactById(1);
      expect(service.getAllContacts()).toEqual([contact2]);
      service.deleteContactById(2);
      expect(service.getAllContacts()).toEqual([]);
    }));

    it('should not removing anything if contact with corresponding id is not found', inject([ContactsService], (service: ContactsService) => {
      let contact1 = new Contacts({name: 'Anoop', mobileNumber: 9988119900});
      let contact2 = new Contacts({name: 'Raj', mobileNumber: 9977334400});
      service.addContact(contact1);
      service.addContact(contact2);
      expect(service.getAllContacts()).toEqual([contact1, contact2]);
      service.deleteContactById(3);
      expect(service.getAllContacts()).toEqual([contact1, contact2]);
    }));

  });

  describe('#updateContactById(id, values)', () => {

    it('should return contact with the corresponding id and updated data', inject([ContactsService], (service: ContactsService) => {
      let contact = new Contacts({name: 'Anoop', mobileNumber: 9988119900});
      service.addContact(contact);
      let updatedContact = service.updateContactById(1, {
        name: 'new name'
      });
      expect(updatedContact.name).toEqual('new name');
    }));

    it('should return null if contact is not found', inject([ContactsService], (service: ContactsService) => {
      let contact = new Contacts({name: 'Anoop', mobileNumber: 9988119900});
      service.addContact(contact);
      let updatedContact = service.updateContactById(2, {
        name: 'new name'
      });
      expect(updatedContact).toEqual(null);
    }));

  });

});
