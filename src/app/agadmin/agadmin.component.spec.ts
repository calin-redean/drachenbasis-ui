import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgadminComponent } from './agadmin.component';

describe('AgadminComponent', () => {
  let component: AgadminComponent;
  let fixture: ComponentFixture<AgadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
