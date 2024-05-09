import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ItemComponent } from './item.component';
import { AppComponent } from '../app.component';

describe('ItemComponent', () => {
  let component: ItemComponent;
  let fixture: ComponentFixture<ItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ItemComponent],
      providers: [AppComponent],
    });
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(ItemComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
