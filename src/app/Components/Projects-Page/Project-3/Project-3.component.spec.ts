/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Project_3Component } from './Project-3.component';

describe('Project-3Component', () => {
  let component: Project_3Component;
  let fixture: ComponentFixture<Project_3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Project_3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Project_3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
