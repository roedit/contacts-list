import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { HomeComponent } from './components/home/home.component';
import { ContactsListComponent } from './components/contacts/contacts-list/contacts-list.component';
import { ContactsDetailsComponent } from './components/contacts/contacts-details/contacts-details.component';
import { AddressFormComponent } from './components/contacts/address-form/address-form.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactsListComponent,
    ContactsDetailsComponent,
    AddressFormComponent,
    MainLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
