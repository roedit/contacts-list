import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
import { CountriesService } from '../services/countries.service';

@Component({
  selector: 'app-contacts-container',
  templateUrl: './contacts-container.component.html',
  styleUrls: ['./contacts-container.component.scss']
})
export class ContactsContainerComponent implements OnInit {
  contact: Contact;
  constructor(private countriesService: CountriesService) { }

  ngOnInit() {
    this.countriesService.getCountries();
  }

  setSelectedContact(contact: Contact) {
    this.contact = contact;
  }
}
