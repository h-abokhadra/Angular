import { Component } from '@angular/core';
// import HttpClient class(service)
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  students; // prop to store JSON
  headers = ["firstName", "lastName"]; // columns to display
  // inject HttpClient service
  constructor(http: HttpClient)
  {
  // fetch JSON data, subscribe() takes 2 callbacks
  const URL = "assets/students_2020.json";
  http.get(URL).subscribe(data => {
  // success
  this.students = data;
  }, error => {
  // failed
  console.log(error);
  });
 }
 }
 
