import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Contacts } from '../models/contacts';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const API_URL = environment.apiUrl;

@Injectable()
export class ApiService {

  constructor(
    private http: Http
  ) { }

  public getAllContacts(): Observable<Contacts[]> {
    return this.http
      .get(API_URL + '/Contacts/')
      .map(response => {
        const contacts = response.json();
        return contacts.data.map((contact) => new Contacts(contact));
      })
      .catch(this.handleError);
  }

  public createContacts(contact: Contacts): Observable<Contacts> { 
    let headers = new Headers();
    headers.append('Content-Type', 'application/X-www-form-urlencoded');
    let options = new RequestOptions({ headers: headers });

    let body = "name=" + contact.name + "&mobileNumber=" + contact.mobileNumber + "&email=" + contact.email;
    return this.http
      .post(API_URL + '/Contacts/', body, options)
      .map(response => { console.log(response);
        return new Contacts(response.json());
      })
      .catch(this.handleError);
  }

  public getContactsById(contactId: number): Observable<Contacts> {
    return this.http
      .get(API_URL + '/Contacts/' + contactId)
      .map(response => {
        return new Contacts(response.json());
      })
      .catch(this.handleError);
  }

  public updateContacts(id: number, contact: Contacts): Observable<Contacts> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/X-www-form-urlencoded');
    let options = new RequestOptions({ headers: headers });

    let body = "name=" + contact.name + "&mobileNumber=" + contact.mobileNumber + "&email=" + contact.email;
    return this.http
      .put(API_URL + '/Contacts/' + id, body, options)
      .map(response => {
        return new Contacts(response.json());
      })
      .catch(this.handleError);
  }

  public deleteContactsById(contactId: number): Observable<null> {
    return this.http
      .delete(API_URL + '/Contacts/' + contactId)
      .map(response => null)
      .catch(this.handleError);
  }

  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }
}