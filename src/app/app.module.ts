import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { 
  MatSidenavModule,
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatCardModule,
  MatGridListModule,
  MatSelectModule,
  MatInputModule,
  MatFormFieldModule
 } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { HomeComponent } from './components/home/home.component';
import { ContactsListComponent } from './components/contacts/contacts-list/contacts-list.component';
import { ContactsDetailsComponent } from './components/contacts/contacts-details/contacts-details.component';
import { AddressFormComponent } from './components/contacts/address-form/address-form.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ToolbarComponent } from './components/shared/toolbar/toolbar.component';
import { ContactsContainerComponent } from './components/contacts/contacts-container/contacts-container.component';
import { CountriesPipe } from './components/contacts/pipes/countries.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactsListComponent,
    ContactsDetailsComponent,
    AddressFormComponent,
    MainLayoutComponent,
    NavbarComponent,
    ToolbarComponent,
    ContactsContainerComponent,
    CountriesPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
