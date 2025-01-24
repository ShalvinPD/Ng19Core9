import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Contact } from '../../models/contact';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-addcontact',
  imports: [FormsModule],
  templateUrl: './addcontact.component.html',
  styleUrl: './addcontact.component.css'
})
export class AddcontactComponent {

  contact: Contact = {
     contactId : 0,
     contactName: ""
  };
  http = inject(HttpClient);
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  Save()
  {
    this.http.post<Contact>('/api/contacts', this.contact, this.httpOptions)
      .subscribe(
      (data: any) => {
        console.log(data);
        alert('Record Saved')
      });
  }
}
