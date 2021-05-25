import { Component } from '@angular/core';

const FACT = 0.45359237;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  lb = 1;
  kg = Math.round(this.lb * FACT * 100) / 100;


  convertToKg() {
    this.kg = Math.round(this.lb * FACT * 100) / 100;
  }
  convertToLb() {
    this.lb = Math.round(this.kg / FACT * 100) / 100;
  }

}
