import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
import { JsonPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contacts',
  imports: [JsonPipe, RouterLink],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent implements OnInit {
  ngOnInit(): void {
    this.getContacts();
  }

  http = inject(HttpClient)

  contacts: Contact[] = [];

  triggerDelete(id:number){
    let needToDelete = confirm('Are you sure you want to delete ?')
    if(needToDelete){
      this.http.delete(`/api/contacts/${id}`).subscribe({
        next:() =>{
          this.getContacts()
        } 
      })
    }
  }

   getContacts() {
      this.http.get<Contact[]>('/api/contacts').subscribe({
        next: (result) => {
          this.contacts = result;
        },
        error: (error) => {
          console.error(error);
        }
   });
}

}