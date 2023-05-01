import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  items: string[] = ['Milk', 'Eggs', 'Bread', 'Juice'];
  newItem: string = '';
  

  addItem() {
    if (this.newItem.trim() != '') {
      this.items.push(this.newItem.trim());
      this.newItem = '';
    }
  }

  removeItem(item: string) {
    this.items = this.items.filter(i => i != item);
  }

  editItem(item: string) {
    this.newItem = item;
    this.removeItem(item);
  }

}