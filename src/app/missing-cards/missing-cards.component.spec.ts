import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissingCardsComponent } from './missing-cards.component';

describe('MissingCardsComponent', () => {
  let component: MissingCardsComponent;
  let fixture: ComponentFixture<MissingCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MissingCardsComponent]
    });
    fixture = TestBed.createComponent(MissingCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
