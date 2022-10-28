import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemovebooksComponent } from './removebooks.component';

describe('RemovebooksComponent', () => {
  let component: RemovebooksComponent;
  let fixture: ComponentFixture<RemovebooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemovebooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemovebooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
