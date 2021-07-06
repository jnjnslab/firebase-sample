import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Store01Component } from './store01.component';

describe('Store01Component', () => {
  let component: Store01Component;
  let fixture: ComponentFixture<Store01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Store01Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Store01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
