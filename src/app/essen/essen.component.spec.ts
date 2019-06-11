import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EssenComponent } from './essen.component';

describe('EssenComponent', () => {
  let component: EssenComponent;
  let fixture: ComponentFixture<EssenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EssenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EssenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
