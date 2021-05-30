//Name: Hoda Abokhadra
//ID: 991578255


import { Component } from '@angular/core';
// import HttpClient class(service)
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  selectedDepartment;
  employees; // prop to store JSON
  selectedEmployees;
  headers = ["id", "firstName", "lastName", "department", "salary"]; // columns to display
  // inject HttpClient service
  constructor(http: HttpClient) {
    // fetch JSON data, subscribe() takes 2 callbacks
    const URL = "http://ejd.songho.ca/employees.json";
    http.get(URL).subscribe(data => {
      // success
      this.employees = data;
      this.selectedEmployees = data;
    }, error => {
      // failed
      console.log(error);
    });
  }
  selectDepartment() {
    this.selectedEmployees = this.employees.filter(employee => employee.department == this.selectedDepartment);

  }
}

