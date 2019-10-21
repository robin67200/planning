/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EleveFormComponent } from './eleve-form.component';

describe('EleveFormComponent', () => {
  let component: EleveFormComponent;
  let fixture: ComponentFixture<EleveFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EleveFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EleveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
