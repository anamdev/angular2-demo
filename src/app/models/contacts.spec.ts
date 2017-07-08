import {Contacts} from './contacts';

describe('Contacts', () => {
  it('should create an instance', () => {
    expect(new Contacts()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    let contacts = new Contacts({
      name: 'Anoop',
      mobileNumber: 9988121212,
      email: 'anp@gmail.com'
    });
    expect(contacts.name).toEqual('Anoop');
    expect(contacts.mobileNumber).toEqual(9988121212);
    expect(contacts.email).toEqual('anp@gmail.com');
  });
});
