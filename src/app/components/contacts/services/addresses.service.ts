import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Observable } from 'rxjs';
import { ContactsService } from './contacts.service';
import { Address } from '../models/address';

@Injectable({
  providedIn: 'root'
})
export class AddressesService {
  private addressesUrl: string = 'addresses'
  constructor(private httpService: HttpService, private contactsService: ContactsService) { }

  getAddresses(id: number): Observable<any> {
    return this.httpService.get(`${this.contactsService.contactsUrl}/${id}/${this.addressesUrl}`);
  }

  addAddress(address: Address) {
    return this.httpService.post(`${this.addressesUrl}`, address)
  }
}
