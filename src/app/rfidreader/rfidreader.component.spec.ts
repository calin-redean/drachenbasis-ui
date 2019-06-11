import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RfidreaderComponent } from './rfidreader.component';

describe('RfidreaderComponent', () => {
  let component: RfidreaderComponent;
  let fixture: ComponentFixture<RfidreaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RfidreaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RfidreaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
