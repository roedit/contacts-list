import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { HomeComponent } from './components/home/home.component';
import { ContactsListComponent } from './components/contacts/contacts-list/contacts-list.component';
import { ContactsDetailsComponent } from './components/contacts/contacts-details/contacts-details.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/home'
      },
      {
        path: 'home',
        component: HomeComponent,
        data: {
          title: 'Home'
        }
      },
      {
        path: 'contacts',
        component: ContactsListComponent,
        data: {
          title: 'Contacts'
        }
      },
      {
        path: 'contacts/:id',
        component: ContactsDetailsComponent,
        data: {
          title: 'Contact details page'
        }
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
