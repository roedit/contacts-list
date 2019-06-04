import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  public contactsUrl: string = 'contacts';

  constructor(private httpService: HttpService) { }

  getContacts(): Observable<any> {
    return this.httpService.get(this.contactsUrl);
  }
}
