import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacePickerDemo } from './place-picker-demo';

describe('PlacePickerDemo', () => {
  let component: PlacePickerDemo;
  let fixture: ComponentFixture<PlacePickerDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlacePickerDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlacePickerDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
