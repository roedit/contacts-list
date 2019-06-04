import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Country } from '../models/country';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Address } from '../models/address';
import { CountriesService } from '../services/countries.service';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss']
})
export class AddressFormComponent implements OnInit {
  @Output() close: EventEmitter<any> = new EventEmitter();
  @Output() save: EventEmitter<Address> = new EventEmitter();

  countries: any = [];
  addressForm: FormGroup;

  constructor(private fb: FormBuilder, private countriesService: CountriesService) {
    this.addressForm = fb.group({
      'street1': [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(100)])],
      'street2': [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(100)])],
      'town': [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(100)])],
      'country': ['GB', Validators.required]
    })
   }

  ngOnInit() {
    this.countriesService.countries.subscribe(countries => this.countries = countries);
  }

  onFormSubmit(form) {
    if(this.addressForm.status === 'VALID' && this.addressForm.touched) {
      this.save.emit(form);
    }
  }

}
