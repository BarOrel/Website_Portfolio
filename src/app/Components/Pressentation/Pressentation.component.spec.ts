/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PressentationComponent } from './Pressentation.component';

describe('PressentationComponent', () => {
  let component: PressentationComponent;
  let fixture: ComponentFixture<PressentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PressentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PressentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
