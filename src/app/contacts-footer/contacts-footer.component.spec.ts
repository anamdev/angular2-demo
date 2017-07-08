import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsFooterComponent } from './contacts-footer.component';

describe('ContactsFooterComponent', () => {
  let component: ContactsFooterComponent;
  let fixture: ComponentFixture<ContactsFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactsFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
