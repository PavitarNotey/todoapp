import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Item } from './item';
import { ItemComponent } from './item/item.component';

// Component Decorator that specifies data for the app component
@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, ItemComponent],
})

// Class for the app component
export class AppComponent {
  componentTitle = 'My To Do List';

  // Details for our filter tool
  filter: 'all' | 'active' | 'done' = 'all';

  // List of items in the todo list
  allItems = [
    { description: 'eat', done: true },
    { description: 'sleep', done: false },
    { description: 'play', done: false },
    { description: 'laugh', done: false },
  ];

  // Adds the user provided items to the array
  addItem(description: string) {
    if (!description) return;

    // adds item to the front of the array and top of list
    this.allItems.unshift({
      description,
      done: false,
    });
  }

  // Retrieves the items for each filter category when needed
  get items() {
    if (this.filter === 'all') {
      return this.allItems;
    }
    return this.allItems.filter((item) =>
      this.filter === 'done' ? item.done : !item.done
    );
  }

  // Removes the item from the list array
  remove(item: Item) {
    this.allItems.splice(this.allItems.indexOf(item), 1);
  }
}
