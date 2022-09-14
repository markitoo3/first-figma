import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageCardsComponent } from './main-page-cards.component';

describe('MainPageCardsComponent', () => {
  let component: MainPageCardsComponent;
  let fixture: ComponentFixture<MainPageCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPageCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainPageCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
