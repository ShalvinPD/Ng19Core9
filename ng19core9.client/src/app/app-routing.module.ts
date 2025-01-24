import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupsComponent } from './groups/groups.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AddcontactComponent } from './contacts/addcontact/addcontact.component';
import { SpecializationComponent } from './specialization/specialization.component';

const routes: Routes = [
  {path : 'groups', component : GroupsComponent},
  {path : 'contacts', component: ContactsComponent},
  {path: 'contacts/add', component: AddcontactComponent},
  {path: 'specialization', component : SpecializationComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
