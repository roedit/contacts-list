import { Component, Input, SimpleChanges, OnChanges } from '@angular/core';
import { Contact } from '../models/contact';
import { AddressesService } from '../services/addresses.service';
import { Address } from '../models/address';

@Component({
  selector: 'app-contacts-details',
  templateUrl: './contacts-details.component.html',
  styleUrls: ['./contacts-details.component.scss']
})
export class ContactsDetailsComponent implements OnChanges {
  @Input() contact: Contact;

  addresses: Address[];
  enableAdd: boolean = true;

  constructor(private addressesService: AddressesService) { }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.contact && changes.contact.currentValue !== changes.contact.previousValue) {
      this.loadContactAddresses();
    }
  }

  loadContactAddresses() {
    this.addressesService.getAddresses(this.contact.id).subscribe(addresses => this.addresses = addresses)
  }

  addAddress(address: Address) {
    address.contactId = this.contact.id;
    this.addressesService.addAddress(address).subscribe(() => {
      this.enableAdd = true;
      this.loadContactAddresses();
    })
  }

}
