import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdobeCard1Component } from './adobe-card1.component';

describe('AdobeCard1Component', () => {
  let component: AdobeCard1Component;
  let fixture: ComponentFixture<AdobeCard1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdobeCard1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdobeCard1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
