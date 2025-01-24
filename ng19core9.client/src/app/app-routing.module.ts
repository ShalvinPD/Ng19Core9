import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupsComponent } from './groups/groups.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AddcontactComponent } from './contacts/addcontact/addcontact.component';
import { SpecializationComponent } from './specialization/specialization.component';
import { ContactDetailsComponent } from './contacts/contact-details/contact-details.component';
import { ContactDeleteComponent } from './contacts/contact-delete/contact-delete.component';

const routes: Routes = [
  {path : 'groups', component : GroupsComponent},
  {path : 'contacts', component: ContactsComponent},
  {path: 'contacts/add', component: AddcontactComponent},
  {path: 'contacts/:id', component: ContactDetailsComponent},
  {path: 'contacts/:id/delete', component: ContactDeleteComponent},
  {path: 'specialization', component : SpecializationComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
