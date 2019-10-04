/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EleveListComponent } from './eleve-list.component';

describe('EleveListComponent', () => {
  let component: EleveListComponent;
  let fixture: ComponentFixture<EleveListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EleveListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EleveListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
