import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnbooksComponent } from './returnbooks.component';

describe('ReturnbooksComponent', () => {
  let component: ReturnbooksComponent;
  let fixture: ComponentFixture<ReturnbooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReturnbooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
