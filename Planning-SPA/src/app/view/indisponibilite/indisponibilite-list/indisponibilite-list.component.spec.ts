/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IndisponibiliteListComponent } from './indisponibilite-list.component';

describe('IndisponibiliteListComponent', () => {
  let component: IndisponibiliteListComponent;
  let fixture: ComponentFixture<IndisponibiliteListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndisponibiliteListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndisponibiliteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
