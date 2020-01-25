/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ClasseDetailAddCoursComponent } from './classe-detail-add-cours.component';

describe('ClasseDetailAddCoursComponent', () => {
  let component: ClasseDetailAddCoursComponent;
  let fixture: ComponentFixture<ClasseDetailAddCoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClasseDetailAddCoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClasseDetailAddCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
