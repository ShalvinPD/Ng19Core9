import { Component, inject, OnInit } from '@angular/core';
import { Contact } from '../../models/contact';
import { HttpClient } from '@angular/common/http';
import { JsonPipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-details',
  imports: [JsonPipe],
  templateUrl: './contact-details.component.html',
  styleUrl: './contact-details.component.css'
})
export class ContactDetailsComponent implements OnInit {
  ngOnInit(): void {
    let id = parseInt(this.activatedRoute.snapshot.params["id"])
    this.contactDetails(id)
  }

  contact: Contact = {
    contactId: 0,
    contactName: ""
  };

  http = inject(HttpClient)
  activatedRoute = inject(ActivatedRoute);

  contactDetails(id: number) {
    this.http.get<Contact[]>('/api/contacts').subscribe({
      next: (result) => {
        let contact = result.find(p => p.contactId == id);
        if (contact) {
          this.contact = contact
        }
      },
      error: (error) => {
        console.error(error);
      }
    })
  }
}
