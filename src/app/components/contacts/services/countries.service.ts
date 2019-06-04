import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private countriesUrl: string = 'countries';
  public countries = new ReplaySubject(1);

  constructor(private httpService: HttpService) { }

  getCountries() {
    this.httpService.get(`${this.countriesUrl}`).subscribe( countries => this.countries.next(countries))
  }
}
