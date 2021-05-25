import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //properties
  item = ""; // value for <input>
  items = []; // array of items, we will pass it to the child component

  addItem(){

    // add new item to the array
    //After this, Angular automatically updates the child comp.
    this.items.push(this.item);
  
  }
}
