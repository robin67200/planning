/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NiveauModalsComponent } from './niveau-modals.component';

describe('NiveauModalsComponent', () => {
  let component: NiveauModalsComponent;
  let fixture: ComponentFixture<NiveauModalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NiveauModalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NiveauModalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
