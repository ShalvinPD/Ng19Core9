import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgIf, NgFor, JsonPipe } from '@angular/common';
import { Contact } from './models/contact';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [NgIf, NgFor, JsonPipe, RouterOutlet, RouterLink, HeaderComponent]
})
export class AppComponent implements OnInit {
  public forecasts: WeatherForecast[] = [];

  public contacts: Contact[] = [];


  constructor(private http: HttpClient) {}

  ngOnInit() {
    // this.getContacts();
  }

  // getContacts() {
  //   this.http.get<Contact[]>('/api/contacts').subscribe(
  //     (result) => {
  //       this.contacts = result;
  //     },
  //     (error) => {
  //       console.error(error);
  //     }
  //   );

  // getForecasts() {
  //   this.http.get<WeatherForecast[]>('/weatherforecast').subscribe(
  //     (result) => {
  //       this.forecasts = result;
  //     },
  //     (error) => {
  //       console.error(error);
  //     }
  //   );
  // }

  // title = 'ng19core9.client';

}

