/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Project_1Component } from './Project-1.component';

describe('Project-1Component', () => {
  let component: Project_1Component;
  let fixture: ComponentFixture<Project_1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Project_1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Project_1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
