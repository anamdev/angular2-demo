import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
 
import { AppComponent } from './app.component';
import { routing }        from './app.routes';

import { ContactsService } from './services/contacts.service';
import { ContactsHeaderComponent } from './contacts-header/contacts-header.component';
import { ContactsFooterComponent } from './contacts-footer/contacts-footer.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactsListItemComponent } from './contacts-list-item/contacts-list-item.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ApiService } from './services/api.service';


@NgModule({
  declarations: [
    AppComponent,
    ContactsHeaderComponent,
    ContactsFooterComponent,
    ContactsListComponent,
    ContactsListItemComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [ContactsService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }