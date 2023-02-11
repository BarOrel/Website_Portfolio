/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Project_2Component } from './Project-2.component';

describe('Project-2Component', () => {
  let component: Project_2Component;
  let fixture: ComponentFixture<Project_2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Project_2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Project_2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
