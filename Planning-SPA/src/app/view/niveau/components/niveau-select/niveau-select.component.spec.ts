/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NiveauSelectComponent } from './niveau-select.component';

describe('NiveauSelectComponent', () => {
  let component: NiveauSelectComponent;
  let fixture: ComponentFixture<NiveauSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NiveauSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NiveauSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
