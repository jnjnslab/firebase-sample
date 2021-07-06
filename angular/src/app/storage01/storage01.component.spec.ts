import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Storage01Component } from './storage01.component';

describe('Storage01Component', () => {
  let component: Storage01Component;
  let fixture: ComponentFixture<Storage01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Storage01Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Storage01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
