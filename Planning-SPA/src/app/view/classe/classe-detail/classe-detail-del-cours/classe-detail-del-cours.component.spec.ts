/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ClasseDetailDelCoursComponent } from './classe-detail-del-cours.component';

describe('ClasseDetailDelCoursComponent', () => {
  let component: ClasseDetailDelCoursComponent;
  let fixture: ComponentFixture<ClasseDetailDelCoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClasseDetailDelCoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClasseDetailDelCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
