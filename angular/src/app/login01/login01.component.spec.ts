import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Login01Component } from './login01.component';

describe('Login01Component', () => {
  let component: Login01Component;
  let fixture: ComponentFixture<Login01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Login01Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Login01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
