import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactsService } from '../services/contacts.service';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit {
  @Output() selectedContact: EventEmitter<Contact> = new EventEmitter();
  contacts: Array<Contact>
  
  constructor(private contactsService: ContactsService) { }

  ngOnInit() {
    this.loadContacts();
  }
  
  private loadContacts(): void {
    this.contactsService.getContacts()
    .subscribe(contacts => {
      this.contacts = contacts
      this.selectedContact.emit(contacts[0])
    })
  }

  selectContact(contact: Contact) {
    this.selectedContact.emit(contact);
  }
}
