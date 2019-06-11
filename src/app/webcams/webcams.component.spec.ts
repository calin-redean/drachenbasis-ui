import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebcamsComponent } from './webcams.component';

describe('WebcamsComponent', () => {
  let component: WebcamsComponent;
  let fixture: ComponentFixture<WebcamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebcamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebcamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
