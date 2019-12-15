/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IndisponibiliteModalsComponent } from './indisponibilite-modals.component';

describe('IndisponibiliteModalsComponent', () => {
  let component: IndisponibiliteModalsComponent;
  let fixture: ComponentFixture<IndisponibiliteModalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndisponibiliteModalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndisponibiliteModalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
