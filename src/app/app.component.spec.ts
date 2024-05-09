import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  var app: AppComponent;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();

    app = new AppComponent();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have the 'My To Do List' title`, () => {
    expect(app.componentTitle).toEqual('My To Do List');
  });

  it('should have the default array items', () => {
    expect(app.allItems).toContain({ description: 'eat', done: true });
    expect(app.allItems).toContain({ description: 'sleep', done: false });
    expect(app.allItems).toContain({ description: 'play', done: false });
    expect(app.allItems).toContain({ description: 'laugh', done: false });
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('label')?.textContent).toContain(
      'What would you like to do today?'
    );
  });

  it('should add an item', () => {
    // Getting initial count of list before adding item.
    const initialListLength = app.allItems.length;
    app.addItem('project');

    // Checking if lists first item is new item and that length of list has increased.
    expect(app.allItems[0]).toEqual({ description: 'project', done: false });
    expect(app.allItems.length).toEqual(initialListLength + 1);
  });

  it('should not allow blank name items', () => {
    const initialListLength = app.allItems.length;

    // Adding a item with a blank name.
    app.addItem('');
    // Checking that no description item does not get added to list.
    expect(app.allItems[0]).toEqual({ description: 'eat', done: true });
    expect(app.allItems.length).toEqual(initialListLength);
  });

  it('should remove an item', () => {
    // Getting initial count of list before adding item.
    const initialListLength = app.allItems.length;
    app.remove(app.allItems[2]);
    fixture.detectChanges();

    // Checking if lists first item is new item and that length of list has increased.
    expect(app.allItems).not.toContain({ description: 'play', done: false });
    expect(app.allItems.length).toEqual(initialListLength - 1);
  });

  it('should add and remove an item', () => {
    // Getting initial length for list of items.
    const initialListLength = app.allItems.length;

    // Adding item to list and checking if its there and list size has increased.
    app.addItem('remove me');
    expect(app.allItems[0]).toEqual({ description: 'remove me', done: false });
    expect(app.allItems.length).toEqual(initialListLength + 1);

    // Removing item and checking if list size has decreased.
    app.remove(app.allItems[0]);
    fixture.detectChanges();

    expect(app.allItems).not.toContain({
      description: 'remove me',
      done: false,
    });
    expect(app.allItems.length).toEqual(initialListLength);
  });

  it('should filter properly', () => {
    // We check the length of the all items.
    app.filter = 'all';
    expect(app.items.length).toEqual(4);

    // We check the length of the list of the finished items.
    app.filter = 'done';
    expect(app.items.length).toEqual(1);

    // We check the length of the list of the to do items.
    app.filter = 'active';
    expect(app.items.length).toEqual(3);

    // We change the task to finished and check of the to do list decreased in size and 'done' list increments.
    app.allItems[1].done = true;
    expect(app.items.length).toEqual(2);
    app.filter = 'done';
    expect(app.items.length).toEqual(2);
  });
});
