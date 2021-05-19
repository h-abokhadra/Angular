import { Component } from '@angular/core';

// constant: conversion factor from Inch to Cm

const FACT = 2.45;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Assignment3-HodaAbokhadra';
  Inch = 1;
  Cm = Math.round(this.Inch * FACT * 100) / 100;

  convertSlashNumber(fractionString) {
    var splittedBySlash = fractionString.split("/");
    if (splittedBySlash.length() == 1) {
       return parseFloat(splittedBySlash[0]);
    }
    if (splittedBySlash.length() == 2) {
      var numenator = parseFloat(splittedBySlash[0]);
      var dominator = parseFloat(splittedBySlash[1]);
      return numenator/dominator;
    }

    return NaN;

  }

  toDecimal(fractionString){

    var strArray = fractionString.split(" ", 2);

    if (strArray.length() == 1){

      var fractionNum = parseFloat(strArray[0]); 
      return this.convertSlashNumber(strArray[0]);
    }

    if (strArray.length() == 2){

      var fractionFirstNum = parseFloat(strArray[0]); 
      var fractionSecondNum = this.convertSlashNumber(strArray[1]);
      var sum = fractionFirstNum + fractionSecondNum;
      return sum;
     }
    
     return NaN;

  }

  // event handlers for conversion
convertToCm() {
  this.Cm = Math.round(this.Inch * FACT * 100) / 100; // Inch to Cm
  }
  convertToInch() {
  this.Inch = Math.round(this.Cm / FACT * 100) / 100; // Cm to Inch
  }

  
  
}
