import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoshopCard2Component } from './photoshop-card2.component';

describe('PhotoshopCard2Component', () => {
  let component: PhotoshopCard2Component;
  let fixture: ComponentFixture<PhotoshopCard2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoshopCard2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoshopCard2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
