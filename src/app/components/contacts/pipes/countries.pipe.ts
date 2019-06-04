import { Pipe, PipeTransform, OnDestroy } from '@angular/core';
import { CountriesService } from '../services/countries.service';
import { Subscription } from 'rxjs';
import { Country } from '../models/country';

@Pipe({
  name: 'countries'
})
export class CountriesPipe implements PipeTransform, OnDestroy {
  private countriesSubscription: Subscription;
  private country: string;

  constructor(private countriesService: CountriesService) {}

  ngOnDestroy() {
    this.countriesSubscription.unsubscribe();
  }
  
  transform(value: any, args?: any): any {
    this.countriesSubscription = this.countriesService.countries.subscribe((countries: Country[]) => {
      this.country = countries.filter(country => country.iso2 === value)[0].name;
    })

    return this.country;
  }
}
