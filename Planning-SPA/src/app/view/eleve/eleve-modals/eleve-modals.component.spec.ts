/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EleveModalsComponent } from './eleve-modals.component';

describe('EleveModalsComponent', () => {
  let component: EleveModalsComponent;
  let fixture: ComponentFixture<EleveModalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EleveModalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EleveModalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
